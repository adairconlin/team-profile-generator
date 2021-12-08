module.exports = templateData => {
    const { employeeData } = templateData;

    return `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <header>
            <div>
                <h1>Employees</h1>
            </div>
        </header>

        <main>
            <div>
                <h1>Manager</h1>
            </div>
            
            <div>
                <h1>Engineer</h1>
            </div>
            
            <div>
                <h1>Intern</h1>
            </div>
        </main>

    </body>
</html>
    `
}