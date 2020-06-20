import {Request,Response} from 'express';
import db from '../database';

class RecetaController{
   public async list  (req: Request,res:Response){
      const receta = await db.query('SELECT * FROM receta');
      res.json(receta);
    } 
    public async getOne (req: Request,res:Response): Promise<any>{
        const { id } = req.params;
        const receta = await db.query('SELECT * FROM receta WHERE id_receta = ?', [id]);
        if(receta.length > 0){
            return res.json(receta[0]); //Muestro solo la receta
        }
        res.status(404).json({text: 'Receta no existe'});
    }

    public async create (req: Request, res: Response): Promise<void>{
        await db.query('INSERT INTO receta set ?', [req.body]);
        res.json({message: 'Receta guardada'});
    }

    public async update (req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await db.query('UPDATE receta set ? WHERE id_receta = ?', [req.body,id]);
        res.json({message: 'La receta fue actualizada'});
    }

    public async delete (req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await db.query('DELETE FROM receta WHERE id_receta = ?', [id]);
        res.json({message: ':La receta fue eliminada'});
    }
}

 export const recetaController = new RecetaController();