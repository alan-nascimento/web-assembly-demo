# Hello World Example in C

## Pre-requisites

- [CMake](https://cmake.org/)
- [Emscripten](https://emscripten.org/docs/getting_started/downloads.html)
- [Python](https://www.python.org/downloads/)

## Building

```bash
emcc hello.c -o hello.html
```

## Running

```bash
python -m http.server
```
