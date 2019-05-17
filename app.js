//TODO: setup GULP or NPM scripts

let express = require('express');
let chalk = require('chalk');
let debug = require('debug')('app');
let morgan = require('morgan');
let app = express();
let port = 5000
let path = require('path');

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/popper.js/dist/umd')));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(port, function () {
    debug(`listening on port: ${chalk.green(port)}`);
});