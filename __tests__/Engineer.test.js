const Engineer = require("../lib/Engineer");

test("creates an engineer object", () => {
    const engineer = new Engineer("Ryan", 1234, "ryan@email.com");

    expect(engineer.name).toBe("Ryan");
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.getGithub()).toEqual(expect.any(String));
    expect(engineer.getRole()).toBe("Engineer");
    console.log(engineer);
});