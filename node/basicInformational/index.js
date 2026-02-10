const http = require('http');
const fs = require('fs');
const path = require('path');



const server = http.createServer((req, res) => {
  
  // Figure out which file to serve
  let filePath;
  
  if (req.url === '/' || req.url === '/home') {
    filePath = path.join(__dirname, 'index.html');
  } else if (req.url === '/about') {
    filePath = path.join(__dirname, 'about.html');
  } else if (req.url === '/contact') {
    filePath = path.join(__dirname, 'contact-me.html');
  } else {
    filePath = path.join(__dirname, '404.html');
  }
  
  // Log what we're trying to do (helps with debugging)
  console.log('Trying to read:', filePath);
  
  // Read the file
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // Show detailed error in console
      console.error('Error reading file:', err.message);
      
      // Send error to browser
      res.writeHead(500, {'Content-Type': 'text/html'});
      res.write('<h1>Server Error</h1>');
      res.write('<p>' + err.message + '</p>');
      res.end();
    } else {
      // Success!
      if (filePath.includes('404.html')) {
        res.writeHead(404, {'Content-Type': 'text/html'});
      } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
      }
      
      res.write(data);
      res.end();
    }
  });
});

server.listen(8000, () => {
  console.log('Server running on http://localhost:8000');
  console.log('Current directory:', __dirname);
});