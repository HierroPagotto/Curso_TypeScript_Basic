export function criaErro(): never{
  throw new Error('erro qualquer');
}

criaErro();
