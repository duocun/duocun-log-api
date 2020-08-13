import {Request, Response} from "express";
import * as moment from  'moment';
import http from 'http';
import { Activity } from "../models/activity";
import { Controller } from "./controller";

export interface IActivity{
  sourceId: string;
  targetId: string;
  type: string;
  created: string;
}

export class ActivityController extends Controller {

  constructor(){
    const model: Activity = new Activity();
    super(model);
  }

  async groupCount(req:Request, res: Response){
    const r: any = await this.model.groupCount({target:"$targetId", source: "$sourceId", type: "$type"});

    res.setHeader('Content-Type', 'application/json');
    res.send({code: 'success', data: r});
  }
}