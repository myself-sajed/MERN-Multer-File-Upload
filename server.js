// Mongodb Password : Sajed, Username : Sajed

const express = require('express');
const app = express();
const cors = require('cors');
const { json } = require('express');
const jwt = require('jsonwebtoken');
app.use(json())
const mongoose = require('mongoose');
app.use(cors());
const bodyParser = require('body-parser');
const multer = require('multer')
const path = require('path')

// Database Configuration

const URL = 'mongodb+srv://Sajed:Sajed@todolist.vihrg.mongodb.net/TODOList?retryWrites=true&w=majority'

// mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
//     console.log('Database connection successful');
// }).catch(err => console.log('Database connection failed'));



// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// storage engine for multer
const storageEngine = multer.diskStorage({
    destination: './public/uploads/',
    filename: function (req, file, callback) {
        callback(
            null,
            file.fieldname + '-' + Date.now() + path.extname(file.originalname)
        );
    },
});

// file filter for multer
const fileFilter = (req, file, callback) => {
    let pattern = /jpg|png|svg/; // reqex

    if (pattern.test(path.extname(file.originalname))) {
        callback(null, true);
    } else {
        callback('Error: not a valid file');
    }
};

// initialize multer
const upload = multer({
    storage: storageEngine,
    fileFilter: fileFilter,
});

// routing
app.post('/upload', upload.fields([{ name: 'selfDeclaration', maxCount: 1 }, { name: 'aadhar', maxCount: 1 }, { name: 'voter', maxCount: 1 }]), (req, res) => {
    console.log(req.file);
    res.json(req.file).status(200);
});

app.get('/', (req, res) => {
    res.send('Server started successfully')
})




app.listen(4000, function () {
    console.log('Server started successfully at 4000.');
})