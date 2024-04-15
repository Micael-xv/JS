// let pessoa = {
//   nome: 'Micael',
//   idade: 20,
//   estuda: true,
//   endereco: {
//     rua: 'principal',
//     cidade: 'Chapecó',
//     numero: 999,
//   },
  
//   idioma: [
//     'portugues',
//     'ingles',
//     'italiano',
//     'espanhol',
//   ],

//   programando: () => {
//     console.log('programando');
//   }
// }

let pessoa = {
  nome: 'Micael',
  idade: 20,
  estuda: true,
  endereco: {
    rua: 'principal',
    cidade: 'Chapecó',
    numero: 999,
  },
  
  idioma: [
    'portugues',
    'ingles',
    'italiano',
    'espanhol',
  ]
}

Object.values

// console.log(Object.keys(pessoa));
// let texto = JSON.stringify(pessoa);
// let chave = Object.keys(pessoa);

chave.forEach((dado) => console.log(pessoa[dado])); //segundo modo
// primeiro modo
// chave.forEach((dado) => {
//   console.log(pessoa[dado]);
// })


// console.log(pessoa.idioma);
// console.log(pessoa.idioma[1]);
// console.log(pessoa.endereco.rua);
// console.log(pessoa.programando);
// const teste = require('./teste.json');
// console.log(teste);

let pessoas = [
  {
    nome: 'mateus',
    idade: 20,
  },

  {
    nome: 'bernardo',
    idade: 19,
  },
];

// pessoas.forEach((pessoa) => console.log(`Meu nome é ${pessoa.nome} e a minha idade é ${pessoa.idade}`));

