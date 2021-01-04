const express = require("express")
const User = require("../models/User")
const profileRouter = express.Router()
const {authenticateThisRoute,firstTime} = require("../middlewares/checkMid")
profileRouter.get("/", authenticateThisRoute, (req,res)=>{
    console.log(req.user)
    res.send(`this means user has logged in successfully and now we have to show the home here in yout front end  ===> THIs is Dynamic Property Name Of User:  ${req.user.firstName}`)
})


module.exports = profileRouter