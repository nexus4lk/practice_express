var passport = require('passport');
var mongoose = require('mongoose');

model.exports = function() {
    var User = mongoose.model('User');

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(user, done) {
        User.findOne({
            _id: id
        },
        '-password -salt',
        function(err, user) {
            done(err, user);
        });
    });
};