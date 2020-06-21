import {Router} from 'express';
import {ingredienteController} from '../controllers/ingredienteController'
class IngredienteRoutes{

   public router: Router = Router();

   constructor(){
    this.config();
   }

   config(): void{
       this.router.get('/',ingredienteController.list); 
       this.router.post('/', ingredienteController.create);
       this.router.put('/:id',ingredienteController.update);
       this.router.delete('/:id',ingredienteController.delete);

   }
}

const ingredienteRoutes = new IngredienteRoutes();
export default ingredienteRoutes.router; 