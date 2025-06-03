fetch('api/usario')
    .then(response => resposta.json())
    .then(usuario => {
        // Atualiza o nome do usário na pag deshboard
        document.getElementById('nome-usuario').textContent = usuario.displayName
        document.getElementById('email-usuario').textContent = usuario.emails[0].value
    })
    .catch(error => {
        console.error('Erro ao buscar dados do usuário:', error)
        window.location.href = 'login.html'
        // Redireciona para a página inicial caso der erro
    })