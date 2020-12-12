const express = require("express");
const app = express();
const cors = require("cors")
const bodyParser = require("body-parser")

app.use(cors())
app.use(bodyParser.json())
app.use("/notes",require('./route'));



app.listen(3000,()=>{console.log("server started on port : 3000")})