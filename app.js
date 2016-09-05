var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');


var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

app.post('/contactform', function (req, res) {
  // setup e-mail data with unicode symbols
  var transporter = nodemailer.createTransport('smtps://maxsslob%40gmail.com:kqjlhzlxduvyteqs@smtp.gmail.com');

  var mailOptions = {
      to: 'maxsslob@gmail.com', // list of receivers
      subject: '✔ New message | maxslob.com | ' + req.body.name + ' | ' + req.body.email, // Subject line
      html: req.body.message // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            res.render('contact', { title: 'Contact - Max Slobodchikov', msg: 'Error occured, message not sent.', err: true, page: 'contact' })
        }
        //Yay!! Email sent
        else {
            res.render('contact', { title: 'Contact - Max Slobodchikov', msg: 'Message sent! Thank you.', err: false, page: 'contact' })
        }
      console.log('Message sent: ' + info.response);
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
