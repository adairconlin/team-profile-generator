function generateIntern(intern) {
    const internHTML = intern.map(({ name, id, email, school }) => {
        return `<div class="card">
                    <h1>Engineer</h1>
                    <div>
                        <h1>Name: ${name}</h1>
                    </div>
                    <div>
                        <h3>ID: ${id}</h3>
                    </div>
                    <div>
                    <h3>Email: <a href="mailto: ${email}">${email}</a></h3>
                    </div>
                    <div>
                        <h3>School: ${school}</h3>
                    </div>
                </div>`;
    });

    return `<section class="role-section">
                ${internHTML.join('')}
            </section>`;
};

function generateEngineer(engineer) {
    const engineerHTML = engineer.map(({ name, id, email, github }) => {
        return `<div class="card">
                    <h1>Engineer</h1>
                    <div>
                        <h1>Name: ${name}</h1>
                    </div>
                    <div>
                        <h3>ID: ${id}</h3>
                    </div>
                    <div>
                        <h3>Email: <a href="mailto: ${email}">${email}</a></h3>
                    </div>
                    <div>
                        <h3><a href="https://github.com/${github}/">GitHub</a></h3>
                    </div>
                </div>`;
    });

    return `<section class="role-section">
                ${engineerHTML.join('')}
            </section>`;
};

function generateManager(manager) {
    const managerHTML = manager.map(({ name, id, email, officeNumber }) => {
        return `<div class="card">
                    <h1>Manager</h1>
                    <div>
                        <h1>Name: ${name}</h1>
                    </div>
                    <div>
                        <h3>ID: ${id}</h3>
                    </div>
                    <div>
                    <h3>Email: <a href="mailto: ${email}">${email}</a></h3>
                    </div>
                    <div>
                        <h3>Office Number: ${officeNumber}</h3>
                    </div>
                </div>`;
    });

    return `<section class="role-section">
                ${managerHTML.join('')}
            </section>
            `;
};

function generatePage(data) {
    return `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <div>
                <h1>Team Profile</h1>
            </div>
        </header>

        <main>
            ${generateManager(data.managers)}
            ${generateEngineer(data.engineers)}
            ${generateIntern(data.interns)}
        </main>
    </body>
</html>
    `
}

module.exports = generatePage;