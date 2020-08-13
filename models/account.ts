import mongoose from "mongoose";
import { IAccount } from "../controllers/account-controller";

export class Account {
    AccountModel: mongoose.Model<any>;

    constructor(){
        const AccountSchema = new mongoose.Schema({
            username: String,
            type: String
        });
        this.AccountModel = mongoose.model('Account', AccountSchema);
    }

    create(data: IAccount){
        const me = new this.AccountModel(data);
        return me.save();
    }

}