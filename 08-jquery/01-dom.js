// Exercise #1:
// When the user clicks the 'copy' button, copy the user input to the output area

$("#copy").on("click", function () {
  let userInput = $("#userInput1").val();
  $("#output1").text(userInput);
});

// Exercise #2:
// When the user enters input text, copy the user input to the output area

$("#userInput2").on("input", function () {
  let userInput = $(this).val();
  $("#output2").text(userInput);
});
