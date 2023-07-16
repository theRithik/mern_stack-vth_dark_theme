const express = require('express')
const app = express()
const port = process.env.PORT||5000
const Routing = require('./Routing/Routing')
const cors = require('cors')

app.use(cors())

app.get('/',(req,res)=>{
    res.send('hello from node')
})

app.use('/admin',Routing)


app.listen(port,()=>{
    console.log('in port 5000')
})
