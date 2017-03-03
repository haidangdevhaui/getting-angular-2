var express = require('express'),
    app = express();

app.get('/*', function(req, res){
    res.sendFile('dist/index.html');
})

app.listen(process.env.PORT || 3000);
console.log('Application is working!');