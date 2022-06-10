# _Section in Review_

#### By _**Grace Kostanich**_

#### _A website that converts a users inputted number(s) to a range from zero to the inputted number, while also replacing any numbers that contain 1, 2, or 3 anywhere in the number range with a correlating word or phrase!_

## Technologies Used

* _HTML_
* _CSS_
* _JS_

## Description

_This is a webpage written in HTML using Bootstrap CSS for styling & JavaScript for functionality._

## Setup/Installation Requirements

* _Fork project to your own GitHub repository_ 
* _Clone that repository to your desktop_
* _Open index.html or view any files you'd like!_

## Known Bugs

* _No known issues_

## License

_none_

Copyright (c) _6/10/2022_ _Grace Kostanich_

## Tests


**Describe:** _beepBoop()_


**Test:** _It will return an array of numbers from 0 to the user's inputted number_

Code: _beepBoop(5);_

Expected Output: _[0, 1, 2, 3, 4, 5]_

**Test:** _It will turn a value in an array of numbers that is greater than 0 and less than or equal to 3 into a string value, and return this as a new array _

Code: _beepBoop(5);_

Expected Output: _[0, '1', '2', '3', 4, 5]_

**Test:** _It will change the value of each character in an array of numbers to a string, then replace any string containing a 1 with the word "Beep!" _

Code: _beepBoop(5);_

Expected Output: _[0, 'Beep!', '2', '3', 4, 5]_
