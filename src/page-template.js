function generateIntern(intern) {
    const internHTML = intern.map(({ name, id, email, school }) => {
        return `<div class="card">
                    <div class="title-section">
                        <h1 class="title myFont medium">Intern</h1>
                    </div>
                    <div class="employee-info">
                        <div>
                            <h1 class="myFont bold">${name}</h1>
                        </div>
                        <div>
                            <h3 class="myFont">ID: ${id}</h3>
                        </div>
                        <div>
                        <h3 class="myFont">Email: <a href="mailto: ${email}">${email}</a></h3>
                        </div>
                        <div>
                            <h3 class="myFont">School: ${school}</h3>
                        </div>
                    </div>
                </div>`;
    });

    return `${internHTML.join('')}`;
};

function generateEngineer(engineer) {
    const engineerHTML = engineer.map(({ name, id, email, github }) => {
        return `<div class="card">
                    <div class="title-section">
                        <h1 class="title myFont medium">Engineer</h1>
                    </div>
                    <div class="employee-info">
                        <div>
                            <h1 class="myFont bold">${name}</h1>
                        </div>
                        <div>
                            <h3 class="myFont">ID: ${id}</h3>
                        </div>
                        <div>
                            <h3 class="myFont">Email: <a href="mailto: ${email}">${email}</a></h3>
                        </div>
                        <div>
                            <h3 class="myFont"><a href="https://github.com/${github}/">GitHub</a></h3>
                        </div>
                    </div>
                </div>`;
    });

    return `${engineerHTML.join('')}`
};

function generateManager(manager) {
    const managerHTML = manager.map(({ name, id, email, officeNumber }) => {
        return `<div class="card">
                    <div class="title-section">
                        <h1 class="title myFont medium">Manager</h1>
                    </div>
                    <div class="employee-info">
                        <div>
                            <h1 class="myFont bold">${name}</h1>
                        </div>
                        <div>
                            <h3 class="myFont">ID: ${id}</h3>
                        </div>
                        <div>
                        <h3 class="myFont">Email: <a href="mailto: ${email}">${email}</a></h3>
                        </div>
                        <div>
                            <h3 class="myFont">Office Number: ${officeNumber}</h3>
                        </div>
                    </div>
                </div>`;
    });

    return `${managerHTML.join('')}`;
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
        <link rel="stylesheet" href="https://use.typekit.net/fwi4mis.css">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <div>
                <h1 class="myFont">Web Development Team</h1>
            </div>
        </header>

        <main>
            ${generateManager(data.managers)}
            ${generateEngineer(data.engineers)}
            ${generateIntern(data.interns)}
        </main>

        <footer>
            <h3 class="myFont">&copy; ${new Date().getFullYear()} by Adair Conlin</h3>
        </footer>
    </body>
</html>
    `
}

module.exports = generatePage;