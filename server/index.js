const express = require("express")
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config()

mongoose.connect(process.env.MONGO_URL).then(console.log("Conntected to Mongodb")).catch((err) => console.log(err))

app.listen("8000", () => {
    console.log("Port is running")
})