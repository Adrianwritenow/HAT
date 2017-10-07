const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const expressValidator = require('express-validator');
const passport = require('./authenticate');
const app = express();
const client = require('./client');


app.use(express.static('public'));

app.use(bodyParser.json({
  strict: false
}));

app.use(bodyParser.urlencoded({
  extended: true
}));


var jsonParser = bodyParser.json()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use(session({
  secret: 'Wham!MakeItBig',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));





app.post('/register', jsonParser, function(request, response, next) {
  const {
    username,
    email,
    password,
    auth_token
  } = request.body;

  console.log("request.body:",request.body);
  console.log("click");
  const insert = 'INSERT INTO users(username, email, password, auth_token) VALUES($1, $2, $3, $4)';
  console.log("bang");
  client.query(insert, [username, email, password, auth_token], function(err, dbResponse) {
    console.log("dbResponse",request.body);
    passport.authenticate('local', function(error, user) {
      if (error) {
        next(error);
      } else if (!user) {
        console.log("OK you are here");
      } else {
        request.login(user, function(err) {
          if (err) {
            next(err);
          } else {
            console.log("done");
          }
        })
      }
    })
  });
});




app.post('/login', passport.authenticate('local'),function(request, response){
response.json({ username: request.user.username, id: request.user.id, auth_token:request.user.auth_token});
});

app.post('/logout', function(request, response) {
});

app.post('/newHat', jsonParser, function(request, response, next) {
  const {
    username,
    email,
    password,
    auth_token
  } = request.body;

  console.log("request.body:",request.body);
  console.log("click");
  const insert = 'INSERT INTO users(username, email, password, auth_token) VALUES($1, $2, $3, $4)';
  console.log("bang");
  client.query(insert, [username, email, password, auth_token], function(err, dbResponse) {
    console.log("dbResponse",request.body);
    passport.authenticate('local', function(error, user) {
      if (error) {
        next(error);
      } else if (!user) {
        console.log("OK you are here");
      } else {
        request.login(user, function(err) {
          if (err) {
            next(err);
          } else {
            console.log("done");
          }
        })
      }
    })
  });
});




// app.post('/newHat', function(request, response) {
//   let current_date = new Date();
//   client.query('INSERT INTO messages (title, body, user_id, messageTime) VALUES($1, $2, $3, $4)', [request.body.title, request.body.message, request.session.passport.user, current_date], (err, results) => {
//     if (err) {
//       response.redirect('/');
//       return next(err);
//     } else {
//       response.redirect('/gabble');
//     }
//   });
// });

// app.post('/:id/delete', function(request, response) {
//   client.query('DELETE FROM likes WHERE message_id=$1', [request.params.id], (err, dbResponse) => {
//     client.query('DELETE FROM messages WHERE id=$1', [request.params.id], (err, dbResponse) => {
//       response.redirect('/gabble')
//     })
//   })
// })



app.listen(3001, function() {
  console.log('server farted on port 3001');
});
