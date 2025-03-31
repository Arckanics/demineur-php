<?php

  namespace game;
  use vendor\request;

  class matrice {
    private array $difficulty = [
      0.08,
      0.25,
      0.4,
      0.65,
      0.8
    ];

    private array $matrice;
    private int $minesCount;
    private int $caseOpenedCount = 0;
    private array $caseHasUpdate = [];

    public function __construct()
    {
    }

    public function getMinesCount(int $scale, int $level): int {
      return round(($scale * $scale) * $this->difficulty[$level]);
    }

    public function setMatrix(array $matrix): void
    {
      $this->matrice = $matrix;
    }
    public function getCaseHasUpdate(): array
    {
      return $this->caseHasUpdate;
    }

    public function getOpenedCasesCount() {
      return $this->caseOpenedCount;
    }

    public function setOpenedCasesCount(int $count) {
      $this->caseOpenedCount = $count;
    }
    public function generate(int $scale = 16, int $level = 2): void
    {
      // Initialise la matrice et le nombre de cases non-mines autours de chaque case.
      $this->matrice = array_fill(0, $scale, array_fill(0, $scale, ['opened' => false, 'isMine' => false, 'isMarked' => false, 'neighboringMines' => 0]));

      // Détermine le nombre de mines (tailles * diff).
      $mines = $this->getMinesCount($scale, $level);
      $this->minesCount = $mines;

      $minesCase = [];

      // Applique les mines.
      while ($mines > 0) {
        $x = random_int(0, $scale - 1);
        $y = random_int(0, $scale - 1);

        if (!$this->matrice[$y][$x]['isMine']) {
          $this->matrice[$y][$x]['isMine'] = true;

          // Met à jour le nombre de mines autours de chaque case voisine.
          for ($dx = -1; $dx <= 1; $dx++) {
            for ($dy = -1; $dy <= 1; $dy++) {
              if (($x + $dx >= 0 && $y + $dy >= 0) &&  // La case est dans la matrice
                ($x + $dx < $scale && $y + $dy < $scale) &&  // ... et n'est pas en dehors
                !($dx === 0 && $dy === 0)) {  // On ne considère pas la case actuelle
                $this->matrice[$y+$dy][$x+$dx]['neighboringMines']++;
              }
            }
          }

          $minesCase[] = &$this->matrice[$y][$x];

          $mines--;
        }
      }

      foreach ($minesCase as $mine) {
        $mine['neighboringMines'] = 0;
      }
    }

    public function getMatrix(): array
    {
      return $this->matrice;
    }
    public function getMinesNumber(): int
    {
      return $this->minesCount;
    }

    public function update(): array {
      $req = file_get_contents('php://input');
      $data = (object) json_decode($req, true, 512, JSON_THROW_ON_ERROR);
      $interact = (object) $data->{"demineur-interracted"};

      if (!isset($interact->action) || !isset($interact->x) || !isset($interact->y)) {
        return ['error' => 'Missing action or coordinates'];
      }

      $x = $interact->x;
      $y = $interact->y;
      $action = $interact->action;

      // Vérification des coordonnées de la case
      if (!isset($this->matrice[$y][$x])) {
        return ['error' => 'Invalid coordinates'];
      }

      $case = &$this->matrice[$y][$x];

      if ($action === "open" && !$case['opened'] && !$case['isMarked']) {
        return $this->openCase($x, $y);
      }

      if ($action === "mark" && !$case['opened']) {
        $case['isMarked'] = !$case['isMarked'];
        $this->caseHasUpdate[] = [...$case,
        "case" => ["x" => $x, "y" => $y],
        ];
      }


      return ['info' => 'continue'];
    }

    private function openCase(int $x, int $y): array  {
      $case = &$this->matrice[$y][$x];

      if (isset($case) && !$case['opened'] && !$case['isMarked'])  {
        if ($case['isMine']) {
          $case['opened'] = true;
          $this->caseOpenedCount++;
          $this->storeUpdate($x,$y);
          return ['info' => 'failed'];
        }
        $case['opened'] = true;
        $this->caseOpenedCount++;
        $this->storeUpdate($x,$y);
        $this->openNeighboursCase($x, $y);
        return ['info' => 'continue'];
      }

      return ['error' => 'Invalid coordinates or already opened/marked'];
    }

    private function openNeighboursCase(int $x, int $y): void  {

      for ($dy= -1; $dy < 2 ; $dy++)  {
        for ($dx= -1; $dx < 2 ; $dx++)  {
          if (isset($this->matrice[$y+$dy][$x+$dx])) {

            $nCase = &$this->matrice[$y+$dy][$x+$dx];

            if (!isset($nCase) || ($nCase['isMine'] && $nCase['opened']) || $nCase['isMarked'])  {
              continue;
            } elseif (!$nCase['opened'] && !$nCase['isMarked'] && !$nCase['isMine'] && isset($nCase)) {
              $nCase['opened'] = true;
              $this->caseOpenedCount++;
              $this->storeUpdate($x+$dx, $y+$dy);
              if ($nCase['neighboringMines'] == 0)  {
                $this->openNeighboursCase($x+$dx, $y+$dy);
              }
            }

          }

        }
      }
    }

    private function storeUpdate(int $x, int $y): void
    {

      $this->caseHasUpdate[] =
        [
          ...$this->matrice[$y][$x],
          "case" => ["x" => $x, "y" => $y]
        ];
    }

  }