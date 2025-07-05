

const fs = require("fs")

  const addPerson = (id,fname , lname , age , city ) => {
      const allData = loadInfo()
      const duplicatedData = allData.filter((obj)=>{
         return obj.id === id
      })
      if(duplicatedData.length==0){
      allData.push({
         id:id,
         fname : fname,
         lname,
         age : age,
         city : city
      })
       saveData(allData)

   }else{
      console.log("Error Duplicated Data")
   }


  }

  ////////////////////////////////////////////////////////////////////////

  const loadInfo = () => {

      try {
        const dataJson = fs.readFileSync("data15.json").toString()
        return  JSON.parse(dataJson)
      }
      catch {
          return  []
      }

  }

  //////////////////////////////////////////////////////////////////////

  const saveData = (allData) => {
     const allDataJson = JSON.stringify(allData)
     fs.writeFileSync("data15.json" , allDataJson )
  }


  const deleteData = (id)=>{
      const allData = loadInfo()

      const dataToKeep = allData.filter((obj)=>{
         return obj.id !==id
      })

         console.log(dataToKeep)

      saveData(dataToKeep)
  }



  const readData=(id)=>{
   const allData = loadInfo()

   const itemNeeded = allData.find((obj)=> {
      return obj.id === id
   })
   // console.log(itemNeeded)
   if(itemNeeded){
      console.log(itemNeeded)
   }else{
      console.log("Id needed not found")
   }
   
  }


  const listData=()=>{
   const allData = loadInfo()

   allData.forEach((obj) => {
      console.log(obj.fname,obj.lname,obj.city)
   });
  }

 module.exports = {
    addPerson,
    deleteData,
    readData,
    listData
 }