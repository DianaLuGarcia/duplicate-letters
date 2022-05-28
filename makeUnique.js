// // Write your solution below:
// Write a function to remove all duplicate letters from a provided string.
//The string will only contain lowercase letters between a - z.
//The string will not contain spaces.

// For example:

// >>> makeUnique('helloworld')
// // helowrd

// >>> makeUnique('iwanttoclimbamountain')
// // iwantoclmbu

//var texts = ["test", "rest", "why", "puss"];

function dups(string) {
  string = string.toLowerCase(); //removes capital letters
  string = string.split(" ").join(""); //remove spaces

  let dupLetter = "";

  console.log(dupLetter);

  for (const chr of string) {
    if (dupLetter.includes(chr) == false) {
      dupLetter += chr;

      //console.log(dupLetter);
    }
  }

  return console.log(dupLetter);
}

dups("tTThis is a test");
