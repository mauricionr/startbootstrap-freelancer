var express = require('express');
var app = express();

app.use('/public', express.static(__dirname + '/public'));

app.get('*', function (req, res) {
    res.sendFile('index.html', {
        root: './'
    });
});

app.listen(8080, function (err) {
    if (err)console.log(err)
    else console.log('Express server listen 8080')
});