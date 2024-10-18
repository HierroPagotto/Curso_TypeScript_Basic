import { Product } from "./product";

const creatSut = (name: string, price: number): Product => {
  return new Product(name, price);
}

describe('Product', () => {
  afterEach(() => jest.clearAllMocks())

  it('should have properties name and price', () => {
    const sut = creatSut('Camiseta', 49.9);
    expect(sut).toHaveProperty('name', 'Camiseta')
    expect(sut.price).toBeCloseTo(49.9)
  });
});



