namespace MeuNamespace{
  export const nomeDoNamespace = 'Hierro';

  export class PessoaDoNamespace{
    constructor (public nome: string){}
  }

  const pessoa = new PessoaDoNamespace('Hierro');
  console.log(pessoa);

  export namespace OutroNamespace{
    export const nomeDoNamespace = 'Nome no outro namespace';
  }
}

const PessoaDoNamespace = new MeuNamespace.PessoaDoNamespace('Hierro');
console.log(PessoaDoNamespace);
console.log(MeuNamespace.nomeDoNamespace);
console.log(MeuNamespace);

export default 1;
