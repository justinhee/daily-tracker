import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();
const app = express();
const port = process.env.PORT | 5002;

import authRoute from './routes/auth.js';
import userRoute from './routes/users.js';
import entryRoute from './routes/entries.js';

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log("Connected to MongoDB")).catch((err)=>console.log(err));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/entries", entryRoute);

app.use("/", (req, res)=> {
    console.log("poop");
})

app.listen(port, () => {
    console.log(`Backend is running at http://localhost:${port}`)
})