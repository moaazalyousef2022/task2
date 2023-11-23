const request = require("request")

const geocode=(country,callback)=>{
    const geocodeurl="http://api.mapbox.com/geocoding/v5/mapbox.places/"+country+".json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw"
    
    request({url:geocodeurl ,json:true},(error,response)=>{
        if(error){
            callback("error in website",undefined)
        }
        else if(response.body.message){
            callback(response.body.message,undefined)
        }
        else if(response.body.features.length==0){
            callback("error in location",undefined)
        }
        else{
            callback(undefined,
             {longtityde:response.body.features[0].center[0],
             latityde:response.body.features[0].center[1]})
        }
    })
    }
    module.exports=geocode
