const logger = (req, res, next)=>{
    console.log(req.method);
    console.log(req.url);
    console.log(new Date().getFullYear())
    next()
}

const authorize = (req, res, next)=>{
    console.log("authorizing");
    const{user} = req.query
    if(user === 'Parth'){
        // Here we are attaching the user details with the req, so it can be reffered
        // by other modules
        req.user = {name: 'Parth', id : 7}
    }
    else{
        res.status(401).json({status : "unauthorised"})
    }
    next()
}

module.exports = {logger, authorize}