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

   
//end point kubus 
app.post("/kubus",(req,res)=>{
    let panjang = Number(req.body.panjang) 
    let lebar = Number(req.body.lebar)
    let tinggi = Number(req.body.tinggi)
    let sisi = Number(req.body.sisi)
    let luas_permukaan = panjang * lebar * tinggi 
    let volume = sisi * sisi * sisi

    let response = {
        panjang: panjang,
        lebar: lebar, 
        tinggi: tinggi,
        sisi: sisi,
        luas_permukaan: luas_permukaan,
        volume: volume
    }
    res.json(response)
})


//end point balok 
app.post("/balok",(req,res)=>{
    let panjang = Number(req.body.panjang) 
    let lebar = Number(req.body.lebar)
    let tinggi = Number(req.body.tinggi)


    let luas_permukaan = 2 * (panjang * lebar + lebar * tinggi + panjang * tinggi)
    let volume = panjang * lebar * tinggi

    let response = {
        panjang: panjang,
        lebar: lebar, 
        tinggi: tinggi,
        luas_permukaan: luas_permukaan,
        volume: volume,

    }
    res.json(response)
})

//end point kerucut 
app.post("/kerucut", (req,res) => {
    let jari = Number(req.body.jari) //body -> kita perlu memasukkan value di body berupa key dan juga value
    let tinggi = Number(req.body.tinggi)
    let sisi = Number(req.body.sisi)
    let volume = 1/3 * 22/7 * jari * jari * tinggi
    let luas = 22/7 * jari * (jari + sisi)

    let response = {
        jari: jari,
        tinggi: tinggi,
        sisi: sisi,
        volume: volume,
        luas: luas
    }
    res.json(response)
})

//end point bola 
app.post("/bola",(req,res)=>{
    let r = Number(req.body.r)

    let volume = 4/3 * 22/7 * r * r * r
    let luas_permukaan = 4 * 22/7 * r * r

    let response = {
        r:r,
        volume:volume,
        luas_permukaan:luas_permukaan,

    }
    res.json(response)
})