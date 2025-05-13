import jwt from "jsonwebtoken"
export const verifyToken = async(req,res,next)=>{
  const token = req.cookies.token 
  if(!token){
    return res.status(401).json({message: "Unauthorised access"})
  }
  const user = jwt.verify(token, process.env.key)
  req.user = user
  next()
}