import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';
dotenv.config({});

const app = express();

app.get("/home",(req,res)=>{
    res.send("Welcome to home page");

})

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());



// CORS configuration
const corsOptions = {
    origin: 'http://localhost:5173', // Frontend URL
    credentials:true // Allow cookies and credentials
    };
    app.use(cors(corsOptions));

    // Server Port
    const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT,() =>{
    connectDB();
    console.log(`Server is running on port ${PORT}`);
})