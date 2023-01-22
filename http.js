const http = require("http")

const surver = http.createServer((req, res) => {

    console.log(req.url)
    res.end("<h1> Hello sir this is node js  </h1>")

})

surver.listen(4141, () => {

    console.log("surver is runing on port 4141")
})