const express = require("express")
const app = express()
const dotenv = require('dotenv')
const path = require('path')
const mongoose = require('mongoose')
const connectToDB = require("../config/db")
const passport = require("passport")
const session = require('express-session')
const profileRouter = require("../routes/profile")
const LoginRouter = require("../routes/login")
const MongoStore = require('connect-mongo')(session)

// const ngrok = require('ngrok');
// (async function() {
//   const url = await ngrok.connect();
// })();
require("../config/google")(passport)



dotenv.config({path : "./config/config.env"})

connectToDB()

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    
  }))

app.use(passport.initialize())
app.use(passport.session())
app.use("/", LoginRouter)
app.use("/profile", profileRouter)
app.use("/auth", require("../routes/auth"))


const port = process.env.PORT || 2100
app.listen(port, ()=>{
    console.log("server is up.. on ", port)
})