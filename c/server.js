const fs = require('fs');
const http = require('http');
const path = require('path');

const server = http.createServer((req, res) => {
  // Set the content type for WebAssembly files
  if (req.url.endsWith('.wasm')) {
    res.setHeader('Content-Type', 'application/wasm');
  }

  // Serve your WebAssembly files from a specific directory
  const filePath = path.join(__dirname, '.', req.url);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not Found');
    } else {
      res.writeHead(200);
      res.end(data);
    }
  });
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
