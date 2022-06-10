//Business Logic

function beepBoop(number) {
  let arrayRange = []
  for (let i = 0; i <= number; i++) {
      arrayRange.push(i)
  }
  console.log(arrayRange);
//cut previous working function

let newArrayRange = arrayRange.map(function(element){
  if (element.includes(1,2,3)) {
    let wordsArrayRange = element.toString();
    return wordsArrayRange
    //return wordsArrayRange.replaceAll("")
  }
  else { (element !== 3)
    return element
  }

});
console.log(newArrayRange);
}
  beepBoop(5);
  //
