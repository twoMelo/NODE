// SINCRONO E ASSINCRONO -> ASSINCRONO.JS
function tarefaDemorada(nome, tempo) {
    setTimeout(() => {
        console.log(`Tarefa ${nome} concluída`);
    }, tempo);
}

console.log("Iniciando o programa...");
console.log("Executando tarefa 1");
tarefaDemorada(1, 3000); // Tarefa 1 vai demorar 3 segundos, mas não vai travar o código

console.log("Executando tarefa 2");
tarefaDemorada(2, 3000); // Tarefa 2 também vai demorar 3 segundos e vai iniciar logo depois da primeira

console.log("Programa finalizado");