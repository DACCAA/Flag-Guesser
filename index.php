<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>DACCAA | Flag Guesser</title>
  
  <!-- Optionally link the DACCAA UI if you make use of it (this example does). Must download it if using it on your own server -->
  <link rel="stylesheet" type="text/css" href="https://daccaa.com/UI/daccaa-ui.css">
  <!-- Link your own stylesheet -->
  <link rel="stylesheet" type="text/css" href="main.css?v=<?php echo filemtime('main.css'); ?>">
  
</head>
<body>
  
  <!-- Declare a loading bar we can show at the top of the page -->
  <div class="full-width-loader"></div>
  
  <!-- Create a full page element using DACCAA UI -->
  <div class="fill centre grey-bg">
    <!-- Have a holder in the centre which we will define ourseleves in CSS -->
    <div class="holder">
      
      <!-- Specify an blank image that we will change with JS -->
      <img src="#" alt="Flag" class="flag" />
      
      <!-- Have the prewritten message here -->
      <h1>What flag is this?</h1>
      
      <!-- Have a div to store the potential options in -->
      <div class="optionList">
        
      </div>
      
      <!-- Have a div to show who the data is provided by -->
      <div class="credit">
        Data provided by: <a href="https://restcountries.eu/" target="_blank">restcountries.eu</a>
      </div>
      
    </div>
  </div>
  
  <!-- Include the jQuery library, we use this! Also include our own JS file -->
  <script src="https://code.jquery.com/jquery-3.1.0.js"></script>
  <script src="main.js?v=<?php echo filemtime('main.js'); ?>"></script>
  
</body>
</html>
