import connectDB from "./db/index.js"
import {app} from "./app.js"
import dotenv from "dotenv"
import { Subscriber } from "./models/subscriber.js"
import data from "./data.js"

dotenv.config({
    path: './.env'
})

const dataFile=async()=>{
    await Subscriber.deleteMany({})
    await Subscriber.insertMany(data)
}

connectDB()
.then(()=>{
    app.listen(process.env.port || 8000, async()=>{
        console.log(`Server is listening on port: ${process.env.port}`);
        await dataFile()
    })
})
.catch((err)=>{
    console.log('MongoDB connection failed',err)
})