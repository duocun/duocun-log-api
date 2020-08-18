
import { Model } from './model.js';

export class Log extends Model{
    constructor(){
        super('Log', {msg: String, created: String});
    }
}