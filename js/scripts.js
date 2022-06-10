//Business Logic

function beepBoop(number) {
  let arrayRange = []
  for (let i = 0; i <= number; i++) {
      arrayRange.push(i)
  }
  console.log(arrayRange);
//cut previous working function

let testArray = arrayRange.toString();
let newArrayRange = testArray.map(function(element){
    console.log(newArrayRange)
  if (newArrayRange.includes("1","2","3")) {
   // let wordsArrayRange = element.toString();
    return testArray.replaceAll("ok")
  }
  else { 
  return element
  }

});
console.log(newArrayRange);
}
  beepBoop(14);
  //
