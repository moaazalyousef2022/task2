

const request = require("request")

// const forecast=require("./forecast")
// forecast(29.871903452398 ,26.4941838299718,(error,data)=>{
// console.log("Error:",error)
// console.log("Data:",data)

// })
const geocode=require("./geocode")
const country=process.argv[2];
geocode(country,(error,data)=>{
    console.log("error:",error)
    console.log("data:",data)

if(data)
{
forecast(data.longtitude,data.latitude,(error,data)=>{
console.log("Error:",error)
console.log("Data:",data)

})
}
else{
    console.log("error in data")
}
})