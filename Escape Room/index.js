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
    console.log("\n🔒 Você está preso em uma sala misteriosa e trancada!")
    console.log(" Voce olha ao seu redor, você observa objetos intrigantes:")
    console.log("1. 📎 Um grampeador antigo empoeirado")
    console.log("2. 🪟 Uma janela embaçada com algo escrito")
    console.log("3. 📜 Um monte de papéis amassados sobre a mesa")
    console.log("4. ⏰ Um relógio parado pendurado na parede")
    console.log("5. 🖼️  Um quadro enigmático torto na parede")
    console.log("6. 🚪 Um armário fechado")
    console.log("7. 🔑 Tentar abrir a porta da sala")

    rl.question("\n❓ O que você deseja investigar? ", (resposta) => {
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
                investigarQuadro()
                break
            case "6":
                investigarArmario()
                break
            case "7":
                verificarSaida()
                break
            default:
                console.log("⚠️ Escolha inválida! Tente novamente.")
                menuPrincipal()
        }
    })
}

function investigarGrampeador() {
    if(resolvidos.grampeador){
        console.log("✅ Você já resolveu o enigma do grampeador!")
        return menuPrincipal()
    }
    rl.question("\n📎 Você abre o grampeador e encontra um bilhete: 'Sou cheio de buracos, mas seguro a água. O que sou?' ", (resposta) => {
        if (resposta.trim().toLowerCase() === "esponja") {
            console.log("🎉 Acertou! Uma 1chave brilhante aparece dentro do grampeador!")
            resolvidos.grampeador = true
        } else {
            console.log("❌ Resposta errada! Volte e tente novamente mais tarde.")
        }
        menuPrincipal()
    })
}

function investigarJanela() {
    if(resolvidos.janela){
        console.log("✅ Você já resolveu o enigma da janela!")
        return menuPrincipal()
    }
    rl.question("\n🪟 Você limpa a janela embaçada e lê: 'Não tenho asas, mas posso voar. Não tenho olhos, mas posso te cegar. O que sou?' ", (resposta) => {
        if (resposta.trim().toLowerCase() === "luz") {
            console.log("🎉 Acertou! Uma caixa secreta sob a janela se abre, revelando uma chave!")
            resolvidos.janela = true
        } else {
            console.log("❌ Resposta errada! Volte e tente novamente mais tarde.")
        }
        menuPrincipal()
    })
}

function investigarPapeis() {
    if(resolvidos.papeis){
        console.log("✅ Você já resolveu o enigma dos papéis!")
        return menuPrincipal()
    }
    rl.question("\n📜 Entre os papéis amassados, um destaca: 'Qual palavra está sempre escrita errada no dicionário?' ", (resposta) => {
        if(resposta.trim().toLowerCase() === "errada") {
            console.log("🎉 Acertou! Uma chave estava escondida entre os papéis!")
            resolvidos.papeis = true
        } else {
            console.log("❌ Errou! Não é essa a resposta.")
        }
        menuPrincipal()
    })
}

function investigarRelogio() {
    if(resolvidos.relogio) {
        console.log("✅ Você já resolveu o enigma do relógio!")
        return menuPrincipal()
    }
    rl.question("\n⏰ Atrás do relógio parado, uma nota diz: 'Sou sempre usado antes de você me perceber. Estou sempre correndo, mas nunca saio do lugar. O que sou?' ", (resposta) => {
        if (resposta.trim().toLowerCase() === "tempo") {
            console.log("🎉 Acertou! Um compartimento secreto no relógio se abre, revelando uma chave!")
            resolvidos.relogio = true
        } else {
            console.log("❌ Errou! Não é essa a resposta.")
        }
        menuPrincipal()
    })
}

function investigarQuadro() {
    if(resolvidos.quadro) {
        console.log("✅ Você já resolveu o enigma do quadro!")
        return menuPrincipal()
    }
    rl.question("\n🖼️ Você remove o quadro e encontra: 'Quanto mais há de mim, menos você vê. O que sou?' ", (resposta) => {
        if (resposta.trim().toLowerCase() === "escuridão") {
            console.log("🎉 Acertou! Um mecanismo atrás do quadro libera uma chave!")
            resolvidos.quadro = true
        } else {
            console.log("❌ Errou! Não é essa a resposta.")
        }
        menuPrincipal()
    })
}

function investigarArmario() {
    if(resolvidos.armario) {
        console.log("✅ Você já resolveu o enigma do armário!")
        return menuPrincipal()
    }
    rl.question("\n🚪 O armário revela um cofre com a mensagem: 'Quanto mais você tira, maior eu fico. O que sou?' ", (resposta) => {
        if (resposta.trim().toLowerCase() === "buraco") {
            console.log("🎉 Acertou! O cofre se abre, revelando uma chave reluzente!")
            resolvidos.armario = true
        } else {
            console.log("❌ Errou! Não é essa a resposta.")
        }
        menuPrincipal()
    })
}

function verificarSaida() {
    if (resolvidos.grampeador && resolvidos.janela && resolvidos.papeis && resolvidos.relogio && resolvidos.quadro && resolvidos.armario) {
        console.log("\n🔑 Você encontrou todas as 6 chaves!")
        console.log("🏆 Parabéns! A porta se abre e você escapa da sala misteriosa!")
        rl.close()
    } else {
        console.log("\n🔒 A porta permanece trancada. Você ainda precisa encontrar mais chaves!")
        menuPrincipal()
    }
}

console.log("🌟 Bem-vindo ao Escape Room! Resolva os enigmas para escapar! 🕵️‍♂️")
menuPrincipal()