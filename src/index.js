import connectDB from "./db/db.js"
import dotenv from "dotenv"
import {app} from "./app.js"


dotenv.config({
    path: './.env'
})

app.get("/",(Req,res)=>{
  
    res.send("hello")
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000 ,() => {
        console.log(`Serve at http://localhost:${process.env.PORT}`);
      });
})

