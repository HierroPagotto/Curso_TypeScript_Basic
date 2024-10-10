type CoresObj = typeof coresObj;
type CoresChaves = keyof CoresObj;

const coresObj = {
  vermelho: 'red',
  verde: 'grenn',
  azul: 'blue',
  roxo: 'purple',
};

function traduzirCor(cor: CoresChaves, cores:  CoresObj){
  return cores[cor];
}

console.log(traduzirCor('vermelho', coresObj));
console.log(traduzirCor('verde', coresObj));
console.log(traduzirCor('azul', coresObj));
console.log(traduzirCor('roxo', coresObj));
