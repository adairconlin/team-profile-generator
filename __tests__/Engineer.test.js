const Engineer = require("../lib/Engineer");

test("creates an engineer object", () => {
    const engineer = new Engineer("Ryan", 1234, "ryan@email.com");

    expect(engineer.name).toBe("Ryan");
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
});

test("gets engineers github username", () => {
    const engineer = new Engineer("Ryan", 1234, "ryan@email.com");

    expect(engineer.getGithub()).toEqual(expect.any(String));
});

test("gets engineers current role", () => {
    const engineer = new Engineer("Ryan", 123, "ryan@email.com");
    
    expect(engineer.getRole()).toBe("Engineer");
});

test("checks for engineers employee information inherited from parent class", () => {
    const engineer = new Engineer("Ryan", 123, "ryan@email.com");

    expect(engineer.getName()).toBe("Ryan");
    expect(engineer.getId()).toEqual(expect.any(Number));
    expect(engineer.getEmail()).toEqual(expect.any(String));
});