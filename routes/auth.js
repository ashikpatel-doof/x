const express= require('express')
const passport = require('passport')

const router = express.Router()


//@ENDPOINT /auth/google
//@METHOD   GET
router.get("/google",passport.authenticate('google', {scope: ['profile']}))


//@ENDPOINT /auth/callback after login....
//@METHOD   GET
router.get("/google/callback", passport.authenticate('google', {failureRedirect :'/'}), (req,res)=>{
    res.redirect("/profile")
})

module.exports = router