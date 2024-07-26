const express = require('express');
const path = require('path');

const app = express();

// Server essentials
const cors = require('cors');
const helmet = require('helmet');

// Environment configurations
const dotenv = require('dotenv');
dotenv.config({
    path: path.resolve(__dirname, '../custom/config.env')
});

// Server configurations
app.use(helmet());
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '../public')));

// Router for the server
const router = require('./routes/route');
app.use('/', router);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('server started');
    console.log('port', port);
});
