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

//end point suhu celcius 
app.get("/celcius/:angka", (req, res) => {
    let angka = Number(req.params.angka)
    let reamur = 4 / 5 * angka
    let kelvin = angka + 273
    let fahrenheit = (9 / 5) * angka + 32

    let response = {
        celcius: angka,
        reamur: reamur,
        kelvin: kelvin,
        fahrenheit: fahrenheit
    }
    res.json(response)
})

//end point fahrenheit
app.get("/fahrenheit/:angka", (req, res) => {
    let angka = Number(req.params.angka)
    let reamur = 4 / 9 * (angka - 32)
    let celcius = (angka - 32) * 5 / 9
    let kelvin = (angka + 459) * 5 / 9

    let response = {
        fahrenheit: angka,
        reamur: reamur,
        celcius: celcius,
        kelvin: kelvin
    }
    res.json(response)
})

//end point kelvin 
app.get("/kelvin/:angka", (req, res) => {
    let angka = Number(req.params.angka)
    let reamur = 4 / 5 * (angka - 273)
    let celcius = angka - 273
    let fahrenheit = (angka * 9 / 5) - 459

    let response = {
        kelvin: angka,
        reamur: reamur,
        celcius: celcius,
        fahrenheit: fahrenheit
    }
    res.json(response)
})

//end point suhu reamur 
app.get("/reamur/:angka", (req, res) => {
    let angka = Number(req.params.angka)
    let celcius = 5 / 4 * angka
    let kelvin = 5 / 4 * angka + 273
    let fahrenheit = (9 / 4 * angka) + 32

    let response = {
        reamur: angka,
        celcius: celcius,
        kelvin: kelvin,
        fahrenheit: fahrenheit
    }
    res.json(response)
})
