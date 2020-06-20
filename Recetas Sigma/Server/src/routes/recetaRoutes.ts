import {Router} from 'express';
import {recetaController} from '../controllers/recetaController'
class RecetaRoutes{

   public router: Router = Router();

   constructor(){
    this.config();
   }

   config(): void{
       this.router.get('/',recetaController.list); //Ruta inicial
       this.router.get('/:id',recetaController.getOne);
       this.router.post('/', recetaController.create);
       this.router.put('/:id',recetaController.update);
       this.router.delete('/:id',recetaController.delete);

   }
}

const recetaRoutes = new RecetaRoutes();
export default recetaRoutes.router; 