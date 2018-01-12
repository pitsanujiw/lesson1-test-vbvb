const express = require('express')
const app = express()
const book = require('./datastore')


app.use((req,res,next)=>{
 res.setHeader("Access-Control-Allow-Origin"," * ")
 next();
})
app.get ('/',(req,res) => {
res.json(book)
})

app.listen(2000,() => {
console.log("Connect to port : 2000")
})