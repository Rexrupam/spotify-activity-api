import Blog from "../models/blog.model.js"



export const healthCheck=async(req,res)=>{
    return res.send({message: "Ok"})
}