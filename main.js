function fib(n) {
  let results = [];
  for (let i = 0; i < n; i++) {

    if (i < 2) {
      results.push(i);
      continue
    }
    results.push(results[i - 1] + results[i - 2])
  }
  return results[results.length - 1];
}


function fibRec(n) {

  if (n <= 2) {
    return n == 1 ? 0 : 1;
  }

  return fibRec(n-1) + fibRec(n-2);
}

console.log(fib(8));
console.log(fibRec(8));


function fibs(n) {
  let results = [];
  for (let i = 0; i < n; i++) {

    if (i < 2) {
      results.push(i);
      continue
    }
    results.push(results[i - 1] + results[i - 2])
  }
  return results;
}


function fibsRec(n) {

  if (n == 0) {
    return [];
 }
// Return chain begins at n == 0 is true, then the concat begins from [].concat(fibRec(1))
// starting the array at [0] and proceeding from there 
 return fibsRec(n - 1).concat(fibRec(n));
}

console.log(fibs(8));
console.log(fibsRec(8));