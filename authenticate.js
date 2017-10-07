const passport = require('passport');
const Strategy  = require('passport-local');
const client = require('./client');
const bodyParser = require('body-parser');

const moment = require('moment');

passport.use("local",new Strategy(
  function(username, password, done) {
    client.query('SELECT * FROM users WHERE username=$1', [username], function (err, dbResponse) {
      if (err) {
        done(err)
      } else {
        const user = dbResponse.rows[0];
        if (user.password === password) {
        console.log("LOG IN");
          return done(null, user)

        } else {
          console.log("WRONG");
          return done(null, false, {
              message: "There is no user with that username and password."
          })
        }
      }
    })
  }
));


module.exports = passport;
