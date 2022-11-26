let jogador,
  vencedor = null
let jogadorSelecionado = document.getElementById('jogador-selecionado')
let quadrados = document.getElementsByClassName('quadrado')
// let vencedorSelecionado = document.getElementById('vencedor-selecionado');

mudarJogador('X')

function escolherQuadrado (id) {
  let quadrado = document.getElementById(id)

  if (quadrado.innerHTML !== '-') {
    return
  }

  quadrado.innerHTML = jogador
  quadrado.style.color = '#000'

  if (jogador === 'X') {
    jogador = 'O'
  } else {
    jogador = 'X'
  }
}

function mudarJogador (valor) {
  jogador = valor
  jogadorSelecionado.innerHTML = jogador
}

function checaVencedor () {
  let quadrado1 = document.getElementById(1)
  let quadrado2 = document.getElementById(2)
  let quadrado3 = document.getElementById(3)
  let quadrado4 = document.getElementById(4)
  let quadrado5 = document.getElementById(5)
  let quadrado6 = document.getElementById(6)
  let quadrado7 = document.getElementById(7)
  let quadrado8 = document.getElementById(8)
  let quadrado9 = document.getElementById(9)

  if (checaSequencia(quadrado1, quadrado2, quadrado3)) {
    mudarCorQuadrado(quadrado1, quadrado2, quadrado3)
    mudarVencedor(quadrado1)
    return
  }

  if (checaSequencia(quadrado4, quadrado5, quadrado6)) {
    mudarCorQuadrado(quadrado4, quadrado5, quadrado6)
    mudarVencedor(quadrado4)
    return
  }

  if (checaSequencia(quadrado7, quadrado8, quadrado9)) {
    mudarCorQuadrado(quadrado7, quadrado8, quadrado9)
    mudarVencedor(quadrado7)
    return
  }
}

function mudaCorQuadrado(quadrado1, quadrado2, quadrado3) {
    quadrado1.style.background = '#0f0';
    quadrado2.style.background = '#0f0';
    quadrado3.style.background = '#0f0';
}

function checaSequencia(quadrado1, quadrado2, quadrado3) {
    var eigual = false;

    if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        eigual = true;
    }
    return eigual;
}
