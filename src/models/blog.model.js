import mongoose from "mongoose"

const blogSchema = new mongoose.Schema({
    title: {
       type: String
    },
    content: {
       type: String 
    },
    embedding:{
        type: [Number]
    }
}, 
{
   timestamps: true
}
)
export default mongoose.model('Blog', blogSchema)