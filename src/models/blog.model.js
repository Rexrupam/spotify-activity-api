import mongoose from "mongoose"

const blogSchema = new mongoose.Schema({
    title: {
       type: String
    },
    content: {
       type: String 
    }
}, 
{
   timestamps: true
}
)
export default mongoose.model('Blog', blogSchema)