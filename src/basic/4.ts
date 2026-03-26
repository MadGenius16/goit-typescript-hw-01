function showMessage(message: string):void {
  console.log(message);
}
console.log(showMessage("Hallo John"))

function calc(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(calc(4,12))

function customError(): never {
  throw new Error('Error');
}
// console.log(customError())