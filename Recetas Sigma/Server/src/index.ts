import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import recetaRoutes from './routes/recetaRoutes';
import pasoRoutes from './routes/pasoRoutes';
import ingredienteRecetaRoutes from './routes/ingredienteRecetaRoutes';
import ingredienteRoutes from './routes/ingredienteRoutes';

class Server {

    public app: Application;

    constructor(){
        this.app = express(); //inicialización  de express
        this.config();
        this.routes();
    }

    config():void{ //configurar el puerto
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev')); //ver los pedidos de ruta y cuanto tarda
        this.app.use(cors());
        this.app.use(express.json());  //Entender los Json de Angular
        this.app.use(express.urlencoded({extended:false})); //enviar desde un formulario HTML 
    }

    routes() : void{
        this.app.use('/',indexRoutes);
        this.app.use('/api/recetas',recetaRoutes);
        this.app.use('/api/pasos',pasoRoutes);
        this.app.use('/api/ingredienteReceta',ingredienteRecetaRoutes);
        this.app.use('/api/ingrediente',ingredienteRoutes);
    }

    start(): void {  //iniciar el servidor
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ', this.app.get('port'));
        });
    }
}

const server = new Server ();
server.start(); //Inicia el servidor