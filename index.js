const { exec } = require('child_process');

// Function to call a Python script
function runPythonScript() {
    // Adjust the path according to your Python script's location
    const pythonScriptPath = 'lib/model.py';

    exec(`python ${pythonScriptPath}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(`Python script output: ${stdout}`);
    });
}

// Call the function to run the Python script
runPythonScript();
