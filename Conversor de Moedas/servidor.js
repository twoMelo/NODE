const express = require("express")
const fetch = require("node-fetch")
const path = require("path")

const app = express()
const porta = 3000

// Chave da API
const API_KEY = "37e81c7b67994fa2ea1e631805122858"

// Pegar os arquivos da pasta public
app.use(express.static("public"))

// Rota para converter a moeda
//req e res = requisição e resposta
app.get("/converter", async (req, res) => {
    try {
        const {valor, de, para} = req.query

        if(!valor || !de || !para) {
            return res.status(400).json({erro: "Parâmetro inválido"})
        }

        console.log(`Fazendo requisição API: ${de} -> ${para}, valor: ${valor}`)
        const url = `http://api.exchangerate.host/convert?access_key=${API_KEY}&from=${de}&to=${para}&amount=${valor}`
        console.log("URL DA API", url)
    }
})
