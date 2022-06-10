//Business Logic

function beepBoop(number) {
  let arrayRange = []
  for (let i = 0; i <= number; i++) {
      arrayRange.push(i)
  }
  console.log(arrayRange);
//cut previous working function

let newArrayRange = arrayRange.map(function(element){

  if (arrayRange.includes(element)) {
    let wordsArrayRange = element.toString();
    let stringWordsArrayRange = wordsArrayRange.replace("1", " Beep! ");
    let test = stringWordsArrayRange.trim(" ");
    return test
  }
   

});
console.log(newArrayRange);
}
  beepBoop(21);
  //
