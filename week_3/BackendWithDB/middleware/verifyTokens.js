import jwt from 'jsonwebtoken'
const {verify}=jwt

export function verifyToken(req,res,next){
    //token verification logic
    const token = req.cookies?.token
    //if req from unauthorized user 
    if(!token){
        return res.status(401).json({message:"Please login"})
    }
    //if token is existed
    try{
        //if token is existed
        const decodedToken = verify(token,'abcdef')
        req.user = decodedToken
        //call next
        next()
    }
    catch(err){
        res.status(401).json({message : "session expired"})
    }

}