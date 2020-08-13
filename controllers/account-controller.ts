import express, {Request, Response} from "express";
import http from 'http';
import { Account } from "../models/account";

// import { DB } from "../db";

// import {AccountController} from "../controllers/account-controller";
// import { parseQuery } from "../middlewares/parseQuery";
export interface IAccount{
  username: string;
  type: string;
}
export class AccountController {
  model: Account = new Account();

  contructor(){
    // this.model 
  }

  async create(req:Request, res: Response){
    const account: any = req.body;
    const r: any = await this.model.create(account);
    await this.putEl(account);

    res.setHeader('Content-Type', 'application/json');
    res.send({code: 'success'});
  }

// curl -X PUT "localhost:9200/customer/_doc/1?pretty" -H 'Content-Type: application/json' -d'
// {
//   "name": "John Doe"
// }
// '

  putEl(account: IAccount){
    const data = JSON.stringify(account);
    const options = {
      hostname: 'localhost',
      port: 9200,
      path: '/account/_doc/1',
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
      }
    }
    
    return new Promise((resolve, reject) => {
      const req = http.request(options, (res) => {
        let s = '';
        console.log(`statusCode: ${res.statusCode}`)
      
        res.on('data', (d) => {
          process.stdout.write(d);
          s += d;
        })

        res.on('end', () => {
          const r = JSON.parse(s);
          resolve(r);
        });
      })

      req.on('error', (error) => {
        console.error(error)
        resolve();
      })
      
      req.write(data)
      req.end()
    });
  }
}