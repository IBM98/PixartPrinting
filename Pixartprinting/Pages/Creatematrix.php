<?php
function matrixToText($matrix, $delimiter = " ") {
  $text = "";
  foreach ($matrix as $row) {
    for ($i=0;$i<count($row);$i++){
      $text = $text."".$row[$i];
    }
    printf("\n".$text);
    
  }
  return $text;
}

$matrix = [[1, 2, 3], [6, 5, 4]];
$text = matrixToText($matrix);

echo $text;

?>
