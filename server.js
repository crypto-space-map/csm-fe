const express = require('express');
const path = require('path');
const app = express();
const _public = path.join(__dirname, 'build');
const fs = require('fs');
const https = require('https');

const options = {
  key: fs.readFileSync('certs/private_key.pem'),
  cert: fs.readFileSync('certs/sert.crt'),
};
const httpsServer = https.createServer(options, app);
httpsServer.listen(443, function () {
  console.log('Listening on port 443');
});
app.use(express.static(_public));
app.get('/*', function (req, res) {
  res.sendFile(path.join(_public, 'index.html'));
});
app.listen(8080);
