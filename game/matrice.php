<?php

  namespace game;
  class matrice {
    private $difficulty = [
      0.03,
      0.25,
      0.4,
      0.65,
      0.8
    ];

    private $matrice;
    public function __construct()
    {
    }

    public function setMatrix(array $matrix): void
    {
      $this->matrice = $matrix;
    }
    public function generate(int $scale = 16, int $level = 2): void
    {
      // créer une matrice 2d de "0"
      for ($y = 0; $y < $scale; $y++) {
        $this->matrice[$y] = [];
        for ($x = 0; $x < $scale; $x++) {
          $this->matrice[$y][$x] = 0;
        }
      }

      // détermine le nombre de mines (tailles * diff)
      $mines = round(($scale * $scale) * $this->difficulty[$level]);

      // applique les mines
      while ($mines > 0) {
        $x = random_int(0, $scale - 1);
        $y = random_int(0, $scale - 1);
        $case = $this->matrice[$y][$x];
        if ($case === 0) {
          $this->matrice[$y][$x] = 1;
          $mines--;
        }
      }
    }

    public function getMatrix(): array
    {
      return $this->matrice;
    }

    public function isMine(int $x, int $y): bool {
      return $this->matrice[$y][$x] === 1;
    }
  }