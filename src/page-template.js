function generateIntern(intern) {
    return `
<div>
    <h1>Name:</h1>
    <p>${intern[0].name}</p>
</div>
    `;
};

function generateEngineer(engineer) {
    const engineerHTML = engineer.map(({ name, id, email, github }) => {
        return `<div class="card">
                    <h1>Engineer</h1>
                    <div>
                        <h1>Name:</h1>
                        <p>${name}</p>
                    </div>
                    <div>
                        <h1>ID:</h1>
                        <p>${id}</p>
                    </div>
                    <div>
                        <h1>Email:</h1>
                        <p>${email}</p>
                    </div>
                    <div>
                        <h1>Github Link:</h1>
                        <p>https://github.com/${github}/</p>
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
                        <h1>Name:</h1>
                        <p>${name}</p>
                    </div>
                    <div>
                        <h1>ID:</h1>
                        <p>${id}</p>
                    </div>
                    <div>
                        <h1>Email:</h1>
                        <p>${email}</p>
                    </div>
                    <div>
                        <h1>Office Number:</h1>
                        <p>${officeNumber}</p>
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
        </main>
    </body>
</html>
    `
}

module.exports = generatePage;