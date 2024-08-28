function carregarDados() {
    // Cria uma nova instância de XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // Configura a solicitação: tipo GET e URL do servidor
    xhr.open('GET', 'dados.json', true);

    // Define o que acontece quando a resposta é recebida
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Converte a resposta em JSON e exibe no div com id "resultado"
            const dados = JSON.parse(xhr.responseText);
            document.getElementById('resultado').innerHTML = 
                `<p>Nome: ${dados.nome}</p>
                 <p>Idade: ${dados.idade}</p>`;
        }
    };

    // Envia a solicitação
    xhr.send();
}
