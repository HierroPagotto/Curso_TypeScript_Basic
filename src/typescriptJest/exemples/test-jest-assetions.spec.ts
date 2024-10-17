import { exec } from "child_process";

describe("Primitive values", () => {
  it('should test jest assertions', () => {
    const number = 10;

    expect(number).toBe(10);
    expect(number).toEqual(10);

    expect(number).not.toBeNull();
    expect(null).toBeTruthy();

    expect(number).toBeGreaterThan(9);
    expect(number).toBeLessThan(11);
    expect(number).toBeGreaterThanOrEqual(9);
    expect(number).toBeLessThanOrEqual(11)
  });
});
