let carro = {
  modelo: 'Q3',
  marca: 'BMW',
  cor: 'preto',
  ano: 2024,
  portas: 2,

  revendedoras: [
    'Chapecó',
    'Floripa',
    'Xanxerê',
    'São Paulo'
  ],
}

let moto = {
  modelo: 'XRE',
  marca: 'honda',
  cor: 'preta',
  ano: 2023
}

let pessoas = [
  {
    nome: 'pedro',
    idade: 19,
  },
  
  {
    nome: 'carlos',
    idade: 35,
  },

  {
    nome: 'alguem',
    idade: 40,
  },
];

pessoas.forEach((pessoa) => console.log(`Meu nome é ${pessoa.nome}, tenho um carro ${carro.modelo}, uma moto ${moto.modelo}, tenho revendedoras em ${carro.revendedoras}`));