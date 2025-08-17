let amigos = [];

function adicionarAmigo() {
    const nomeInput = document.getElementById('amigo');
    const nome = nomeInput.value.trim();

    if (nome === '') {
        alert('Por favor, digite um nome para adicionar.');
        return;
    }

    if (amigos.map(amigo => amigo.toLowerCase()).includes(nome.toLowerCase())) {
        alert('Este nome já foi adicionado. Por favor, insira um nome diferente.');
        nomeInput.value = '';
        return;
    }

    amigos.push(nome);
    atualizarLista();

    nomeInput.value = '';
    nomeInput.focus();
}


function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.textContent = amigos.join(', ');
}


function sortearAmigo() {
    if (amigos.length < 4) {
        alert('É necessário ter pelo menos 4 amigos para realizar o sorteio!');
        return;
    }

    for (let i = amigos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigos[i], amigos[j]] = [amigos[j], amigos[i]]; 
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; 

    for (let i = 0; i < amigos.length; i++) {
        const amigoSecreto = (i === amigos.length - 1) ? amigos[0] : amigos[i + 1];
        
        const itemResultado = document.createElement('li');
        itemResultado.textContent = `${amigos[i]} -> ${amigoSecreto}`;
        resultado.appendChild(itemResultado);
    }
}