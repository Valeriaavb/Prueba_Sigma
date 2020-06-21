import {Router} from 'express';
import {ingredienteReceta} from '../controllers/ingredienteRecetaController'

class IngredienteRecetaRoutes{

   public router: Router = Router();

   constructor(){
    this.config();
   }

   config(): void{
       this.router.get('/:id',ingredienteReceta.list);
       this.router.post('/', ingredienteReceta.create);
      this.router.put('/:id',ingredienteReceta.update);
       this.router.delete('/:id',ingredienteReceta.delete);
       this.router.delete('/ing/:id',ingredienteReceta.deleteIng);

   }
}

const ingredienteRecetaRoutes = new IngredienteRecetaRoutes();
export default ingredienteRecetaRoutes.router; 