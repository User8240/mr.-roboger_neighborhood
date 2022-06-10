//Business Logic
function beepBoop(number) {
  let arrayRange = []
  for (let i = 0; i <= number; i++) {
      arrayRange.push(i)
  }
let newArrayRange = arrayRange.map(function(element){
    let wordsArrayRange = element.toString();
    let stringWordsArrayRange = wordsArrayRange.replace("1", " Beep! ");
    return stringWordsArrayRange
    });
    console.log(newArrayRange);
  }
  beepBoop(21);


  //UI logic
