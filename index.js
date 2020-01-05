// Code your solution here!

const printString = (string) => {
  console.log(string[0])
  if (string.length > 1) {
    return printString(string.slice(0, string.length - 1))
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