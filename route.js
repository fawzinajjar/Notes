const express = require("express");
const app = express();
const router = express.Router();

router.use(express.static("public"))

router.post("/",(req,res)=>{
    console.log(req.body)

})
router.post("/1",(req,res)=>{
    res.send({test:"dsfsdf"})

})

module.exports = router;