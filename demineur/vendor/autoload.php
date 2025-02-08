<?php
  spl_autoload_register(function   ($class)  {
    $file = dirname(__DIR__) . 'autoload.php/' . str_replace('\\', '/', $class) . '.php'; // chemin vers le dossier vendor et au format Unix (/ pour les sous-dossiers), avec un chemin relatif à la racine du document

    if (file_exists($file)) {
      require $file;
    }
  });