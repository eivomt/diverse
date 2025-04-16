const express = require('express');
const { spawn } = require('child_process');
 
const app = express();
const port = 3000;

function runPythonScript(scriptPath, args, callback) {
    const pythonProcess = spawn('python', [scriptPath].concat(args));
 
    let data = '';
    pythonProcess.stdout.on('data', (chunk) => {
        data += chunk.toString(); // Collect data from Python script
    });
 
    pythonProcess.stderr.on('data', (error) => {
        console.error(`stderr: ${error}`);
    });
 
    pythonProcess.on('close', (code) => {
        if (code !== 0) {
            console.log(`Python script exited with code ${code}`);
            callback(`Error: Script exited with code ${code}`, null);
        } else {
            console.log('Python script executed successfully');
            callback(null, data);
        }
    });
}

app.get('/factorial/:number', (req, res) => {
    const number = req.params.number;
    runPythonScript('compute.py', [number], (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(`Factorial of ${number} is ${result}`);
        }
    });
});