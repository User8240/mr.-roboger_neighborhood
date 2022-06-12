//Business Logic----------------------------------
function beepBoop(usersNumber) {
  let arrayRange = [];
  let newArray = [];
  for (let i = 0; i <= usersNumber; i = i + 1) {
      arrayRange.push([i].toString());
  }
  arrayRange.forEach(function(element) {
    if (element.includes(3)) {
    newArray.push("Won't you be my neighbor?")
  } else if (element.includes(2)) {
    newArray.push("Boop!")
  } else if (element.includes(1)) {
    newArray.push("Beep!")
  } else {
    newArray.push(element);
  }
  });
  return newArray
}
//UI logic----------------------------------------
$(document).ready(function() {
  $("#main-form").submit(function(event) {
    event.preventDefault();
    const usersNumber = $("input#userInput").val();
    let userOutput = beepBoop(usersNumber)
    $("#userOutput").text(userOutput);
    $("#results").show();
  });

  $("#hideResults").click(function(event) {
    $("#userOutput").text("");
    $("#userInput").val("");
  });
});