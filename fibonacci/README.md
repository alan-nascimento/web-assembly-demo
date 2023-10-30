# C vs JavaScript

Simple example of a performance comparison between a JavaScript and a C implementation of the Fibonacci sequence.

## Getting Started

### Prerequisites

- [Emscripten](https://emscripten.org/docs/getting_started/downloads.html)
- [Python](https://www.python.org/downloads/)

### Building

1. Go to the fibonacci root directory.
2. Build the WebAssembly module:

```sh
emcc fibonacci.c -o fibonacci.c.js -s EXPORTED_FUNCTIONS="['_fibonacciC']" -s EXPORTED_RUNTIME_METHODS='["ccall", "cwrap"]' -O3
```

3. Check the build result.

### Running

1. Go to the fibonacci root directory.
2. Start a web server:

```sh
python -m http.server
```

3. Check the console for the URL.

### Testing

1. Go to `http://[::]:8000/` in the browser.
2. Open the browser console.
3. Call the JavaScript Fibonacci function:

```js
Math.fibonacciJS(40);
```

4. Call the C Fibonacci function:

```js
Math.fibonacciC(40);
```

5. Compare the results.
