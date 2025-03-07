<?php

  namespace controllers;
  class GameController extends AbstractController
  {

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
          return "game Will begin";
        case '/end':
          return "game End";
        default:
          return "";
      }
    }
  }