import Blog from "../models/blog.model.js"
import getEmbedding from "../utils/getEmbedding.js";
import similarity from "compute-cosine-similarity"

export const createBlog=async(req,res)=>{
    try {
        const { title, content }= req.body;
        if(!title || !content){
            return res.status(400).json({message: "Title and content field are required"})
        }
        const combinedText = `${title}${content}`

        if(!combinedText){
            return res.status(400).json({message: "Cann't create the combine text from the title and content"})
        }
        
        const embedding = getEmbedding()

        if(embedding.length === 0){
           return res.status(400).json({message: "Failed to get embedding"})
        }

        const blog = await Blog.create({
            title,
            content,
            embedding
        })
        await blog.save(); 
        return res.status(200).json({message: "Blog created successfully", blog})
    }catch (error) {
        console.log("Something went wrong", error);
        return res.status(500).send('Internal server error')
    }
}
// This is a dummy recommandation system. I just manually created logic to generate the embeddings.
// This is not a practical approach at all. We need to use openai api or tensorflow js.

export const recommendateBlog=async(req,res)=>{
    try{
        const {id}=req.params
        const targetBlog = await Blog.findById(id)
        if(!targetBlog){
            return res.status(400).json({message: "No such blog found"})
        }

        const otherPosts = await Blog.find({ _id: { $ne: id } })
        const recommendations = otherPosts
        .filter(post => post.embedding && post.embedding.length)
        .map(post => ({
           post,
           score: similarity(targetBlog.embedding, post.embedding)
          }))
        .sort((a, b) => b.score - a.score)
        .slice(0, 5)
        .map(({ post, score }) => ({ ...post.toObject(), score }));

        return res.status(200).json({message: `${recommendations.length} result found`, recommendations})
    }catch(error){
        console.log("Something went wrong", error)
        return res.status(500).send('Internal server error')
    }
}

export const healthCheck=async(req,res)=>{
    return res.send({message: "Ok"})
}