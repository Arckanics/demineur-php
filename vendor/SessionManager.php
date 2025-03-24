<?php

  /* @gestionnaire_de_session
   * permet de stocker des sessions utilisateur pour le jeu
   * sans utiliser les fonctionnalités native de PHP.
   * - choix du dossier
   * - id initial fourni par le client
   */

  namespace vendor;

  class SessionManager
  {
    private string $id;
    private string $data;
    private string $store;
    private string $session;
    public function __construct(string $storage = "../sessions-storage")
    {
      if (!is_dir($storage)) {
        $this->createSessionDir($storage);
      }

      $this->store = $storage;
    }

    private function createSessionDir(string $storage)
    {
      if (!mkdir($storage, 0777, true) && !is_dir($storage)) {
        http_response_code(500);
        throw new \RuntimeException(sprintf('Directory "%s" was not created', $storage));
      }
    }

    private function createSessionPath($id) {
      $this->id = $id;
      $this->session = "$this->store/$id";
    }

    public function createSession($id)
    {
      $this->createSessionPath($id);
      file_put_contents("$this->session", '');

    }

    public function getSession($id)
    {
      $this->createSessionPath($id);
      return file_exists($this->session) === true;
    }

    public function getData()
    {
      if (!isset($this->data)) {
        try {
          $this->data = file_get_contents("$this->session");
        } catch (\Throwable $th) {
          echo $th->getMessage();
          return null;
        }
      }

      return $this->data;

    }

    public function setData(string $data)
    {
      $this->data = $data;
    }

    public function storeSession() {
      try {
        file_put_contents($this->session, $this->data);
      } catch (\Throwable $th) {
        echo $th->getMessage();
      }
    }
  }