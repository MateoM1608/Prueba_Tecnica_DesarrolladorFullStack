import express from 'express'
import morgan from 'morgan'
import authRoute from './routes/auth.routes'
import verify from './routes/verify.routes'

const app = express()


app.use(morgan('dev'))
app.use(express.json())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });


app.use('/auth', authRoute)

app.use('/verify', verify)


export default app