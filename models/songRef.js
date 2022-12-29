import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
    title: {type: String, required: true, unique: true},
    artists: {type: String, required: true},
    artwork_cid: {type: String, required: true},
    cid: {type: String, required: true},
}, {timestamps: true});
mongoose.models = {};

export default mongoose.model('data', dataSchema);