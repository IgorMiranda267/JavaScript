
      // .lengt Conta o comprimento da sting
      // .charAT() seleciona um caractere
      // .indexOf() mostra o indice do caractere selecionado
      // .lastIndexOf() mostra o indice do ultimo caractere na frase selecionado
      // .slice() extrai uma parte de uma string e o retorna como uma nova string, sem modificar uma string original.
      // .split() divide uma Stringe uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array.
      // .toUpperCase() Coloca uma string em letra maiuscula
      // .toLowerCase() Coloca uma string em letra minuscula
      
const nome = prompt('Digite seu nome: ')
      document.body.innerHTML += `Seu nome é: <strong> ${nome} </strong>.<br/> `
      document.body.innerHTML += `Seu nome tem <strong> ${nome.length} </strong> letras.<br/> `
      document.body.innerHTML += `A segunda letra do seu nome é: <strong> ${nome.charAt(1)} </strong>.<br/> `
      document.body.innerHTML += `Qual o primeiro índice da letra n no seu nome? <strong> ${nome.indexOf('n')} </strong>.<br/> `
      document.body.innerHTML += `Qual o último índice da letra a no seu nome? <strong> ${nome.lastIndexOf('a')} </strong>.<br/> `
      document.body.innerHTML += `As últimas 3 letras do seu nome são: <strong> ${nome.slice(-3, nome.length)} </strong>.<br/> `
      document.body.innerHTML += `As palavras do seu nome são: <strong> ${nome.split(' ')} </strong>.<br/> `
      document.body.innerHTML += `Seu nome com letras maiúsculas: <strong> ${nome.toUpperCase()} </strong>.<br/> `
      document.body.innerHTML += `Seu nome com letras minúsculas:  <strong> ${nome.toLowerCase()} </strong>.<br/> `
