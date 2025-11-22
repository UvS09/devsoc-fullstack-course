const express = require('express');
const app = express();

app.get('/request-info', (req, res) => {
  // Get information about the request
  const info = `
    <h1>Request Information</h1>
    <p><strong>URL:</strong> ${req.url}</p>
    <p><strong>Method:</strong> ${req.method}</p>
    <p><strong>Path:</strong> ${req.path}</p>
    <p><strong>Hostname:</strong> ${req.hostname}</p>
    <p><strong>IP Address:</strong> ${req.ip}</p>
    <p><strong>Protocol:</strong> ${req.protocol}</p>
  `;
  
  res.send(info);
});

app.listen(8000);