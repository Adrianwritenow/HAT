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





app.post('/register', function(request, response, next) {
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

app.post('/newHat', function(request, response, next) {
  var schema = {
    'userEntrey': {
      notEmpty: true,
      isLength: {
        options: {
          max: 1
        },
        errorMessage: 'One letter at a time'
      },
      errorMessage: 'Please enter a letter'
    }
  };
  const {
    level,
    user_id,
    snap_Time
  } = request.body;

  console.log("request.body:",request.body);
  console.log("click");
  const insert = 'INSERT INTO snapshots(level, user_id, snap_Time) VALUES($1, $2, $3)';
  console.log("bang");

    if (!user_id) {
        console.log("OK you are here");
      }else {
            client.query(insert, [level, user_id, snap_Time], function(err, dbResponse) {
              console.log("dbResponse",request.body);
            console.log("done");
        })
      }
    });

app.post('/newHatLB', function(request, response, next) {
  var schema = {
    'userEntrey': {
      notEmpty: true,
      isLength: {
        options: {
          max: 1
        },
        errorMessage: 'One letter at a time'
      },
      errorMessage: 'Please enter a letter'
    }
  };
  const {
    weight,
    user_id,
    snap_Time
  } = request.body;

  console.log("request.body:",request.body);
  console.log("click");
  const insert = 'INSERT INTO snapshotslb(level, user_id, snap_Time) VALUES($1, $2, $3)';
  console.log("bang");

    if (!user_id) {
        console.log("OK you are here");
      }else {
            client.query(insert, [level, user_id, snap_Time], function(err, dbResponse) {
              console.log("dbResponse",request.body);
            console.log("done");
        })
      }
    });


app.post('/hatHistory',function(request, response){
  console.log("Node hatHistory");
  const {user_id} = request.body;
  client.query('SELECT * FROM users LEFT JOIN snapshots ON snapshots.user_id = users.id WHERE level !=$1 AND users.id =$2', [" ",user_id], function(err, dbResponse) {
    if (err){
      console.log(err)
    }else{
      console.log("The Response",dbResponse.rows)
      response.json({history: dbResponse.rows});
      return;
    }

  });
  console.log("bang in history");
});


app.listen(3001, function() {
  console.log('server farted on port 3001');
});
