import { Request, Response } from "express";
import Link from "../link";
import axios from "axios";

export let getLink = (req: Request, res: Response) => {
  let link = Link.find({access_id: req.params.access_id}, (err: any, link: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(link[0].url_redirect);
    }
  });
};

export let addLink = async (req: Request, res: Response) => {

  if(!req.body.url_redirect) return res.send("\"url_redirect\" is required.");

var secret_key = "";

const url: string = 'https://fr.wiktionary.org/w/api.php?origin=*&action=query&format=json&list=random&rnlimit=3&rnnamespace=0';

const response = await axios.get(url);

for (var r in response.data.query.random) {
    secret_key = secret_key + "-" + response.data.query.random[r].title;
}

secret_key = secret_key.substring(1);

  var link = new Link({url_redirect:req.body.url_redirect,access_id:Math.random().toString(36).substring(7),secret_key:secret_key});
  link.save((err: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(link);
    }
  });
};

export let deleteLink = (req: Request, res: Response) => {
  let link = Link.deleteOne({ secret_key: req.params.secret_key }, (err: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send("Successfully Deleted Link");
    }
  });
};
