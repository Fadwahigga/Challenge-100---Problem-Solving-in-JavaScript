function evenOdd(number) {
  if (number % 2 === 0) {
    return "EVEN";
  } else {
    return "ODD";
  }
}
console.log(evenOdd(8));

function evenOdd1(number) {
  return number % 2 === 0 ? "EVEN" : "ODD";
}
console.log(evenOdd1(9));