// Fazer um ternario que Compare se o passageiro e estudante,
// retornar o dado a uma variavel, assim caindo em um switch case para
// mostrar o valor que sera pago

// Ex: se carteirinah igual estudante verdadeiro

let passageiro = false;
let estudante = true;
let nauluno = false;

passageiro == estudante ? true : false;

switch (passageiro) {
  case estudante == true:
    console.log('Para estudante é: ' + 2.5);
    break;
  default:
    console.log('Não estudante é: ' + 5.00);
    break;
}