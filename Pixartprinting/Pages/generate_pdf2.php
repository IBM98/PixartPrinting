<?php
require('fpdf.php'); // Assuming FPDF library is included
require("CreateSpiral.php");

// Function to convert matrix to text for PDF cell
function matrixToText($matrix) {
  $text = "";
  foreach ($matrix as $row) {
    $text .= implode(" ", $row) . "\n";
  }
  return $text;
}


// Generate a unique identifier for the PDF
$pdf_id = uniqid();
// Input parameters
$size = 10;
$string =$_POST["text"];

// Generate spiral matrix
$spiral = createSpiral($size, $string);
// Get text representation of the matrix
$text = matrixToText($spiral);

sleep(5); // Simulate processing time

// Store the PDF 
// Create PDF object
$pdf = new FPDF();
$pdf->AddPage();

// Set font and font size
$pdf->SetFont('Arial', '', 12);
// Write spiral text to the PDF cell
$pdf->MultiCell(0, 15, $text, 0, 1);
// Output the PDF
$pdf->Output("pdfs/$pdf_id.pdf", 'F');


// Show link to download
$message = "Your PDF is ready! Download it here:<a href='http://localhost:8081/pixartprinting/Pages/DownloadPdf.php?id=$pdf_id'>Link</a>"; 
echo $message;




// // Create PDF object
// $pdf = new FPDF();
// $pdf->AddPage();

// // Set font and font size
// $pdf->SetFont('Arial', '', 12);



// // Write spiral text to the PDF cell
// $pdf->MultiCell(0, 15, $text, 0, 1);

// // Output the PDF
// $pdf->Output('square_spiral.pdf', 'D');


?>
