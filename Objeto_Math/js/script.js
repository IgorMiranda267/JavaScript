// Math.floor() Arredonda o numero para baixo
// Math.ceil() Arredonda o numero para cima
// Math.round() Arredonda o número para o mais proximo, similar ao floor()
// Math.max() devolve o maior numero de uma sequncia
// Math.min() devolve o menor numero de uma sequencia
// Math.random() gera numeros aleatorios entre 0 e 1
// Number.isInteger() retorna True se o inumero é inteiro, e false se for falso

const numUsuario = Number(prompt('Digite um numero:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto  = document.getElementById('texto');

texto.innerHTML += `<p>Raiz quadrada ${numUsuario ** 0.5}</p>`;
texto.innerHTML += `<p>${numUsuario} é inteiro: ${Number.isInteger(numUsuario)}</p>`;
texto.innerHTML += `<p>É Nan: ${Number.isNaN(numUsuario)}</p>`;
texto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numUsuario)}</p>`;
texto.innerHTML += `<p>Arredondado para cima: ${Math.ceil(numUsuario)}</p>`;
texto.innerHTML += `<p>Com duas Casas decimais: ${numUsuario.toFixed(2)} </p>`;
