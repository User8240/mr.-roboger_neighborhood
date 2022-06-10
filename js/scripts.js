//Business Logic

function beepBoop(number) {
  let arrayRange = []
  for (let i = 0; i <= number; i++) {
      arrayRange.push(i)
  }
 // console.log(arrayRange);
 let stringRange = arrayRange.filter(
  element => typeof element === 'string'
 );
 console.log(stringRange)
}

  beepBoop(14);
  //
