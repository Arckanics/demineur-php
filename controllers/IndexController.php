<?php

  namespace controllers;
  class IndexController extends AbstractController {
    public function __construct($req)
    {
      parent::__construct($req);
    }

    public function index() {
      return parent::index();
    }
  }