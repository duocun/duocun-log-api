import express from 'express';
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import {LogRoute} from './routes/log-route.js';
import {cfg} from './config.js';

const app = express();

const SVC_PATH = cfg.SVC_PATH;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false, limit: "1mb" }));
app.use(bodyParser.json({ limit: "1mb" }));

app.get("/wx", (req, res) => {
    const auth = new AuthController();
    auth.genWechatToken(req, res);
});

// app.use(SVC_PATH + "/accounts", AccountRoute());
// app.use(SVC_PATH + "/activities", ActivityRoute());

mongoose.connect(cfg.DB_CONN, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use("/", LogRoute());

app.listen(cfg.SVC_PORT, () => {
    console.log(`svc path: ${SVC_PATH}`);
    console.log(`API listening at http://localhost:${cfg.SVC_PORT}`);
})