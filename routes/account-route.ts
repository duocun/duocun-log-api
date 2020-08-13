import express from 'express';
import {AccountController} from '../controllers/account-controller';
// const express = require('express')
// const AccountController = require('./controllers/account-controller').AccountController;



export function AccountRoute() {
    const router = express.Router();
    const controller = new AccountController();
    router.post('/', (req, res) => { controller.create(req, res); });
    // router.get('/', (req, res) => { controller.create(req, res); });
    return router;
} 
