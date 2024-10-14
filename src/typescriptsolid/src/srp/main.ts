import { ShoppingCart } from "./shopping-cart";
import { Order } from "./order";
import { Persistency } from "./persistency";
import { Messaging } from './messaging';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);
shoppingCart.addItem({name: 'Camiseta', price: 49.9});
shoppingCart.addItem({name: 'Caderno', price: 9.9});
shoppingCart.addItem({name: 'Lápis', price: 1.59});

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
