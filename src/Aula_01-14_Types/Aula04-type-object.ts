const objetoA: {
   readonly chaveA: string; //não pode ser alterado
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;//colocar isso quando não souber oque será inserido
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoA.chaveB = 'Outro valor';
objetoA.chaveC ='Nova chave';

console.log(objetoA);
