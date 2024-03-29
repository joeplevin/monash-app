const axios = require('axios');
const fs = require('fs');
const { spawn } = require("child_process");
const tmp = require('tmp'); // Import the tmp package

// Function to download a file from a URL
const downloadFileFromURL = async (fileUrl) => {
  return new Promise((resolve, reject) => {
    tmp.file((err, path, fd, cleanupCallback) => {
      if (err) {
        reject(err);
      }

      axios({
        url: fileUrl,
        method: 'GET',
        responseType: 'stream',
      }).then(response => {
        const writer = fs.createWriteStream(path);
        response.data.pipe(writer);
        writer.on('finish', () => resolve({path, cleanupCallback}));
        writer.on('error', reject);
      }).catch(reject);
    });
  });
};

// Modified function to use the parameter for the PDF URL and handle temporary file
export const runPythonScript = async (pdfUrl) => {
  console.log("Downloading PDF from URL...");
  try {
    const {path, cleanupCallback} = await downloadFileFromURL(pdfUrl);
    console.log("PDF downloaded successfully to temporary file:", path);

    console.log("Installing Python dependencies...");
    const install = spawn('pip', ['install', '-r', 'requirements.txt']);

    // Here, you can also listen to the stdout, stderr, and close events on the install process if necessary

    console.log("Running Python script with the downloaded PDF...");
    const pythonScriptPath = "model.py";
    const runScript = spawn('python3', [pythonScriptPath, path]);

    // Listen to the stdout output from the Python script
    runScript.stdout.on('data', (data) => {
      console.log("Python script output:", data.toString());
      try {
        const resumeSkills = JSON.parse(data.toString());
        return resumeSkills;
        console.log(resumeSkills);  // Now you have the resume skills as a JavaScript object
      } catch (error) {
        console.error("Error parsing Python script output:", error);
      }
    });

    // Listen to the stderr output from the Python script
    runScript.stderr.on('data', (data) => {
      console.error(`Python script stderr: ${data}`);
    });

    // Listen for when the Python script process closes
    runScript.on('close', (code) => {
      if (code !== 0) {
        console.error(`Python script process exited with code ${code}`);
      } else {
        console.log("Python script executed successfully.");
      }
      // Cleanup the temporary file
      cleanupCallback();
    });
  } catch (error) {
    console.error("Error:", error);
  }
};
