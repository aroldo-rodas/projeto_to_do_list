//Variáveis adicionar tarefa
let btn = document.querySelector("#adicionar-tarefa");
let quadroDeTarefas = document.getElementById("container");
let item = document.querySelectorAll(".item");
let boxAdicinarTarefa = document.getElementById('caixa-add');
let btnAdicionar = document.querySelector("#caixa-add button");
let gerarId = genId();

//Evento Adicionar tarefa
btn.addEventListener('click', function() {
    item = document.querySelectorAll(".item");
    
    //Esconde os itens
    for(let i = 0; i < item.length; i++) {
        item[i].classList.remove('item');
        item[i].classList.add('hide');
    }

    //Exibe caixa de adicionar tarefa
    boxAdicinarTarefa.classList.remove('hide');

    //Esconde botão
    btn.classList.add('hide');
});

//Evento Adicionar
btnAdicionar.addEventListener("click", function () {
    boxAdicinarTarefa.classList.add('hide');
    btn.classList.remove('hide');

    //Exibi os itens ocultos
    for(let i = 0; i < item.length; i++) {
        item[i].classList.remove('hide');
        item[i].classList.add('item');
    }
});

//Remover Tarefa
function removerTarefa(id) {
    let itemRemover = document.getElementById(String(id));
    let paiElemento = itemRemover.parentNode;

    //Sobre até o "avô" do span para remover o item
    paiElemento.parentNode.removeChild(paiElemento);
}

function adicionarTarefa() {
    //Captura a descrição da tarefa
    let valor = document.querySelector('#caixa-add input').value;
    console.log(valor);

    //Monta a terefa
    let cloneItem = item[0].cloneNode(true);
    cloneItem.childNodes[3].innerHTML = valor;
    cloneItem.classList.remove('hide');
    cloneItem.classList.add('item');
    cloneItem.childNodes[1].setAttribute('id', gerarId.next().value);
    console.log(cloneItem.childNodes[1]);

    //Adicionar item como filho da quadro de tarefas
    quadroDeTarefas.appendChild(cloneItem);

    //Zera valor do input
    document.querySelector('#caixa-add input').value = "";
}

//Gerador de Id
function* genId() {
    let id = 0;

    while(true) {
        yield id++;
    }
}