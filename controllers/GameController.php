<?php

  namespace controllers;

  use game\matrice;
  use vendor\SessionManager;

  class GameController extends AbstractController
  {
    private SessionManager $session;

    public function __construct($req)
    {
      parent::__construct($req);
    }

    /**
     * @throws \JsonException
     */
    public function index(): ?string
    {
      $uri = $this->req->getUri();
      preg_match('/\/\w+$/', $uri, $res);

      switch ($res[0]) {
        case '/begin':
          return $this->willBegin();
        case '/update':
          return $this->willUpdate();
        case '/end':
          return "game End";
        default:
          return "";
      }
    }


    /**
     * @sessionFile
     * @return string
     * @throws \JsonException
     */
    private function willBegin(): string
    {
      $data = file_get_contents('php://input');
      $userSession = (object)json_decode($data, true, 512, JSON_THROW_ON_ERROR);
      $UUID = $userSession->{"demineur-session-id"};
      $settings = $userSession->{"demineur-settings"};
      $this->session = new SessionManager();
      $this->session->createSession($UUID);
      $this->session->setData($settings);
      $this->session->storeSession();
      $settings = (object)json_decode($settings, true, 512, JSON_THROW_ON_ERROR);
      $settings->view = file_get_contents('../view/game-frame.html');
      http_response_code(200);
      return json_encode($settings, JSON_THROW_ON_ERROR);
    }

    private function willUpdate(): false|string
    {
      $data = file_get_contents('php://input');
      $userSession = (object)json_decode($data, true, 512, JSON_THROW_ON_ERROR);
      $this->session = new SessionManager();
      $this->session->getSession($userSession->{"demineur-session-id"});

      $session = json_decode($this->session->getData(), true, 512, JSON_THROW_ON_ERROR);

      $matrice = new matrice();

      $updateState = [];

      if (!isset($session["matrix"])) {
        $matrice->generate($session['size'], $session['level'], (object) $userSession->{"demineur-interracted"});
        $session['startAt'] = time();
        $session['gameState'] = [
          "status" => "inGame",
          "mines" => $matrice->getMinesNumber(),
          "opened" => 0,
          "scale" => (int)$session["size"] * $session["size"],
          "gameScore" => 0
        ];
      } else {
        $matrice->setMatrix($session["matrix"]);
      }

      $state = $session["gameState"];
      $matrice->setOpenedCasesCount($state["opened"]);
      $matrice->setMinesNumber((int)$state["mines"]);
      $matrice->setScaleNumber((int)$state["scale"]);

      if ($state["status"] === "inGame") {
        $updateState = $matrice->update();
      } else {
        $updateState["info"] = $session["gameState"]["status"];
      }



      if (isset($updateState["error"])) {
        http_response_code(400);
        return json_encode($updateState, JSON_THROW_ON_ERROR);
      }

      $session["gameState"]["opened"] = $matrice->getOpenedCasesCount();
      $session["matrix"] = $matrice->getMatrix();

      switch ($updateState["info"]) {
        case "failed":
          $session["endAt"] = time();
          $session['gameState']["status"] = "failed";
          break;
        case "success":
          $session["endAt"] = time();
          $session['gameState']["gameScore"] = $matrice->getGameScore(
            $state["scale"], $session["endAt"] - $session["startAt"]);
          $session['gameState']["status"] = "won";
          break;
        default:
          break;
      }
      // sauvegarde côté serveur
      $this->session->setData(json_encode($session, JSON_THROW_ON_ERROR));
      $this->session->storeSession();

      // préparation réponse
      $session["matrix"] = $matrice->getCaseHasUpdate();
      unset($session["gameState"]["opened"]);

      return json_encode($session, JSON_THROW_ON_ERROR);
    }
  }