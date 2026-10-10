const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const OUT_DIR = path.resolve(__dirname, '..', 'out');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain',
};

const server = http.createServer((req, res) => {
  const rawPath = req.url.split('?')[0];
  let urlPath = rawPath;
  try {
    urlPath = decodeURIComponent(rawPath);
  } catch {}
  if (urlPath.startsWith('/examsathi/')) {
    urlPath = urlPath.substring('/examsathi'.length);
  } else if (urlPath === '/examsathi') {
    urlPath = '/';
  }
  let filePath = path.join(OUT_DIR, urlPath);

  if (!filePath.startsWith(OUT_DIR + path.sep) && filePath !== OUT_DIR) { res.writeHead(403); res.end(); return; }

  // Check if directory -> try index.html
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  // If file doesn't exist, try appending .html
  if (!fs.existsSync(filePath)) {
    if (fs.existsSync(filePath + '.html')) {
      filePath = filePath + '.html';
    } else if (fs.existsSync(path.join(filePath, 'index.html'))) {
      filePath = path.join(filePath, 'index.html');
    } else {
      // 404 fallback
      const notFoundPath = path.join(OUT_DIR, '404.html');
      if (fs.existsSync(notFoundPath)) {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(fs.readFileSync(notFoundPath));
        return;
      }
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  try {
    const content = fs.readFileSync(filePath);
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('500 Server Error: ' + err.message);
  }
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Static server running at http://127.0.0.1:${PORT} serving ${OUT_DIR}`);
});
