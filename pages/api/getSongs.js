import mongoose, { Schema } from "mongoose";
import songRef from "../../models/songRef";

const handler = (req, res) => {
    mongoose.connect('mongodb+srv://user:user@cluster0.n9w2yqr.mongodb.net/Chordale?retryWrites=true&w=majority').then(async () => {

        const f = await songRef.find();
        res.status(200).json({ message: 'ok', body: f });
    });
}
export default handler;