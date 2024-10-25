import { DeliveryFactory } from './delivery/delivery-factory';
import { deliveryContext } from './delivery/delivery-context';

const factory = new DeliveryFactory();
deliveryContext(factory, 'Hierro', '19A', 'Av Moraes Salles', 'SP');
deliveryContext(factory, 'Marina', '20A', 'Av Brasil', 'SP');
deliveryContext(factory, 'Joana', '19A', 'Av Moraes Salles', 'SP');
deliveryContext(factory, 'Bruno', '2', 'Rua Zero', 'RN');
deliveryContext(factory, 'João', '501', 'Rua B', 'RJ');

console.log();
console.log(factory.getLocations());
