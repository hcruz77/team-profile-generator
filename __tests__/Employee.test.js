const Employee = require("../lib/Employee");

test("Can get employee name using employee.getName", () => {
    const name = 'Heather';
    const e = new Employee(name);
    expect(e.getName()).toBe(name);
});

test("Can get employee id using employee.getId", () => {
    const id = 1;
    const e = new Employee('Heather', id);
    expect(e.getId()).toBe(id);
});

test("Can get employee email using employee.getEmail", () => {
    const email = 'test@gmail.com';
    const e = new Employee('Heather', 1, 'test@gmail.com');
    expect(e.getEmail()).toBe(email);
});
test("Can get employee role using employee.getRole", () => {
    const role = "Employee";
    const e = new Employee('Heather', role);
    expect(e.getRole()).toBe(role);
});