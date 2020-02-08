const request =require('request')


const geocode = (adress,callback )=>{

    const url= 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(adress)+'.json?access_token=pk.eyJ1IjoibWFsaTgxIiwiYSI6ImNrNWNvZHE0YzAzbXAzbHMwOXVjYXJ4d3IifQ.pWTCHVPk-hRB6HfpErtBXg&limit=1%27'
    
    request({url,json:true},(error,{body})=>{
  
     if(body.message){

        return callback('Forbidden format ')
    }
    if(error){
        callback('unable to connect to location')
    }
    
    else if(body.features.length===0){
    
        callback('unable to find location try another search')
    }else{
    
    
        callback (undefined,{
    latitude:body.features[0].center[0],
    longitude:body.features[0].center[1],
    location:body.features[0].place_name
    
        })
    }
    
    
    
    
    
    })
    
    }
    

    module.exports={

        geocode:geocode
    }