

const request = require("request")
const forecast = (latitide, longtitude , callback )=>{

const url = "http://api.weatherapi.com/v1/current.json?key=214ec68e14cb467581055955251007&q="+latitide + ","+longtitude


request ({url, json:true}, (error,response) =>{
     
    if(error){

        callback("Error Has Occured",undefined)
    }else if(response.body.error){
         callback(response.body.error.message,undefined)
    }else{
        callback(undefined,response.body.location.name + " it is " + response.body.current.condition.text)
        // console.log(response.body.location.name,response.body.current.condition.text)
    }
}) 
}

module.exports = forecast