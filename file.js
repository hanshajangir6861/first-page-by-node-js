import fs from 'fs'


function readFromFile(){
fs.readFile("filedata.txt",(err,data)=>{
        if (err)console.log(err)
    else{
        console.log(data.toString())
    }
    })}
    readFromFile()


    function writeToFile(){
        const New="this is writetofile system";

        fs.writeFile("files.txt",New,(err)=>{
                if (err)console.log(err)
            
            })}
            writeToFile()



            function appendFromFile(){
                const ver="this is append from file "
                fs.appendFile("filedata.txt",ver,(err)=>{
                    if(err)console.log(err)
                })
            }
            appendFromFile()