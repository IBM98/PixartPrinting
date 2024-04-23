<?php

function createSpiral($size, $string) {
  // Initialize empty square matrix
  $matrix = array_fill(0, $size, array_fill(0, $size, ""));

  // Define direction variables and starting position
  $direction = "right";
  $x = 0;
  $y = 0;
  $j =0;
  // Loop through all elements in the matrix
  for ($i = 0; $i < $size * $size; $i++) {
    // Set current element with the string
    if($j>=strlen($string)){
      $j=0;
    }
    $matrix[$y][$x] = $string[$j];
    $j++;
    // Change direction based on current position and rules
    switch ($direction) {
      case "right":
        if ($x === $size - 1 || $matrix[$y][$x + 1] !== "") {
          $direction = "down";
          $y++;
        } else {
          $x++;
        }
        break;
      case "down":
        if ($y === $size - 1 || $matrix[$y + 1][$x] !== "") {
          $direction = "left";
          $x--;
        } else {
          $y++;
        }
        break;
      case "left":
        if ($x === 0 || $matrix[$y][$x - 1] !== "") {
          $direction = "up";
          $y--;
        } else {
          $x--;
        }
        break;
      case "up":
        if ($y === 0 || $matrix[$y - 1][$x] !== "") {  
          $direction = "right";
          $x++;
        } else {
          $y--;
        }
        break;
    }
  }

  // Return the completed square matrix
  return $matrix;
}

?>
