<?php

  use game\matrice;
  use vendor\request;

  require_once '../routes.php';
  require_once '../vendor/request.php';

  header('X-Powered-By: Deminor.inc', true);

  $request = new request($_SERVER);

  include '../vendor/autoload.php';

  $uri = $request->findController();

  if ($uri === false) {
    http_response_code(404);
    echo "<h1>404 Not Found</h1>".PHP_EOL;
    echo "<div>Le fichier est introuvable</div>";
    return;
  }
  $cName = "controllers\\".(string)$uri ."Controller";

  $controller = new $cName($request);

  echo $controller->index();

