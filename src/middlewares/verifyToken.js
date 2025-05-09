export const verifyToken = async(req,res,next)=>{
  const token = req.cookies.accessToken
  if(!token){
   return res.status(401).json({message: "Unauthorised access"})
  }
  req.token = token
  next()
}