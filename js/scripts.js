//Business Logic
function beepBoop(usersNumber) {
  let arrayRange = [];
  let newArray = [];
  for (let i = 0; i <= usersNumber; i = i + 1) {
      arrayRange.push([i].toString());
  }
  console.log(arrayRange)

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
beepBoop(23);



  //UI logic