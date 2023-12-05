const express = require("express");
const app = express();
const blog = require("./routes/blog");
const connectWithDb = require("./config/database");

require("dotenv").config()
const PORT = process.env.PORT || 3000


app.use(express.json());

app.use("/api", blog)

app.get("/", (req, res)=>{
    res.send("hey from the server")
})

connectWithDb();

app.listen(PORT, ()=>{
   console.log("Server has already started")
})
