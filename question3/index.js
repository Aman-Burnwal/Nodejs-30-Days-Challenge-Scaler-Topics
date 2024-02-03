const { exec } = require('child_process');

function executeCommand(command) {

    const childProcess = exec(command, (error, stdout, stderr) => {
        
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }

        // Check for stderr (standard error)
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }

        // Print the output of the command (stdout)
        console.log(`stdout: ${stdout}`);
    });

}


executeCommand('echo "Hello, Node.js!"');
