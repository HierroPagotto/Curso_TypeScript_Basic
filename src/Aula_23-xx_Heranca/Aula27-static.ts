export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';

  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {}

  metodoNormal(): void{
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }

 static criaPessoa(nome: string, sobrenome: string): Pessoa{
  return new Pessoa(nome, sobrenome, 0, '000.000.000-00');
 }
}

const pessoa1 = Pessoa.criaPessoa('Hierro', 'Pagotto');
console.log(pessoa1);
pessoa1.metodoNormal();
console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
