import express from 'express';
import dotenv from 'dotenv'
import validation from './Middleware/ValidationMiddleware.js';
import userSchema from './Validations/userValidation.js';
const app = express()
dotenv.config();
app.use(express.json())
// app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.json({ message: "hello" })
})

app.post('/user', validation(userSchema), (req, res) => {
    res.status(200).send(req.body)
    console.log(req.body);
})

const port = process.env.port;
app.listen(port, () => {
    console.log(`running ${port}`);
})