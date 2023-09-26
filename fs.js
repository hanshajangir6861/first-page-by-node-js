import fs from "fs"

// readfile  ,writefile,append  ///raedfileasyn,writefileasyn


// fs.readFile("data.txt",(err,data)=>{
//     if (err)console.log(err)
// else{
//     console.log(data.toString())
// }
// })

/////writefile
const New="this is writefile system";
fs.writeFile("Newfile.txt",New ,(err)=>{
   if(err)console.log(err)
})

//appendfile//
const han="and this append file";
fs.appendFile("Newfile.txt",han ,(err)=>{
   if(err)console.log(err)
})





// fs.readFile("data.txt")
// then((data)=>{console.log(data.toString())})
// Catch((err)=>{console.log(err)})

// import fs from 'fs/promises'
// async function  data(){
//     const call = await fs.readFile("data.txt")
// console.log(call.toString())
// }
// data()


// /readline
// const readline = require('readline');

