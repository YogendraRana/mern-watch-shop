const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser')
const cors = require('cors');  

//routes
const authRoutes = require('./routes/authRoutes');

const app = express();
dotenv.config({path: './config.env'});

//variables
const PORT = 8000;
const DATABASE = process.env.DATABASE

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

//database and server connection
mongoose.connect(DATABASE, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Server listening on ${PORT}`)))
.catch(err => console.log(err))

//routes
app.use(authRoutes);