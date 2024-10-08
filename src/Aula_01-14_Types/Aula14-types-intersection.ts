type TemNome = {nome: string};
type TemSobrenome = {sobrenome: string};
type TemIdade = {idade: number};
type Pessoa = TemNome & TemIdade & TemSobrenome;

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type Intersecao = AB & AC;

const pessoa: Pessoa = {
  idade: 19,
  nome: 'Hierro',
  sobrenome: 'Pagotto',
};

console.log(pessoa);

//Module mode
export { pessoa };
