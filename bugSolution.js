function foo(x) {
  if (x === null) {
    return 0; 
  } else if (x === undefined) {
    return -1; // Or handle undefined differently
  }
  return x.length; 
}

console.log(foo(null)); // Output: 0
console.log(foo(undefined)); // Output: -1
console.log(foo([1, 2, 3])); // Output: 3
console.log(foo({})); // Output: undefined