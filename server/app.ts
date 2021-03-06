import * as express from 'express';
import * as bodyparser from 'body-parser'

import database from './db';

import controller from './controller';

class App{
    public app: express.Application;
    private database: database;
    private controller: controller;

    constructor(){
        this.app = express();
        this.middleware();
        this.database = new database();
        this.database.createConnection();
        this.controller = new controller();

        this.routes();
        
    }

    middleware(){
        this.app.use(bodyparser.json());
        this.app.use(bodyparser.urlencoded({extended: true}));

    }

    routes(){
        this.app.route('/').get(  (req, res)   => res.status(200).json({"result": "Hello world"}) )
        this.app.route('/api/crushs').get((req, res) => this.controller.select(req, res))
        this.app.route('/api/crushs/:id').get((req, res) => this.controller.selectOne(req, res))
        this.app.route('/api/crushs/:id').delete((req, res) => this.controller.delete(req, res))
        this.app.route('/api/crushs/:id').put((req, res) => this.controller.updateCrush(req, res))//Para o put ter as suas funcionalidades deve baixar o "npm install body-parse" e em seguida "npm install @types/body-parser -D"
        this.app.route('/api/crushs/:id').post((req, res) => this.controller.insert(req, res))
    }
}

export default new App();
