import express from "express"
import HealthCheckRouter from "./router/spotify.router.js"
import bodyParser from "body-parser"
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/',HealthCheckRouter)
export { app };