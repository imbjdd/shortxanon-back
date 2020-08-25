import express, { Request, Response } from 'express';
import bodyParser from "body-parser";

import * as linkController from "./controllers/linkController";

// Express APP config
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("port", process.env.PORT || 3000);

// API Endpoints
app.get("/",(req: Request, res: Response) => res.send("ok"));
app.get("/i/:access_id", linkController.getLink);
app.post("/link", linkController.addLink);
app.delete("/link/:secret_key", linkController.deleteLink);

app.listen(app.get("port"),() => console.log(`http://localhost:${app.get("port")}`));

