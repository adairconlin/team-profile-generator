const Manager = require("../lib/Manager");

test("creates a manager object", () => {
    const manager = new Manager("Boopers", 4321, "boopers@email.com");

    expect(manager.name).toBe("Boopers");
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
});

test("gets managers office number", () => {
    const manager = new Manager("Boopers", 4321, "boopers@email.com", 36);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("get managers role", () => {
    const manager = new Manager("Boopers", 4321, "boopers@email.com"); 

    expect(manager.getRole()).toBe("Manager");
});

test("checks for managers employee information inherited from parent class", () => {
    const manager = new Manager("Boopers", 4321, "boopers@email.com"); 

    expect(manager.getName()).toBe("Boopers");
    expect(manager.getId()).toEqual(expect.any(Number));
    expect(manager.getEmail()).toEqual(expect.any(String));
});

