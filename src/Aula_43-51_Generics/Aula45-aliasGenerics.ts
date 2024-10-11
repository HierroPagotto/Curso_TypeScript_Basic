interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

type PessoaProtocolo2 <T = string, U = number> = {
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno: PessoaProtocolo<string, number> = {
  nome: 'Hierro',
  sobrenome: 'Pagotto',
  idade: 19,
};

const aluno2: PessoaProtocolo<number, number> = {
  nome: 121,
  sobrenome: 24,
  idade: 19,
};

const aluno3: PessoaProtocolo = {
  nome: 'Hierro',
  sobrenome: 'Pagotto',
  idade: 19,
};


console.log(aluno, aluno2, aluno3);
