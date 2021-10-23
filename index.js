import express from 'express';
import routes from './src/routes/crmRoutes'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

const app = express();
const PORT = 3000;

//Mongoose Connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//Body Parser Setup
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) => {
    res.send(`Node and Express Server running on ${PORT}`)
})

app.listen(PORT, () => {
    console.log(`Your server is running on ${PORT}`)
})