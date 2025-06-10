// Trocar abas
document.querySelectorAll(".guia-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".guia-btn").forEach(b => b.classList.remove("ativo"));
        btn.classList.add("ativo");

        document.getElementById("guia-cronometro").style.display = btn.dataset.guia === "cronometro" ? "block" : "none";
        document.getElementById("guia-contagem").style.display = btn.dataset.guia === "contagem" ? "block" : "none";
    });
});

// CRONÔMETRO
let cronometroInterval;
let segundos = 0;
let pausado = false;

function atualizarCronometro() {
    const hrs = String(Math.floor(segundos / 3600)).padStart(2, '0');
    const min = String(Math.floor((segundos % 3600) / 60)).padStart(2, '0');
    const seg = String(segundos % 60).padStart(2, '0');
    document.getElementById("cronometro").textContent = `${hrs}:${min}:${seg}`;
}

document.getElementById("iniciarCronometro").onclick = () => {
    if (!cronometroInterval) {
        cronometroInterval = setInterval(() => {
            if (!pausado) {
                segundos++;
                atualizarCronometro();
            }
        }, 1000);
    }
};

document.getElementById("pausarCronometro").onclick = () => {
    pausado = !pausado;
};

document.getElementById("resetarCronometro").onclick = () => {
    clearInterval(cronometroInterval);
    cronometroInterval = null;
    segundos = 0;
    atualizarCronometro();
    pausado = false;
};

// CONTAGEM REGRESSIVA
let contagemInterval;
let tempoRestante = 0;

function atualizarContagem() {
    const hrs = String(Math.floor(tempoRestante / 3600)).padStart(2, '0');
    const min = String(Math.floor((tempoRestante % 3600) / 60)).padStart(2, '0');
    const seg = String(tempoRestante % 60).padStart(2, '0');
    document.getElementById("contagem").textContent = `${hrs}:${min}:${seg}`;
}

document.getElementById("iniciarContagem").onclick = () => {
    const h = parseInt(document.getElementById("horas").value) || 0;
    const m = parseInt(document.getElementById("minutos").value) || 0;
    const s = parseInt(document.getElementById("segundos").value) || 0;
    tempoRestante = h * 3600 + m * 60 + s;

    if (tempoRestante <= 0) return;

    clearInterval(contagemInterval);
    contagemInterval = setInterval(() => {
        if (tempoRestante > 0) {
            tempoRestante--;
            atualizarContagem();
        } else {
            clearInterval(contagemInterval);
            alert("Tempo esgotado!");
        }
    }, 1000);
};

document.getElementById("pausarContagem").onclick = () => {
    clearInterval(contagemInterval);
};

document.getElementById("resetarContagem").onclick = () => {
    clearInterval(contagemInterval);
    tempoRestante = 0;
    atualizarContagem();
};
