import {Router} from 'express';
import {recetaController} from '../controllers/recetaController'
class RecetaRoutes{

   public router: Router = Router();

   constructor(){
    this.config();
   }

   config(): void{
       this.router.get('/',recetaController.index); //Ruta inicial devuelve hellow
   }
}

const recetaRoutes = new RecetaRoutes();
export default recetaRoutes.router; 