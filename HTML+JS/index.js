const nome = "Igor Miranda"
const idade = 30;
const peso = 84;
const altura = 1.80
let imc = 0;
let anoNascimento = 0;

imc = (peso / ( altura * altura));
anoNascimento = 2021 - 30;

// templates strigs

console.log(`${nome} tem  ${idade}  anos, pesa  ${peso}  kg`);
console.log(`tem ${altura} seu  IMC é ${imc}`);
console.log( `&{nome} nasceu em &{anoNascimento}`);



