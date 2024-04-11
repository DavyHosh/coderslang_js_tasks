/*Implement the function oneWillDo in helper.js. It should accept 3 boolean parameters (x, y, z) and

return true, if at least one of them is true
return false otherwise
The function oneWillDo should NOT contain any if statements*/

export const oneWillDo = (x, y, z) => {
  return x || y || z;
}