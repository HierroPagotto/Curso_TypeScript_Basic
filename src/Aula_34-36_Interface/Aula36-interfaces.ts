interface Pessoa1 {
  nome: string;
  readonly sobrenome: string;
  readonly enderecos: readonly string[];
  idade?: number;
}

const pessoa1: Pessoa1 = {
  nome: 'Hiero',
  sobrenome: 'Pagotto',
  enderecos: ['Av. Moraes Salles'],
  idade: 19,
};

pessoa1.idade = 20;
console.log(pessoa1);
