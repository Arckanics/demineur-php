<?php

  namespace vendor;

  use \stdClass;

  class request
  {
    private object $src;
    private array $routes;
    public function __construct(array $_server)
    {
      $this->src = (object) $_server;
      $this->routes = $_ENV['APP_ROUTES'];
    }

    // cookies
    private function cookieParser()
    {
      $parsed = [];
      $cookies = $this->src->http_cookie;
      $each = explode("; ", $cookies);
      foreach ($each as $cookie) {
        $cookie = explode("=", $cookie);
        $parsed[$cookie[0]] = $cookie[1];
      }
      return $parsed;
    }

    public function getCookie(string $cookie)
    {
      $cookies = $this->cookieParser();
      if (!isset($cookies[$cookie])) {
        return null;
      }
      return $cookies[$cookie];
    }

    // server

    public function getHostname() {
      return $this->src->SERVER_NAME;
    }
    public function getMethod() {
      return strtolower($this->src->REQUEST_METHOD);
    }
    public function getPort() {
      return strtolower($this->src->SERVER_PORT);
    }
    public function getIp() {
      return strtolower($this->src->SERVER_ADDR);
    }

    // query string
    public function getQuery() {
      return $this->src->QUERY_STRING;
    }

    // URI
    public function getURI() {
      return $this->src->REQUEST_URI;
    }

    // matching controller
    public function findController(): string | bool {
      $routes = preg_replace('/\/demineur/', '', $this->getURI());
      return $this->routes[$routes] ?? false;
    }
  }