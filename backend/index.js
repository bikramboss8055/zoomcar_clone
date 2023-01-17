const express=require("express")
const cors=require("cors")
const { connection } = require("./config/carDb")
const { carRouter } = require("./routes/Car.route")
require("dotenv").config()

const app=express()
app.use(express.json())
app.use(cors())


app.get("/", async(req,res)=>{

    res.send("This is Our Home page")
    
})


app.use("/cars",carRouter)





app.listen(process.env.port,async()=>{

    try{
          await  connection
          console.log("app is Connected With Database")

    }catch(err){
        console.log("Error is Coming While Connecting to DB")
        console.log(err)

    }
    console.log(`Port is Running at ${process.env.port}`)

})


