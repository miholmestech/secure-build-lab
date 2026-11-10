import http from 'node:http';
import { greet } from './greet.js';

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  try {
    const url = new URL(req.url, 'http://localhost');
    if (req.method !== 'GET') {
      res.writeHead(405, { Allow: 'GET' });
      return res.end(JSON.stringify({ error: 'Method not allowed' }));
    }
    if (url.pathname === '/health') {
      return res.end(JSON.stringify({ status: 'ok' }));
    }
    if (url.pathname === '/greet') {
      return res.end(JSON.stringify({ message: greet(url.searchParams.get('name')) }));
    }
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Not found' }));
  } catch {
    res.writeHead(400);
    res.end(JSON.stringify({ error: 'Invalid request' }));
  }
});

server.listen(3000, process.env.BIND_ADDRESS || '127.0.0.1');
