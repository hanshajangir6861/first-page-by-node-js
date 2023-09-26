import readline from 'readline'

const inter=readline.createInterface(process.stdin,process.stdout)

// inter.question("multiple of this value \n",(number)=>{
//     const numb=number.split("")
// const value=numb.map(num=>num*num)

//     inter.write(value.join(""))
//     inter.close()

// })

inter.question("length of  \n",(names)=>{
    let sum=0;
    const namearr=names.split("")
    for(let i in namearr) {
        sum =sum+namearr[i].length
    }  
inter.write(sum.toString())
inter.close()
        
})

   


