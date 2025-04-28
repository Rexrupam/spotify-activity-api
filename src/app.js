import express from "express"
import HealthCheckRouter from "./router/spotify.router.js"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import cors from "cors"
const app = express()
app.use(cors({
    origin: process.env.cors_origin,
    credentials: true
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())

app.use('/',HealthCheckRouter)
export { app };