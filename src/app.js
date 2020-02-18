const express = require ('express')
const path =require('path')
const hbs=require('hbs')
const geocode= require ('./utils/geocode')
const forecast=require ('./utils/forecast')
const {MongoClient,ObjectID}= require('mongodb')

const connectionURL= 'mongodb://127.0.0.1:27017'
const databaseName='web_access'


console.log(__dirname)
console.log(path.join(__dirname,'../public'))
const app =express()

const  port =process.env.PORT || 3000

//Define paths for express config 
const publicDirectoryPath=path.join(__dirname,'../public')
const viewsPath=path.join(__dirname,'../src/templete/views')
const partialPath=path.join(__dirname,'../src/templete/partials')

//setup handlebars engine and views location 
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialPath)

// setup static path to use 

app.use(express.static(publicDirectoryPath))

//rendring the views passing information dynamicly to the views 
app.get('',(req,res)=>{

res.render('index',{
title:'Weather',
name:'Mohamed Ali'

})


})

app.get('/about',(req,res)=>{

res.render('about',{
    title:'About',
    name:'Mohamed Ali'
    
    })

})

app.get('/help',(req,res)=>{


res.render('help',{
    helpmsg:'Check out the instruction below',
    title:'Help',
    name:'Mohamed ali'
})


})



app.get('/weather',(req,res)=>{

    if(!req.query.address){

        return res.send ({
            error:'You must provide the address option'


        })
    }

    geocode.geocode(req.query.address,(error,{latitude,longitude,location}={})=>{

        if (error){
        
        return res.send({error})
        
            }
        
        
        forecast.forecast(latitude,longitude, (error, forecastdata) => {
        
            if(error){
        
                return res.send({error})
            }
           
           res.send({location:location,
            forecastdata:forecastdata})
          
          })
        
        
        
        })
        
        
        
      



    })




app.get('/video',(req,res)=>{

res.render('videosupport',{
title :'Video',
name:'Mohamed Ali'}
)


})

app.get('/login',(req,res)=>{
console.log('login')
res.render('loginpage',{
    title:'login page',
    name:'Mohamed Ali'
})

})


app.get('/loginpagecheck',(req,res)=>{

if(!req.query.username||!req.query.password){
    
    return res.send({
        error: 'please enter a vaild user name and password '
    })
}

// MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
//     if (error){
    
//         return console.log('unable to connet to database')
//     }
    
    
//     const db = client.db(databaseName)

//     db.collection('username').insertOne({username:req.query.username,password:req.query.password},(error,result)=>{

// if(error){

//     console.log(error)
//     return console.log('unable to create data base')
// }

// console.log(result.ops)


//     })

// })

return res.send({

    result:'good'
})


})


app.get('/help/*',(req,res)=>{

res.render('error',{
    error:'Help artical not found',
title:'404',
name:'Mohamed ALi'
}
)

})

app.get('*',(req,res)=>{

    res.render('Error',{
        title:'404',
        name:'Mohamed Ali',
        error:'page not found'
    })


})


app.listen(port,()=>{

    console.log('server started on port'+ port)

})

