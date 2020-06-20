"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const recetaRoutes_1 = __importDefault(require("./routes/recetaRoutes"));
class Server {
    constructor() {
        this.app = express_1.default(); //inicialización  de express
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev')); //ver los pedidos de ruta y cuanto tarda
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json()); //Entender los Json de Angular
        this.app.use(express_1.default.urlencoded({ extended: false })); //enviar desde un formulario HTML 
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/recetas', recetaRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start(); //Inicia el servidor
