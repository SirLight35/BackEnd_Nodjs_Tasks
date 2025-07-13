

const request = require("request")

// const url = "http://api.weatherapi.com/v1/current.json?key=214ec68e14cb467581055955251007&q=London&aqi=no"


// request ({url, json:true}, (error,response) =>{
//     // console.log(response.body)

//     // console.log(response.body.current.condition.text)
//     if(error){
//         console.log("Error Has Occured")
//     }else if(response.body.error){
//          console.log(response.body.error.message)
//     }else{
//         console.log(response.body.location.name,response.body.current.condition.text)
//     }
// }) 




// const geoCodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/egypt.json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw"

// request({url:geoCodeUrl,json:true},(error,response)=>{
//     if(error){
//         console.log("Unable to connect geocode service")
//     }else if(response.body.message){
//         console.log(response.body.message)
//     }else if(response.body.features.length==0){
//         console.log("Unable to find location")
//     }else{
//         const longtitude = response.body.features[0].center[0]
//         const latitute = response.body.features[0].center[1]

//         console.log(longtitude,latitute)
//     }
// })


// ////////////////////////////


// const forecast = (latitide, longtitude , callback )=>{

// const url = "http://api.weatherapi.com/v1/current.json?key=214ec68e14cb467581055955251007&q="+latitide + ","+longtitude


// request ({url, json:true}, (error,response) =>{
     
//     if(error){

//         callback("Error Has Occured",undefined)
//     }else if(response.body.error){
//          callback(response.body.error.message,undefined)
//     }else{
//         callback(undefined,response.body.location.name + " it is " + response.body.current.condition.text)
//         // console.log(response.body.location.name,response.body.current.condition.text)
//     }
// }) 
// }

const forecast = require("./data1/forecast.js")
const geocode = require("./data1/geocode.js")


// const geocode  = (address,callback)=>{
// const geoCodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+ address + "egypt.json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw"

// request({url:geoCodeUrl,json:true},(error,response)=>{
//     if(error){
//         callback("Unable to connect geocode service",undefined)
//     }else if(response.body.message){
//         callback(response.body.message,undefined)
//     }else if(response.body.features.length==0){
//         calllback("Unable to find location",undefined)
//     }else{
//         callback(undefined,{
            
//          longtitude : response.body.features[0].center[0],
//          latitide : response.body.features[0].center[1]
//         })
//     }
// })
// }

geocode("london",(error,data)=>{
    console.log(data)

    forecast(data.latitide,data.longtitude,(error,data)=>{
    console.log("{ Temprature is: "+data+" }")

})


})

