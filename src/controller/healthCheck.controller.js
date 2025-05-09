export const healthCheck=async(req,res)=>{
    return res.staus(200).json({message: 'Ok'})
}