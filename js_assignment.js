
//question 1: diff between slice and substring method

/* 
slice() extracts a part of a string and returns the extracted part in a new string.
The method takes 2 parameters: the start position, and the end position.

Substring is same as slice, but does not take negative values
*/
        


//question 2: write a function to display at least 6 array methods

//1. toString(): converts an array to a string of (comma separated) array values.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString()); //outputs: Banana,Orange,Apple,Mango


/*2. The join() method: It also joins all array elements into a string. It behaves just like toString(), but in addition you can specify the separator */
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.join(" * ")); // outputs: Banana * Orange * Apple * Mango


/* 3. The shift() method: It removes the first array element and "shifts" all other elements to a lower index */
var item = ["Banana", "Orange", "Apple", "Mango"];
console.log(item.shift()); // outputs: Banana


/* 4. The unshift() method: It adds an item at the begining of the array and returns the new length of the array*/
var newItem = ["Banana", "Orange", "Apple", "Mango"];
console.log(newItem.unshift("pineapple")); // outputs: 5


/* 5. The concat() method: creates a new array by merging (concatenating) existing arrays */
var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys);
console.log(myChildren); // outputs: Cecilie, Lone, Emil, Tobias, Linus


/* 4. The sort() method: sorts an array alphabetically*/
var myArray = ["Banana", "Orange", "Apple", "Mango"];
console.log(myArray.sort()); // outputs: Apple, Banana, Mango, Orange