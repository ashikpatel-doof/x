const express = require("express")
const LoginRouter  = express.Router()
const {authenticateThisRoute,firstTime} = require("../middlewares/checkMid")
  

LoginRouter.get("/", firstTime,  (req,res)=>{
    res.send("Just consider this as login page ..., Udeet this is the part of your frontend, You can hit the endpoint of google login from here...")
})

LoginRouter.get("/logout", (req,res)=>{
    req.logOut()
    res.redirect("/auth/google")
})

module.exports = LoginRouter