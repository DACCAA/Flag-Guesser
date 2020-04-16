// Declare a function to load the content
function loadContent() {
  // Make the loader animate in
  $('.full-width-loader').slideDown();

  // Make sure the option list is empty
  $('.optionList').html('');

  // Post to the API and return "data"
  $.post("https://daccaa.com/flagGuesser/api.php", function(data) {
    // Convert the JSON to a JS array
    data = JSON.parse(data);

    // Check to make sure it was successful
    if (!data.status) {
      errorMsg("An error has occured."); // If on a non-DACCAA environment this will need to be replaced with alert("Message here");. errorMsg is a custom DACCAA function.
      return; // End this function
    }

    // Update the flag image with the location of the flag we are provided with
    $('.flag').attr('src', data.flag);

    // For each of the options add them to the optionList div
    for (var i = 0; i < data.options.length; i++) {
      $('.optionList').append(data.options[i]);
    }

    // Fade the optionList div (in case it was hidden)
    $('.optionList').fadeIn();
    // Fade the flag in (in case it was hidden)
    $('.flag').fadeIn();

    // Hide the loader because we are done
    $('.full-width-loader').slideUp();

  });

}

// Detect a click of an "options" class item (the buttons) inside of the "optionList" div
$('.optionList').on('click', '.options', function(e) {
  // Stop any default actions occuring that may
  e.preventDefault();

  // Check to see if the data attribute of the button is equal to correct
  // This is the <button data-type="">... section so data-type must have the value of correct
  if ($(this).data('type') == "correct") {
    // Set the shadow to green
    $('.holder').css("box-shadow", "0 6px 12px rgba(0,255,0,0.36), 0 3px 6px rgba(0,255,0,0.43)");
    // Change the main text to say correct
    $('.holder h1').html('Correct!');

    // After 800ms...
    setTimeout(function() {
      // Set the shadow back to the default shadow defined in the css
      // This works because when we added the green one it added it inline such as <div class="holder" style="box-shadow..."> inline styles override the CSS external styles, so when we remove it, it just reverts back to the default colour
      $('.holder').css("box-shadow", "");
      // Change the text back
      $('.holder h1').html('What flag is this?');
      // Fade the optionList out so it changes better
      $('.optionList').fadeOut("fast");
      // Fade the flag out
      $('.flag').fadeOut("fast");
      // Load in the next content
      loadContent();
    }, 800);



  } else {
    // Similar to above, make the shadow red
    $('.holder').css("box-shadow", "0 6px 12px rgba(255,0,0,0.36), 0 3px 6px rgba(255,0,0,0.43)");
    // Change the text to incorrect
    $('.holder h1').html('Incorrect!');

    // Fade out the option the user selected, making it easier for them to guess
    $(this).fadeOut();

    // After 800ms...
    setTimeout(function() {
      // Revert the shadow back to normal
      $('.holder').css("box-shadow", "");
      // Change the text back to normal
      $('.holder h1').html('What flag is this?');
      // Do nothing else to allow them to continue guessing
    }, 800);
  }

});

// Run this on page load
loadContent();
