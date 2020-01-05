// Code your solution here!

const printString = (string) => {
  console.log(string[0])
  
  if (string.length > 1) {
    return printString(string.slice(1, string.length))
  }
  else {
    return true;
  }
}

const reverseString = (string) => {
  if (string.length === 1) {
    console.log(string);
  }
  else {
    return reverseString(string[0])
  }
}