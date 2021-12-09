const Intern = require("../lib/Intern");

test("creates an intern object", () => {
    const intern = new Intern("Cookie", 12345, "cookie@email.com");

    expect(intern.name).toBe("Cookie");
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
});

test("gets intern school information", () => {
    const intern = new Intern("Cookie", 12345, "cookie@email.com", "MSUM");

    expect(intern.school).toEqual(expect.any(String));
    expect(intern.getSchool()).toBe(intern.school);
});

test("gets interns role", () => {
    const intern = new Intern("Cookie", 12345, "cookie@email.com");

    expect(intern.getRole()).toBe("Intern");
});

test("checks for interns employee information inherited from parent class", () => {
    const intern = new Intern("Cookie", 12345, "cookie@email.com"); 

    expect(intern.getName()).toBe("Cookie");
    expect(intern.getId()).toEqual(expect.any(Number));
    expect(intern.getEmail()).toEqual(expect.any(String));
});