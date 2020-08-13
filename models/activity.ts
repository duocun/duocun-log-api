
import { Model } from './model';

export class Activity extends Model{
    constructor(){
        super({
                type: String,
                sourceId: String,
                targetId: String,
                created: String
            }, 'Activity');
    }

}