let form = document.getElementById("form1")


form.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log(document.getElementById('address').value)
    weatehrFunction()
    form.reset()
})



const errorF = document.getElementById('error')
const locationF = document.getElementById('location')
const forecastF = document.getElementById('forecast')
const latitudeF = document.getElementById("latitude")
const longtitudeF = document.getElementById("longtitude")


let weatehrFunction = async ()=>{
    try{
        const address = document.getElementById('address').value
        const res = await fetch("http://localhost:3000/weather?address="+ address)
        const data = await res.json()
        console.log(data)

        if(data.error){
            errorF.innerText= data.error
            locationF.innerText = ''
            forecastF.innerText = ''
        }else{
            locationF.innerText= "country is " + data.location
            forecastF.innerText= "Forecast is "+ data.forecast 
            latitudeF.innerText =  "Latitude is " + data.latitude
            longtitudeF.innerText =  "longtitude is " + data.longitude

            errorF.innerText = ''

        }
    }catch(e){
        console.log(e)
        
    }
}