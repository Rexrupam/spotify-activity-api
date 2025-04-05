import express from "express"
import subscriberRoute from "./router/subscriber.router.js"
import bodyParser from "body-parser"
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/',subscriberRoute)
export { app };