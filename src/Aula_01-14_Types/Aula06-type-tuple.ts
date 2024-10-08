const dadosCliente1: [number, string] = [1, 'Hierro'];
const dadosCliente2: [number, string, string] = [1, 'Hierro', 'Pagotto'];
const dadosCliente3: [number, string, string?] = [100, 'Hierro'];
const dadosCliente4: [number, string, ...string[]] = [200, 'Pablo', 'Marina', 'Bruno', 'Luciana'];

dadosCliente1[0] = 10
dadosCliente1[1] = 'Pagotto'

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

