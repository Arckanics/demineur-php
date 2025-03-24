<?php

  namespace controllers;

  use vendor\request;

  abstract class AbstractController {

    protected request $req;
    public function __construct($req) {
      $this->req = $req;
    }

    public function index()
    {
      return file_get_contents('../view/index.html');
    }

  }