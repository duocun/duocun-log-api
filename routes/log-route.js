import express from 'express';
import {LogController} from '../controllers/log-controller.js';


export function LogRoute() {
    const router = express.Router();
    const controller = new LogController();
    router.post('/', (req, res) => { controller.create(req, res); });
    router.get('/', (req, res) => { controller.find(req, res); });
    router.put('/', (req, res) => { controller.put(req, res); });
    return router;
} 