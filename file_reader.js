const fs = require("fs");
const { json } = require("stream/consumers");

fs.readFile("./firstname.txt", "utf-8", (err, Fname) => {
  fs.readFile("./lastname.txt", "utf-8", (err, Lname) =>{
    fs.readFile("./age.txt", "utf-8", (err, age) => {
      fs.readFile("./hobbies.txt", "utf-8", (err, hobbies) => {
        arr = JSON.parse(hobbies)
        console.log(`${Fname} ${Lname} is ${age} years old and his hoobies are ${arr[0]} and ${arr[1]}`)
      })
    })
  })
})