// Importing modules using ES6
import express from "express"
import cors from "cors"
import { connectDb } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoutes.js"
import 'dotenv/config'



// app config
const app= express()
const port= 4000

//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDb();


// api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)


app.get("/",(req,res)=>{
    res.send("Api working")
})



app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`);
    
})

//add your mangodb atlas cluster here for reference// mongo db link 