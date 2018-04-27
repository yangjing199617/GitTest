var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var home = require('./routes/home');
var tsconfig = require('./routes/tsconfig');
var categroy = require('./routes/categroy')
var login = require('./routes/login')
var reg = require('./routes/reg');


var cors=require('cors');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cookieSession({
  keys:['aa','bb'],
  name:'abc_id',
  // maxAge:1000*60*60
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//配置cors中间件
app.use(cors({
  "origin": ["http://localhost:3000","http://localhost:3001","http://localhost:8080"],  //允许所有前端域名
  "credentials":true,//允许携带凭证
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE", //被允许的提交方式
  "allowedHeaders":['Content-Type','Authorization']//被允许的post方式的请求头
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/home', home)
app.use('/tsconfig', tsconfig);
app.use('/categroy', categroy)
app.use('/login',login)
app.use('/reg',reg);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
