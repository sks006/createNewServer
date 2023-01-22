const fs = require("fs")


const testObj = {

    name: 'shihab',
    address: {
        city: 'comilla',
        country: 'BD',
    },
    gmail: 'seamkabir@gmail.com',

}
const data = JSON.stringify(testObj)
fs.writeFile("./test.JSON", data, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("The process has been success full")
    }

})