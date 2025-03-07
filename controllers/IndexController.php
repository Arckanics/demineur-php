<?php

  namespace controllers;
  class IndexController extends AbstractController {
    public function __construct($req)
    {
      parent::__construct($req);
    }

    public function index() {

      http_response_code(200);
      return parent::index();
    }
  }