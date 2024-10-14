import { OrderStatus } from './interface/order-status';
import { ShoppingCart } from './shopping-cart';
import { Messaging } from './messaging';
import { Persistency } from './persistency';

export class Order {
  private _orderStatus: OrderStatus = 'open';

constructor(
  private readonly cart: ShoppingCart,
  private readonly messaging: Messaging,
  private readonly persistency: Persistency,
){}

get orderStatus(): OrderStatus {
 return this._orderStatus;
  }

  checkout(): void{
    if(this.cart.isEmpty()){
      console.log('Seu carrinho está vazio');
      return;
    }
      this.messaging.sendMessage(`Seu pedido com total de ${this.cart.total()} foi recebido.`);
      this.persistency.saveOrder();
      this.cart.clear();
  }
}
