//Business Logic
function beepBoop(usersNumber) {
  let arrayRange = [];
  let newArray = [];
  for (let i = 0; i <= usersNumber; i = i + 1) {
      arrayRange.push([i].toString());
  }
  console.log(arrayRange)

  arrayRange.forEach(function(element) {
   if (element.includes(1)) {
    newArray.push("Beep!")
  }
   else {
    newArray.push(element);
  }
  });
return newArray
}
beepBoop(10);



  //UI logic