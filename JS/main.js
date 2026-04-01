const body = document.querySelector('body');
const logo = document.querySelector('#logo');
const tema = document.querySelector('#tema')

function toggleStyle() {
  if (body.classList.contains('claro')) {
    body.classList.remove('claro');
    body.classList.add('escuro');
    logo.setAttribute('src', '../imagens/logo-escuro.png');
    tema.textContent = '☀️';
  } else {
    body.classList.remove('escuro');
    body.classList.add('claro');
    logo.setAttribute('src', './Imagens/logo-padrao.png');
    tema.textContent = '🌑';
  }
}

//  Sistema de Comentário
const comentarios = [];
const form = document.querySelector(`#form-comentario`);
const publicacao = document.querySelector(`#publicacao`);
form.addEventListener(`submit`, function(e){
    e.preventDefault();
    const nome = form.querySelector(`#nome`).value;
    const email = form.querySelector(`#email`).value;
    const mensagem = form.querySelector(`#mensagem`).value;
    const comentario = {nome, email, mensagem};
    comentarios.push(comentario);
    mostrarComentarios();
    form.reset();
});
function mostrarComentarios(){
    publicacao.innerHTML = ``;
    for(let i = 0; i < comentarios.length; i++){
        const comentario = comentarios[i];
        publicacao.innerHTML += `
            <div id="comentario" class="comentario">
                <div><p><b>Nome: </b></p><span>${comentario.nome}</span></div>
                <div><p><b>Mensagem: </b></p><span>${comentario.mensagem}</span></div>
            </div>
        `;
    }
}