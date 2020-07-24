﻿const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000


app.get("/", (req, res) => {
    res.send("Ta rodando")
})
app.listen(PORT, ()=>{
    console.log("Server running PORT: ", PORT)
})
