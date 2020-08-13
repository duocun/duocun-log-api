import express from 'express';
import cors from "cors";
import bodyParser from "body-parser";

import mongoose from "mongoose";
// import {AccountRoute} from './routes/account-route';
// import {ActivityRoute} from './routes/activity-route';
import {config} from './config.js';

const app = express();

const ROUTE_PREFIX = '/api'; // SERVER.ROUTE_PREFIX;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false, limit: "1mb" }));
app.use(bodyParser.json({ limit: "1mb" }));

// app.use(ROUTE_PREFIX + "/accounts", AccountRoute());
// app.use(ROUTE_PREFIX + "/activities", ActivityRoute());

mongoose.connect(config.DB_CONN, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// console.log(me.username);



// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(config.PORT, () => console.log(`API listening at http://localhost:${config.PORT}`))