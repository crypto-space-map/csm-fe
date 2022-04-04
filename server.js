import express from 'express';
import path from 'path';
const app = express();
const _public = path.join(__dirname, 'build');

app.use(express.static(_public));
app.get('/*', function (req, res) {
  res.sendFile(path.join(_public, 'index.html'));
});
app.listen(8080);
