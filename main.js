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