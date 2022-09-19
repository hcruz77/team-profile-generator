// PROVIDED BY INSTRUCTOR 2022-09-09
// create the team
const generateTeam = team => {

    // create the manager html
    const generateManager = manager => {
        return `
        <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <div class="card border-primary mb-3 h-100" style="width: 18rem;">
            <div class="card-body">
                <h3 class="card-title">${manager.getName()}</h3>
                <h5 class="card-text">${manager.getRole()}</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
        `;
    };

    // create the html for engineers
    const generateEngineer = engineer => {
        return `
        <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <div class="card border-primary mb-3 h-100" style="width: 18rem;">
            <div class="card-body">
                <h3 class="card-title">${engineer.getName()}</h3>
                <h5 class="card-text">${engineer.getRole()}</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.getId()}</li>
                <li class="list-group-item"> Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
            </ul>
        </div>
    </div>
        `;
    };

    // create the html for interns
    const generateIntern = intern => {
        return `
        <div class="col-12 col-sm-6 col-lg-4 mb-3">
                <div class="card border-primary mb-3 h-100" style="width: 18rem;">
                    <div class="card-body">
                        <h3 class="card-title">${intern.getName()}</h3>
                        <h5 class="card-text">${intern.getRole()}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${intern.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                        <li class="list-group-item">School: ${intern.getSchool()}</li>
                    </ul>
                </div>
            </div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");

}

// export function to generate entire page
module.exports = team => {

    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet">
    </head>
    
    <body>
        <nav class="navbar bg-primary">
            <div class="container-fluid justify-content-around">
                <span class="navbar-brand mb-0 fs-1 text-white">My Team</span>
            </div>
        </nav>
        <main class="container">
            <section class="row justify-content-around mt-5">
            ${generateTeam(team)}
            </section>
        </main>
    </body>
</html>
    `;
};