function sumOfPosative(Array) {
  let initValue = 0;
  for (let i = 0; i < Array.length; i++) {
    if (Array[i] > 0) {
      initValue += Array[i];
    }
  }
  return initValue;
}
console.log(sumOfPosative([1, -3, 5, 6]));
function sumOfPosative1(Array) {
  let initValue = 0;
  return Array.filter((x) => x > 0).reduce((x, y) => x + y, initValue);
}
console.log(sumOfPosative1([1, -3, 5, 6]));
