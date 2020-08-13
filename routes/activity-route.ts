import express from 'express';
import {ActivityController} from '../controllers/activity-controller';


export function ActivityRoute() {
    const router = express.Router();
    const controller = new ActivityController();
    router.post('/', (req, res) => { controller.create(req, res); });
    router.get('/', (req, res) => { controller.find(req, res); });
    router.get('/groups', (req, res) => { controller.groupCount(req, res); });
    return router;
} 