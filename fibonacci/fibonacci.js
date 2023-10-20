/**
 * @description Calculates the Fibonacci sequence using recursion
 *
 * @param {number} n Fibonacci number index to calculate
 * @returns {number} N-th Fibonacci number
 */
function fibonacciJS(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacciJS(n - 1) + fibonacciJS(n - 2);
  }
}
