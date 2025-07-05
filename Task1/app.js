
//  modules : 

 // 1- core modules 

   
 // 2- NPM 

  const fs =  require ("fs")

  fs.writeFileSync("data.txt" , "islam mohamed")

//   console.log(fs.readFileSync("data.txt").toString())

  fs.appendFileSync ("data.txt" , "  ,  ahmed ali"  )

//   console.log(fs.readFileSync("data.txt").toString())

  ///////////////////////////////////////////////////////////////////////////


  const x = require ("./data1.js")

  // console.log(x.fname)
  // console.log(x.lname)
  // console.log(x.age)
  // console.log(x.city)
  // console.log(x.fun1(20,25))


  // 2- NPM  Node package Manager :

   const  validator = require ("validator")

  //  console.log(validator.isEmail("islam@gmail.com"))

  //  /////////////////////////////////////////////////////////////////////

  // process.argv

  // console.log(process.argv[2])

  // const  command = process.argv[2]

  // if (command === "add"){
  //   console.log("you added an item")
  // }else if (command === "delete"){
  //   console.log("you deleted an item")
  // }else {
  //   console.log("ERROR")
  // }


  // console.log(process.argv)

   
   const data100 = require("./data100.js")

   const yargs = require ("yargs")

  //  console.log(yargs.argv)

  //  ///////////////////////////////////////////////////////////////////

  yargs.command({
      command : "add",
      describe : " to add an item ",
      builder : {
         fname : {
            describe : "this is the first name desc in add command",
            demandOption : true,
            type: "string"
         },
         lname : {
            describe : "this is the last name desc in add command",
            demandOption : true,
            type: "string"
         }
      },
      handler : (x)=> {
        // console.log("you have already added an item")
        // console.log(x.fname , x.lname)

        data100.addPerson(x.id,x.fname , x.lname , x.age , x.city)

      }

  })


  yargs.command({
    command : "delete",
    describe : " to delete an item",
    type :"string",
    handler : (x)=> {
      // console.log("you have already deleted an item")
      data100.deleteData(x.id)
    }
  })







  yargs.command({
    command : "read",
    describe: "to read an item",
    builder:{
      id:{
        describe : "this is id dexc in read command",
        demandOption:true,
        type : "string"
      }
    },
    handler:(x)=>{
      data100.readData(x.id)
    }
  })




  yargs.command({
    command:"list",
    describe:"to list an item",
    handler:()=>{
      data100.listData()
    }
  })

  yargs.parse()



  // const person1 = {
  //   fname : "islam",
  //   lname : "mohamed",
  //   city : "mansoura" 
  //  }


  //  console.log(person1)

  //  const Person1Json = JSON.stringify(person1)

  //  console.log(Person1Json)

  //  const Person1Obj = JSON.parse(Person1Json)

  //  console.log(Person1Obj)

  //  fs.writeFileSync("data20.json" , Person1Json)





   


  



