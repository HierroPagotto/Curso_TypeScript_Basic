import { Discount,
  FiftyPercentDiscount,
  NoDiscount,
  TenPercentDiscount
} from "./discount";

const creatSut = (className: new () => Discount): Discount => {
  return new className();
}

describe('Discount', () => {
  afterEach(() => jest.clearAllMocks())

  it('should have no discount', () => {
    const sut = creatSut(NoDiscount);
    expect(sut.calculate(10.99)).toBe(10.99);
  });

  it('should apply 50% discount on price', () => {
    const sut = creatSut(FiftyPercentDiscount);
    expect(sut.calculate(150.5)).toBeCloseTo(75.25);
  });

  it('should apply 10% discount on price', () => {
    const sut = creatSut(TenPercentDiscount);
    expect(sut.calculate(10)).toBeCloseTo(9);
  });
});



