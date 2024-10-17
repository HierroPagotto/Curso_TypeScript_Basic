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
    expect(number).toBeLessThanOrEqual(11);

    expect(number).toBeCloseTo(11);
    expect(number).toBeCloseTo(9);

    expect(number).toBeNull();

    expect(number).toHaveProperty('toString');
  });
});

  describe('Objects', () => {
    it('should test jest assertions with objects', () =>{
      const person = { name: 'Hierro', age: 19};
      const anotherPerson = { ...person};

      expect(person).toEqual(anotherPerson);
      expect(person).toHaveProperty('age');
      expect(person).not.toHaveProperty('lastName');
      expect(person).toHaveProperty('age', 19);

      expect(person.name).toBe('Hierro');
    });
  });
