import { MealCompositeProtocol } from "../interfaces/meal-composite-protocol";

export abstract class abstractMeal implements MealCompositeProtocol{
  constructor(private name: string, private price: number){}

  getPrice(): number {
      return this.price
  }
}
