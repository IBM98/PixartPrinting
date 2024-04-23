<?php

// Get PDF ID from request
$pdf_id = $_GET['id'];

// Validate ID and access 
if ( !preg_match('/^[a-zA-Z0-9]+$/', $pdf_id) ) {
  die("Invalid PDF ID");
}

// Check if PDF exists 
$pdf_path = "pdfs/$pdf_id.pdf";
if ( !file_exists($pdf_path) ) {
  die("PDF not found");
}

// Serve the PDF for download
header('Content-Type: application/pdf');
header('Content-Disposition: attachment; filename="square_spiral.pdf"');
readfile($pdf_path);


?>
