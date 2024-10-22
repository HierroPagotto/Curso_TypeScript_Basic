import { MydatabaseFunction } from "./db/my-database-function";
import { mydatabaseClassic as mydatabaseFromModuleA} from './module-a'

const mydatabaseClassic = MydatabaseFunction;
mydatabaseClassic.add({name: 'Luciana', age: 45});
mydatabaseClassic.add({name: 'Pablo', age: 27});
mydatabaseClassic.add({name: 'Fabrizzio', age: 17});
mydatabaseClassic.show();

console.log(mydatabaseClassic === mydatabaseFromModuleA)
