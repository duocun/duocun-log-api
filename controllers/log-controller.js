
// import http from 'http';
import { Log } from "../models/log.js";
import { Controller } from "./controller.js";

// export interface ILog{
//   sourceId: string;
//   targetId: string;
//   type: string;
//   created: string;
// }

export class LogController extends Controller {

  constructor(){
    const model = new Log();
    super(model);
  }

  // async groupCount(req:Request, res: Response){
  //   const r: any = await this.model.groupCount({target:"$targetId", source: "$sourceId", type: "$type"});

  //   res.setHeader('Content-Type', 'application/json');
  //   res.send({code: 'success', data: r});
  // }
}