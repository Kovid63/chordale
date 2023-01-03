// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import mongoose, { Schema } from "mongoose";
import songRef from "../../models/songRef";

const handler = (req, res) => {

  mongoose.connect('mongodb+srv://user:user@cluster0.n9w2yqr.mongodb.net/Chordale?retryWrites=true&w=majority').then(() =>  {
    const d = new songRef({
      title: req.body.title,
      artwork_cid: req.body.artwork_cid,
      cid: req.body.cid,
      artists: req.body.artists
    });
    d.save();
  });
  res.status(200).json({ message: 'ok'});
}
export default handler;
