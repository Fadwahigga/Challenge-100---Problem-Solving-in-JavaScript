function SumWithoutTheHighestAndTheLowestNumber(Array) {
  if (Array == null) return 0;
  let minNum = Math.min(...Array);
  let maxNum = Math.max(...Array);
  let filtteredArray = Array.filter((x) => x !== minNum && x !== maxNum);
  let newArray = filtteredArray.reduce((x, y) => x + y, 0);
  return newArray;
}
SumWithoutTheHighestAndTheLowestNumber([1, 3, 5, 9]);
console.log(SumWithoutTheHighestAndTheLowestNumber([1, 3, 5, 9]))