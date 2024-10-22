import { MydatabaseFunction } from "./db/my-database-function";

const mydatabaseClassic = MydatabaseFunction;
mydatabaseClassic.add({name: 'Hierro', age: 19});
mydatabaseClassic.add({name: 'Bruno', age: 52});
mydatabaseClassic.add({name: 'Marina', age: 18});
mydatabaseClassic.remove(1);
mydatabaseClassic.show();

export { mydatabaseClassic }
