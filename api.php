<?php
// Get the contents of the JSON file
$data = file_get_contents("cache/all.json");
// Decode it so we can work with it in PHP
$data = json_decode($data, true);

// Shuffle the country list
shuffle($data);

// Get a random element
$random = array_rand($data);

// Define the flag
$flag = $data[$random]['flag'];

// Create the array of possible answers
$possible = array();
// Declare the correct answer
$correct = $data[$random]['name'];

// Push the correct answer into the array
array_push($possible, '<button class="options" data-type="correct" data-value="'.$correct.'">'.$correct."</button>");

// Define count as 0
$count = 0;

// Loop through 6 other countries
foreach($data as $country) {
  
  // If this country is not the answer, add it to the "list"
  if($country !== $correct) {
    // Add the button to the array
    array_push($possible, '<button class="options" data-type="false" data-value="'.$country['name'].'">'.$country['name']."</button>");
    // Increment the count
    $count++;

    // If the count is equal to 6 then we need to stop
    if($count == 6) {
      break;
    }
  }
  
}

// Shuffle the possible answers array so the first isn't always correct
shuffle($possible);

// Send these three pieces of data back
$datas['flag'] = $flag;
$datas['options'] = $possible;
$datas['status'] = true;
echo json_encode($datas);
