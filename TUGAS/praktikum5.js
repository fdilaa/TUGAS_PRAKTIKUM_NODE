const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
 
app.listen(8000, () => {
    console.log("Server run on port 8000");
   })

//end point Ganjil-Genap
app.post("/ganjilgenap", (req,res) => {
    let nilai = Number (req.body.nilai)    
   
let status = ''
    if (nilai%2==0) {
        status= "genap"
    } else if(nilai%2==1){
        status= "ganjil"
    } 
    let response = {
        nilai: nilai,
        status:status 
    }
    res.json(response)
})
