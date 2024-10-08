/* eslint-disable */

//Tipos basicos
let nome: string = 'Hierro';//Qualquer tipo de string: '' ou "" ou ``
let idade: number = 30; // 10, 1.57, -5.55, 0xf00d
let adulto: boolean = true;// true or false
let simbolo: symbol = Symbol('qualquer-symbol')//symbol
// let big: bigint = 10n; // bigint

//Arrays
let arrayDeNumeros: Array<number> = [1,2,3];
let arrayDeNumeros2: number[] = [1,2,3];
let arrayDeStrings: Array<string> = ['a', 'b', 'c'];
let arrayDeStrings2: string[] = ['a', 'b', 'c'];

//Objetos
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  idade: 30,
  nome: 'Hierro',
}

//Funções
function soma (x: number, y:number){
  return x + y;
}
const soma2: (x: number, y: number) => number = (x,y) => x + y;



