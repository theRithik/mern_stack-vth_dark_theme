const express = require('express')
const Routing = express.Router()
const bodyparser = require('body-parser')
const {MongoClient,ServerApiVersion} = require('mongodb')
const url ="mongodb+srv://testing:test123@cluster1.vnynuru.mongodb.net/?retryWrites=true&w=majority"
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config= require('../config')

Routing.use(bodyparser.urlencoded({extended:true}))
Routing.use(bodyparser.json())

const client = new MongoClient(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

Routing.get('/locations',(req,res)=>{
    client.connect((dberr,dbres)=>{
        if(dberr){
            console.log(err)
        }
        else{
            const db = dbres.db('Zomato')
            db.collection('location').find({}).toArray((err,result)=>{
                if(err){
                    res.send(err)
                }
                else{
                    res.send(result)

                }
            })
        }
    })
})

Routing.get('/restaurants',(req,res)=>{
    client.connect((dberr,dbres)=>{
        if(dberr){
            console.log(err)
        }
        else{
            const db = dbres.db('Zomato')
            const id=JSON.parse(req.query.state_id)
            
            db.collection('restaurants').find({state_id:id}).toArray((err,result)=>{
                if(err){
                    res.send(err)
                }
                else{
                    res.send(result)
                }
            })
        }
        
    })
})


Routing.get('/quickSearch',(req,res)=>{
    client.connect((dberr,dbres)=>{
        if(dberr){
            console.log(dberr)
        }
        else{
            const db = dbres.db('Zomato')
            db.collection('quickSearch').find({}).toArray((err,result)=>{
                if(err){
                    res.send(err)
                }
                else{
                    res.send(result)
                }
            })
        }
    })
})


Routing.get('/meals',(req,res)=>{
    
    client.connect((dberr,dbres)=>{
        if(dberr){
            console.log(err)
        }
        else{
            const db = dbres.db('Zomato')
           const id=JSON.parse(req.query.mealtype_id)
            db.collection('restaurants').find({'mealTypes.mealtype_id':id}).toArray((err,result)=>{
                if(err){
                    res.send(err)
                }
                else{
                    res.send(result)
                }
            })
        }
        
    })
})


Routing.get('/cuisines',(req,res)=>{
    
    client.connect((dberr,dbres)=>{
        if(dberr){
            console.log(err)
        }
        else{
            const db = dbres.db('Zomato')
           const id=JSON.parse(req.query.cuisine_id)
            db.collection('restaurants').find({'cuisines.cuisine_id':id}).toArray((err,result)=>{
                if(err){
                    res.send(err)
                }
                else{
                    res.send(result)
                }
            })
        }
        
    })
})

Routing.get('/deatils/:id',(req,res)=>{
    client.connect((dberr,dbres)=>{
        if(dberr){
            console.log(dberr)
        }
        else{
            const db = dbres.db('Zomato')
            const id =JSON.parse(req.params.id)
            db.collection('restaurants').find({'restaurant_id':id}).toArray((err,result)=>{
                if(err){
                    res.send(err)
                }
                else{
                    res.send(result)
                }
            })
        }
    })
})

Routing.get('/menu/:id',(req,res)=>{
    client.connect((dberr,dbres)=>{
        if(dberr){
            console.log(dberr)
        }
        else{
            const db = dbres.db('Zomato')
            const id=JSON.parse(req.params.id)
            db.collection('menu').find({restaurant_id:id}).toArray((err,result)=>{
                if(err){
                    res.send(err)
                }
                else{
                    res.send(result)

                }

            })

        }
    })
})

Routing.post('/menuItems',(req,res)=>{
    client.connect((dberr,dbres)=>{
        if(dberr){
            console.log(dberr)
        }
        else{
            const db= dbres.db('Zomato')
            const id = req.body
            db.collection('menu').find({menu_id:{$in:id}}).toArray((err,result)=>{
                if(err){
                    res.send(err)
                }
                else{
                    res.send(result)
                    
                }
            })
        }
    })
})

Routing.post('/orderDetails',(req,res)=>{
    client.connect((dberr,dbres)=>{
        if(dberr){console.log(dberr)}
        else{
            const db= dbres.db('Zomato')
            db.collection('orderDetails').insertOne(req.body,(err,result)=>{
                if(err){
                    res.send(err)
                }
                else{
                    res.send(result)
                }

            })
        }
    })
})

Routing.get('/getDetails',(req,res)=>{
    client.connect((dberr,dbres)=>{
        if(dberr){
            console.log(dberr)
        }
        else{
            const db= dbres.db('Zomato')
            db.collection('orderDetails').find({}).toArray((err,result)=>{
                if(err){
                    console.log(err)
                }
                else{
                    res.send(result)
                }
            })
        }
    })
})

Routing.post('/Register',(req,response)=>{
    client.connect((dberr,dbres)=>{
        if(dberr){
            console.log(dberr)
        }
        else{
            const db = dbres.db('Zomato')
            db.collection('loginDetails').findOne({Email:req.body.Email}, (er,result)=>{
                if(er){
                    console.log(er)
                }
                else{
                if(result){
                    response.status(300).send({auth:false,token:'email already in excists'})
            
                }
                else{
                    const hashedPassword= bcrypt.hashSync(req.body.Password,8)
                    const user={
                        Name:req.body.Name,
                        Email:req.body.Email,
                        Password:hashedPassword
                    }
                   
                    db.collection('loginDetails').insertOne((user),(err,data)=>{
                        if(err){
                            console.log(err)
                        }
                        else{
                            response.status(200).send({auth:true,token:'user successfully registerd'})
                        }

                    })
                }
            }
            })
        }
    })
})

Routing.post('/Login',(req,res)=>{
    client.connect((dberr,dbres)=>{
        if(dberr){
            console.log(dberr)
        }
        else{
            const db = dbres.db('Zomato')
            db.collection('loginDetails').findOne({Email:req.body.Email},(err,result)=>{
                if(err){
                    console.log(err)
                }
                else{
                    if(!result){
                        res.status(300).send({auth:false,token:'No User Found register first'})
                     

                    }
                    else{
                        const LoginValid =bcrypt.compareSync(req.body.Password, result.Password)
                        if(!LoginValid){
                            res.send('Wrong Password')
                        }
                        else{
                            const token =jwt.sign({email:req.body.email},config.secrete,{expiresIn:86400}) 
                            res.status(200).send({token:token})

                        }
                    }
                   


                }
            })
        }
    })
})

Routing.post('/filtering',(req,res)=>{
    client.connect((dber,dbres)=>{
        if(dber){
            console.log(err)
        }
        else{
            
            const db = dbres.db('Zomato')
            const id= JSON.parse(req.body.id)
            db.collection('restaurants').find({'cuisines.cuisine_id':id}).toArray((err,result)=>{
                if(err){
                    console.log(err)
                }
                else{
                    res.send(result)
                }

            })
        }
    })
})


Routing.get('/movie',(req,res)=>{
    client.connect((dberr,dbres)=>{
        if(dberr){
            console.log(dberr)
        }
        else{
            const db = dbres.db('test')
            db.collection('movies').find().toArray((err,result)=>{
                if(err){
                    console.log(err)
                }
                else{
                    res.send(result)
                }
            })
        }
    })
})
module.exports = Routing