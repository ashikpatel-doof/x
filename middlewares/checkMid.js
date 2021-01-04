const  firstTime = (req,res,next) =>{
    if(req.isAuthenticated()){
        res.redirect("/profile")
    }else{
        return next()
    }
}



const authenticateThisRoute = (req,res,next)=>{
    if(req.isAuthenticated()){
        return next()
    }else{
        res.redirect('/')
    }
}

module.exports = {
    firstTime,
    authenticateThisRoute
}