var express = require('express'),
    path = require('path'),
    app = express();

app.use(express.static(__dirname + '/dist'));

const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
       ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}
app.use(forceSSL());

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './dist/', 'index.html'));
})

app.listen(process.env.PORT || 3000);
console.log('Application is working!');