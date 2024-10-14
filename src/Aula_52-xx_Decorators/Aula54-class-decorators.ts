function inverteNomeECor(param1: string, param2: string){
  return function <T extends new (...args: any[]) => any>(target: T): T{
    console.log('Recebi  decorator e recebi', target);

    return class extends target{
    cor: string;
    nome: string;

    constructor(...args: any[]) {
      super(...args);
      this.nome = args[0].split('').reverse().join('');
      this.cor = args[0].split('').reverse().join('');
      }

      inverte(valor: string):string{
        return valor.split('').reverse().join('') + param1 + '' + param2;
      }
    };
  }
}


@inverteNomeECor('Valor1', 'Valor2')
export class Animal {
  constructor(public nome: string,  public cor: string){
    console.log('Sou a classe');
  }
}

const animal = new Animal('Capivara' ,'roxo');
console.log(animal);
