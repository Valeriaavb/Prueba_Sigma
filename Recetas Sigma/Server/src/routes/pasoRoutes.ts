import {Router} from 'express';
import {pasoController} from '../controllers/pasoController'
class PasoRoutes{

   public router: Router = Router();

   constructor(){
    this.config();
   }

   config(): void{
       this.router.get('/:id',pasoController.list);
       this.router.post('/', pasoController.create);
       this.router.put('/:id',pasoController.update);
       this.router.delete('/:id',pasoController.delete);

   }
}

const pasoRoutes = new PasoRoutes();
export default pasoRoutes.router; 