import express from 'express';
import http from 'http';
import { Index, Links, Login } from './app/Router';

var app = express(),
server  = http.createServer(app);



/**
* MIDDLEWARE
********************* */
require('./config/middleware')(app, express);

/**
* ROUTES
********************* */
app.use((req, res, next) => {
  if (req.path.indexOf('/login') == -1) {
    req.signedCookies.user ? next() : res.redirect('/login');
  }
  else {
    next();
  }
});

app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
})

app.use('/links', Links);
app.use('/login', Login);
app.use('/', Index);
app.use(function(req, res, next){
  res.render('global/404', {
    title: 'Page introuvable !'
  });
});

server.listen(8080);
console.log("Server started on localhost:8080\n");