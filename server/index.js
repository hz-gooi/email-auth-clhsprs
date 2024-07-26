const express = require('express');
const path = require('path');


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

app.listen(port, ()=>{
    console.log('server started');
    console.log('port', port);
});

const pythonProcess = spawn('python3', [
    'server/mailer.py',
    'dart',
    email,
    otp,
    'Sample session'
]);
