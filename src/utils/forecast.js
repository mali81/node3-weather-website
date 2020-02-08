const request = require('request')





const forecast = (late,long,callback)=>{

 const url ='https://api.darksky.net/forecast/fca0ababe3d0f6ca39552a9b26a02037/'+encodeURIComponent(long)+','+encodeURIComponent(late)+'?units=si'


 request({url,json:true},(error,{body})=>{



    if (error){

        callback('unable to connect to the internet')
        
        
        }else if (body.error) {
        
        callback('unable to find location ')
        }else{
        
            callback(undefined,{
        
                currentsummary : body.daily.data[0].summary,
                currenttemp : 'it is currently '+body.currently.temperature+' degrees out ',
                precipProbability:'There is a '+ body.currently.precipProbability+ '% chance of rain'
        
            })
        
            
        }
        
        
        })
        
        
        
        
        
        }
        
        
        module.exports ={
        forecast:forecast
            
        }