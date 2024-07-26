const express = require('express');
const path = require('path');
const { spawn } = require('child_process'); // Import spawn

const app = express();

// Server essentials
const cors = require('cors');
const helmet = require('helmet');

// environment configurations
const dotenv = require('dotenv');
dotenv.config({
    path: path.resolve("../", "custom", "config.env")
});

// server configurations
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router for the server
const router = require('./routes/route');
app.use('/', router);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('server started');
    console.log('port', port);
});

// Assuming email and otp variables are defined somewhere in your code
const pythonProcess = spawn('python3', [
    'server/mailer.py',
    'dart',
    email,
    otp,
    'Sample session'
]);

// Handle the process output and errors
pythonProcess.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

pythonProcess.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

pythonProcess.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});
