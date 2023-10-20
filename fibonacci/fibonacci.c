/**
 * @brief Calculates the Fibonacci sequence using recursion
 *
 * @param n The index of the Fibonacci number to calculate
 * @return N-th Fibonacci number
 */
int fibonacciC(int n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacciC(n - 1) + fibonacciC(n - 2);
  }
}
