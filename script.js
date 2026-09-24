// let nome = 'Wlson' // string
// let idade = 39 // int
// let altura = 1.76 // float
//console.log (`Meu nome é ${nome}. Tenho ${idade} anos e $ {altura} de altura.`)

// nome = "joão"

//console.log (`Meu nome é ${nome}. Tenho ${idade} anos e $ {altura} de altura.`)

const titulo = document.getElementById('titulo')
const paragrafo = document.getElementById('paragrafo')
const caixa = document.getElementById('caixa')
const lista = document.getElementById('lista')
const contadorTexto = document.getElementById('contador')

const btnTexto = document.getElementById('btnTexto')
const btnCor =  document.getElementById('btnCor')
const btnFundo = document.getElementById('btnFundo')
const btnDestaque = document.getElementById('btnDestaque')
const btnFonte = document.getElementById('btnFonte')
const btnAdicionar = document.getElementById('btnAdicionar')
const btnRemover = document.getElementById('btnRemover')
const btnContador = document.getElementById('btnContador')

btnTexto.addEventListener('click', function(){
    paragrafo.textContent = "meu nome é ysna"
})

btnCor.addEventListener('click', function(){
    paragrafo.style.color = "yellow"
})

btnFundo.addEventListener('click', function(){
    caixa.style.color = " #19dcd6"

})

btnDestaque.addEventListener('click', function(){
     caixa.classList.toggle('destaque')
})

btnDestaque.addEventListener ('click', function(){
    titulo.style.fontSize= '40px'
    paragrafo.style.fontSize = '60px'
    paragrafo.style.fontWeight = 'bold'
})

btnAdicionar.addEventListener ('click', function(){
    const itemNovo = document.createElement ('li')
    itemNovo.textContent = "item " + (lista.children.length + 1)
   lista.appendChild(itemNovo)

})
 btnRemover.addEventListener('click', function(){
   if (lista.lastElementChild) {
    lista.lastElementChild.remove()
   }
})

let cliques = 0
btnContador.addEventListener('click', function (){
cliques = cliques + 1
 contadorTexto.textContent = cliques

})

