import express, { json } from 'express'
import cors from 'cors'
import connect from './src/database/mongoMemoryConnection.js'
import morgan from 'morgan';
import postRouter from './src/posts/posts.route.js';
import userRouter from './src/users/users.route.js';


const port = process.env.PORT || 8000

/** middlewares */
const app = express();
app.use(json());
app.use(cors({ origin: '*' }));
app.use(morgan('tiny'))
app.disable('x-powered-by');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
// Mount the route handlers
app.use('/post', postRouter);
app.use('/user', userRouter)

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