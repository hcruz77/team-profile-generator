const Engineer = require("../lib/Engineer");

test("Can get Engineer role using Engineer.getRole()", () => {
    const e = new Engineer();
    expect(e.getRole()).toBe('Engineer');
});

test("Can get Engineer github using Engineer.getGithub()", () => {
    const github = 'githubuser'
    const e = new Engineer('Heather', 1, 'test@gmail.com', github);
    expect(e.getGithub()).toBe(github);
});

// Refer to engineer test in order to build manager and intern tests
