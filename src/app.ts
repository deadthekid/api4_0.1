import express,{Application} from "express"

import {Maincontroller} from "./controllers/main.cotroller"

import bodyParser from "body-parser"
import cors from"cors"

class App{
    public app: Application;
    public mainCotroller : Maincontroller;
    constructor(){
        this.app = express();
        this.setConfig();
        this.mainCotroller= new Maincontroller(this.app);
    }
    private setConfig(){
        this.app.use(bodyParser.json({limit:"50mb"}));
        this.app.use(bodyParser.urlencoded({limit:"50mb", extended:true}));
        this.app.use(cors());
    }
}

export default new App().app;