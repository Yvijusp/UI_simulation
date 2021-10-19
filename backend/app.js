import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
var app = express();
app.use(cors());
app.use(express.json());
app.listen(5000, function () { return console.log('Server is running'); });
