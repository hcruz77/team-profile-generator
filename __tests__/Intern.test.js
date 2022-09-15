const Intern = require("../lib/Intern");

test("Can get Intern role using Intern.getRole()", () => {
    const e = new Intern();
    expect(e.getRole()).toBe('Intern');
});

test("Can get Intern school using Intern.getSchool()", () => {
    const school = 'UNC Charlotte'
    const e = new Intern('Heather', 1, 'test@gmail.com', school);
    expect(e.getSchool()).toBe(school);
});

