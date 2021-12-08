function generateIntern(intern) {
    return `
<div>
    <h1>Name:</h1>
    <p>${intern[0].name}</p>
</div>
    `;
};

function generateEngineer(engineer) {
    return `
    <div>
        <h1>Name:</h1>
        <p>${engineer[0].name}</p>
    </div>
        `;
};

function generateManager(manager) {
    return `
    <div>
        <h1>Name:</h1>
        <p>${manager[0].name}</p>
    </div>
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