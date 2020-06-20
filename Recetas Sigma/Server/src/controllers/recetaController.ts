import {Request,Response} from 'express';
import db from '../database';

class RecetaController{
   public index  (req: Request,res:Response){
        db.query('DESCRIBE receta');
        res.json('receta');

    } 
}

 export const recetaController = new RecetaController();