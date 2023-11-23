const request=require("request")


const forecast=(long,lat,callback)=>{
    const url="http://api.weatherapi.com/v1/current.json?key=557b98026f3e42d9a6255321232111&q=egypt&aqi=no"+long +","+ lat
    request({url, json:true},(error,response)=>{
        if(error){
            callback("error in website",undefined)
        }
        else if(response.body.error){
            callback(response.body.error.message,undefined)
        }
       
        else{
            callback(undefined,response.body.location.name +" it is "+ response.body.current.condition.text)
         
    
        }
    })
    }
    module.exports=forecast