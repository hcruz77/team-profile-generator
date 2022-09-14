const Manager = require("../lib/Manager");


test("Can get Manager role using Manager.getRole()", () => {
    const e = new Manager();
    expect(e.getRole()).toBe('Manager');
});

test("Can get Manager office number using Manager.getOfficeNumber()", () => {
    const officeNumber = 40
    const e = new Manager('Heather', 40, 'test@gmail.com', officeNumber);
    expect(e.getOfficeNumber()).toBe(officeNumber);
});
