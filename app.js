const express = require('express');

const app = express();


app.post('/', (req, res) => {
    res.cookie('username', req.body.username);
    res.redirect('/');
});

app.post('/', (req, res) => {
    res.clearCookie('username');
    res.redirect('/');
});

app.use((err, req, res, next) => {
    res.locals.error = err;
    res.render('error');
});


app.listen(3000); () => {
    console.log ('server established')

};clearImmediate