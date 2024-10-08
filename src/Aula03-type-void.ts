function semRetorno(...args: string[]): void{
  console.log(args.join(''));
}

const pessoa = {
  nome: 'Hierro',
  sobrenome: 'Pagotto',

  exibirNome(): void{
    console.log(this.nome+''+this.sobrenome);
  }
};

semRetorno('Hierro', 'Pagotto');
pessoa.exibirNome();

export {pessoa}
