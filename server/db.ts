import * as mongoose from 'mongoose';  //import do mongoose//


//criada a classe//
class DataBase{

    private dburl = 'mongodb://127.0.0.1/cpbr-api';  //url do mongoose, com o nome do banco de dados criado(aqui o próprio mongoose vai criar, caso não exista)//
    private dbconnection;

    constructor(){ }

    createConnection() { //ciar a conexão//
        mongoose.connect(this.dburl); //chama a url//
        this.logger(this.dburl) //chamo para criar a conexão//
    }

    logger(url){ //colocar algumas respostas na url//
        this.dbconnection = mongoose.connection; //passando a responsabilidade para uma constante//
        this.createConnection.on('connected', () => { console.log("mongoose está conectado"); } );
        this.createConnection.on('error', (error) => console.error.bind( /* console */ "erro na conexão" + error));
    }

}

export default DataBase;
