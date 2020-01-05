// Code your solution here!

const printString = (string) => {
  if (string.length === 1) {
    console.log(string)
  }
  else {
    return printString(string.slice(0, string.length))
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