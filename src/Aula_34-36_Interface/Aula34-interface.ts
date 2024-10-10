interface TipoNome{
  nome: string;
}

interface TipoSobrenome{
  sobrenome: string;
}

interface TipoNomeCompleto{
  nomeCompleto: () => string;
}

type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto;

interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomeCompleto{}

export class Pessoa implements TipoNome, TipoSobrenome, TipoNomeCompleto {
  constructor(public nome: string, public sobrenome: string){}

    nomeCompleto(): string{
      return this.nome + '' + this.sobrenome;
    }
}

const pessoaObj: TipoPessoa2 = {
  nomeCompleto() {
      return this.nome + '' + this.sobrenome;
  },
  nome: 'Hierro',
  sobrenome: 'Pagotto'
}

const pessoa = new Pessoa('Hierro', 'Pagotto');

console.log(pessoa.nomeCompleto());
console.log(pessoaObj.nomeCompleto);
