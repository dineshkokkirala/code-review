const express = require("express");
const dbConnect = require("./db")

const app = express();
const PORT = 5001;

app.get("/test",(req,res)=>res.send("Review App is Running Now!!!"));

app.use(express.json())

app.use("/api/reviews",require("./routes/review"));

// DB Connect
dbConnect();

app.get("/api/reviews",)

app.listen(PORT,()=>console.log(`Server running on ${PORT}`));