const express = require("express");
const router = require("./src/routes/api");
const app = new express();

//Security Middleware
const ratelimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");
const cors = require("cors");

//Security Middleware implement

app.use(helmet())
app.use(mongoSanitize())
app.use(hpp())
app.use(cors())

const limiter = ratelimit({
    windowMs: 15*60*1000;
    max:100
})
app.use(limiter);


app.use("api/v1",router);

//Undefined route
app.use("*",(req,res)=>{
    res.status(404).json({status:"fail",Data: "Not Found"})
})

module.exports = app;
