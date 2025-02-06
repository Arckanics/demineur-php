<?php

  use game\matrice;

  include 'vendor/autoload.php';

$matrice = new Matrice();

echo file_get_contents('view.html');
