import mongoose = require("mongoose");
import * as dotenv from 'dotenv';

dotenv.config();

const uri: string = process.env.mongodb_url!;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err: any) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Connected to mongoDB.");
  }
});

export interface ILink extends mongoose.Document {
  url_redirect: string;
  access_id: string;
  secret_key: string;
}

export const LinkSchema = new mongoose.Schema({
  url_redirect: { type: String, required: true },
  access_id: { type: String, required: true },
  secret_key: { type: String, required: true }
});

const Link = mongoose.model<ILink>("Link", LinkSchema);
export default Link;
