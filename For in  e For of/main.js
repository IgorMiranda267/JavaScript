// ******* FOR IN *******
const frutas  = ['abcate', 'manga', 'pera', 'uva'];
const nomes = ['Igor', 'Isabella','Douglas','Renata'];

for (let indice in frutas){ // Retorna o índice.
    console.log(frutas[indice]);
}
console.log('****************');

// ******* FOR OF *******
for ( let valor of nomes){ // Retorna o valor.
    console.log(valor);
}
