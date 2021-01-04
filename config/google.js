const GoogleStrategy = require("passport-google-oauth20").Strategy
const mongoose = require('mongoose')
const User = require("../models/User")

module.exports = function (passport){

    passport.use(new GoogleStrategy({
        clientID : "643174255692-uof8aguunq1vnk2jc8a2omqmfoqgiceo.apps.googleusercontent.com",
        clientSecret : "0NqyttFmHJtY3GJ5ovdyg89Z",
        callbackURL : "/auth/google/callback"
    },async (accessToken,refreshToken,profile,done)=>{
        //basically we will save this profile to DB ...
        // console.log(profile)
        //Now first we Will create a simple user object 
        const newUser = {
            googleId : profile.id,
            displayName : profile.displayName,
            firstName : profile.name.givenName,
            lastName : profile.name.familyName,
            profile : profile.photos[0].value
        }
        try{
            let user = await User.findOne({googleId:profile.id})
            if(user){
                console.log("user Exist called ",user)
                done(null,user)
            }else{
                
                 user = await User.create(newUser)
                 console.log("user Crreated called ",user)
                done(null,user)
            }
            console.log("User and DB is Working ")
        }catch(err){
            console.log('Something went wrong with insertion....')
        }
    }))
    passport.serializeUser(function(user, done) {
        done(null, user);
      });
      
      passport.deserializeUser(function(user, done) {
        done(null, user);
      });


}