import express, { json } from 'express'
import cors from 'cors'
import connect from './src/database/mongoMemoryConnection.js'
import morgan from 'morgan';


const port = process.env.port || 8000

/** middlewares */
const app = express();
app.use(json());
app.use(cors());
app.use(morgan('tiny'))
app.disable('x-powered-by');

app.get('/', (req, res) => {
    res.send("hello there! are you listening me>>>")
})




// server starts on valid db connection
connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`app running at http://localhost:${port}`)
        })
    } catch (error) {
        console.error('can not connect to server!')
    }
}).catch(err => console.log('invalid db connection...'))