var express = require('express'),
    path = require('path'),
    app = express();

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './dist/', 'index.html'));
})

app.listen(process.env.PORT || 3000);
console.log('Application is working!');