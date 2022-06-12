//Business Logic
function beepBoop(usersNumber) {
  let arrayRange = [];
  let newArray = [];
  for (let i = 0; i <= usersNumber; i = i + 1) {
      arrayRange.push([i].toString());
  }
  console.log(arrayRange)
}
  beepBoop(10);



  //UI logic