import mongoose, { Schema } from "mongoose";
import songRef from "../../models/songRef";

const handler = async(req, res) => {
    if(mongoose.connections[0].readyState){
        const find = await songRef.find();
        res.status(200).json({ message: 'ok', body: find });
    }
    else{
        const connect = await mongoose.connect('mongodb+srv://user:user@cluster0.n9w2yqr.mongodb.net/Chordale?retryWrites=true&w=majority');
        const find = await songRef.find();
        res.status(200).json({ message: 'ok', body: find });
        /*mongoose.connect('mongodb+srv://user:user@cluster0.n9w2yqr.mongodb.net/Chordale?retryWrites=true&w=majority').then(async () => {
            find = await songRef.find();
        });*/
        
    }
   
   
}
export default handler;