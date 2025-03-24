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

    public function index()
    {
      $uri = $this->req->getUri();
      preg_match('/\/\w+$/',  $uri, $res);

      switch ($res[0]) {
        case '/begin':
          return $this->willBegin();
        case '/end':
          return "game End";
        default:
          return "";
      }
    }


    private function willBegin() {
      $data = file_get_contents('php://input');
      $userSession = (object) json_decode($data, true, 512, JSON_THROW_ON_ERROR);
      $UUID = $userSession->{"demineur-session-id"};
      $settings = $userSession->{"demineur-settings"};
      $this->session = new SessionManager();
      $this->session->createSession($UUID);
      $this->session->setData($settings);
      print_r($this->session);
    }
  }