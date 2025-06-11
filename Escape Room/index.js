const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let resolvidos = {
    grampeador: false,
    janela: false,
    papeis: false,
    relogio: false,
    quadro: false,
    armario: false,

}

function menuPrincipal() {
    console.log("\nVocê está em uma sala trancada")
    console.log("Ao seu redor, você vê: ")
    console.log("1. Um grampeador velho")
    console.log("2. Uma janela fechada")
    console.log("3. Um monte de papéis amassados na mesa")
    console.log("4. Um relógio parado na parede")
    console.log("5. Um quadro misterioso")
    console.log("6. Um armário fechado")
    console.log("7. Tentar abrir a porta")

    rl.question("\nO que você deseja fazer? ", (resposta) => {
        switch (resposta.trim()) {
            case "1":
                investigarGrampeador()
                break
            case "2":
                investigarJanela()
                break
            case "3":
                investigarPapeis()
                break
            case "4":
                investigarRelogio()
                break
            case "5":
                investigarquadro()
                break
            case "6":
                investigarArmario()
                break
            case "7":
                verificarSaida()
                break
            default:
                console.log("Escolha inválida.")
                menuPrincipal()
        }
    })
}
// -----------------------------------------------------------------------------------------------------------
function investigarGrampeador() {
    if(resolvidos.grampeador){
        console.log("Você já resolveu esse desafio")
        return menuPrincipal()
    }
    rl.question("\nDentro do grampeador tem um bilhete: 'Sou cheio de buracos, mas seguro a água. O que sou?' ", (resposta) => {
        if (resposta.trim().toLowerCase() === "esponja") {
            console.log("Acertou! Você desbloqueou a chave que estava no grampeador")
            resolvidos.grampeador = true
        } else {
            console.log("Resposta errada. Tente novamente depois.")
        }
        menuPrincipal()
    })
}
// -----------------------------------------------------------------------------------------------------------
function investigarJanela() {
    if(resolvidos.janela){
        console.log("Você já resolveu esse desafio")
        return menuPrincipal()
    }
    rl.question("\nVocê observa algo escrito no vidro da janela embaçada: 'Não tenho asas, mas posso voar. Não tenho olhos, mas posso te cegar. O que sou?' ", (resposta) => {
        if (resposta.trim().toLowerCase() === "luz") {
            console.log("Acertou! Ao dizer 'luz', uma pequena caixa sob a janela se abre com uma chave dentro.")
            resolvidos.janela = true
        } else {
            console.log("Resposta errada. Tente novamente depois.")
        }
        menuPrincipal()
    })
}
// -----------------------------------------------------------------------------------------------------------
function investigarPapeis() {
    if(resolvidos.papeis){
        console.log("Você já resolveu esse desafio")
        return menuPrincipal()
    }
    rl.question("\nUm dos papéis diz: 'Qual palavra está sempre escrita errada no dicionário?' ", (resposta) => {
        if(resposta.trim().toLowerCase() === "errada") {
            console.log("Acertou! Você encontrou a chave no meio dos papéis")
            resolvidos.papeis = true
        } else {
            console.log("Errou! Não é isso")
        }
        menuPrincipal()
    })
}
// -----------------------------------------------------------------------------------------------------------
// SUBSTITUIR //
function investigarRelogio() {
    if(resolvidos.relogio) {
        console.log("Você já resolveu esse desafio")
        return menuPrincipal()
    }
    rl.question("\nAtrás do relógio de parede há uma anotação: 'Sou sempre usado antes de você me perceber. Estou sempre correndo, mas nunca saio do lugar. O que sou?' ", (resposta) => {
        if (resposta.trim().toLowerCase().includes("tempo")) {
            console.log("Acertou! Um compartimento secreto no relógio se abre com uma chave dentro.")
            resolvidos.relogio = true
        } else {
            console.log("Errou! Não é isso")
        }
        menuPrincipal()
    })
}
// -----------------------------------------------------------------------------------------------------------
// NOVO //
function investigarQuadro() {
    if(resolvidos.quadro) {
        console.log("Você já resolveu esse desafio")
        return menuPrincipal()
    }
    rl.question("\nAtrás do quadro, há um papel colado: 'Quanto mais há de mim, menos você vê. O que sou?' ", (resposta) => {
        if (resposta.trim().toLowerCase().includes("escuridão")) {
            console.log("Acertou! Um compartimento atrás do quadro se destrava com uma chave dentro.")
            resolvidos.quadro = true
        } else {
            console.log("Errou! Não é isso")
        }
        menuPrincipal()
    })
}
// -----------------------------------------------------------------------------------------------------------
function investigarArmario() {
    if(resolvidos.armario) {
        console.log("Você já resolveu esse desafio")
        return menuPrincipal()
    }
    rl.question("\nDentro do armário há um cofre com um enigma preso: 'Quanto mais você tira, maior eu fico. O que sou?'", (resposta) => {
        if (resposta.trim().toLowerCase().includes("buraco")) {
            console.log("Acertou! O cofre se abre revelando uma chave escondida")
            resolvidos.armario = true
        } else {
            console.log("Errou! Não é isso")
        }
        menuPrincipal()
    })
}
// -----------------------------------------------------------------------------------------------------------
function verificarSaida() {
    if (resolvidos.grampeador && resolvidos.janela && resolvidos.papeis && resolvidos.almofada) {
        console.log("Você encontorou as 4 chaves")
        console.log("Parabéns! Você conseguiu escapar da sala!")
        rl.close
    } else {
        console.log("A porta ainda esta fechada. Você não resolveu os enigmas")
        menuPrincipal()
    }
}
console.log("Bem vindo ao Escape Room")
menuPrincipal()