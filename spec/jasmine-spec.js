// Exemplos de Matchers do jasmine

//ToBe

var a = {nome: 'Rafael'};
var b = {nome: 'Augusto'};

expect(a).toEqual(b);
expect(a).toBe(b);
expect(a).toBe(a);

// toBeTruthy e toBeFalsy

expect("Rafael").toBeTruthy();
expect(0).toBeFalsy();

// Not

expect(false).not.toBeTruthy();

// ToContain

expect([1,2,3]).toContain(2);
expect("Rafael").toContain("fa");
expect("Augusto").not.toContain("gu");

// toBeDefined toBeUndefined

var obj = {};
expect(obj.name).toBeUndefined();
obj.name = "Rafael";
expect(obj.name).toBeUndefined();

// toBeNull

expect(null).toBeNull();

// toBeNan

expect(10).not.toBeNaN();
expect(0 / 0).toBeNaN();

// toBeGreaterThan toBeLessThan

expect(10).toBeGreaterThan(1);
expect(1).toBeLessThan(10);
expect('a').toBeLessThan('z');

// toBeCloseTo

expect(20.3).toBeCloseTo(20.32, 1);

// RegExp

expect("Rafael").toMatch(/fa/);

// toThrow

var myFunction = function(){
    throw new Error();
}
expect(myFunction).toThrow();