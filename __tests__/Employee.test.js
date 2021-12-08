const Employee = require("../lib/Employee");

test("creates an employee object", () => {
    const employee = new Employee("Adair", 1234, "adair@email.com");

    expect(employee.name).toBe("Adair");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("gets employee information", () => {
    const employee = new Employee("Adair", 1234, "adair@email.com");

    expect(employee.getName()).toBe("Adair");
    expect(employee.getId()).toEqual(expect.any(Number));
    expect(employee.getEmail()).toEqual(expect.any(String));
    expect(employee.getRole()).toBe("Employee");
});
