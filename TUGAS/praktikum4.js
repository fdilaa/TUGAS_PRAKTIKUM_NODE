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

//end-point untuk menghitung Body Mass Index (BMI)
// <18.5 = kekurangan berat badan
// 18.5-24.9 = normal (ideal)
// 25.0-29.9 = (kelebihan berat badan)
// >= 30.0 = kegemukan(obesitas)

app.post("/bmi", (req,res) => {
    let bb = (req.body.bb)
    let tb = (req.body.tb)
    let bmi = (bb/(tb**2))*10000
    let status = ''
    if (bmi<18.5) {
        status= "Kekurangan berat badan"
    } else if(bmi>=18.5&&bmi<=24.9){
        status= "Normal (Ideal)"
    } else if(bmi>=25.0&&bmi<=29.9){
        status= "Kelebihan berat badan"
    } else if(bmi>=30.0){
        status= "Kegemukan (Obesitas)"
    }
    let response = {
        Berat: bb+' kg',
        Tinggi: tb+' cm',
        BMI: bmi,
        Status: status
    }
    res.json(response)
})