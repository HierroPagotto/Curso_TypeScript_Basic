let x= 10;
x = 0b1010;
const y = 10; //não pode ser mudado
let a:100 = 100;// forma de fazer com que o let não seja mudado

const people = {
  nome:'Hierro' as const,
  sobrenome: 'Pagotto',
};

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'){
  return cor;
}

console.log(escolhaCor);

// Module mode
export default 1;
