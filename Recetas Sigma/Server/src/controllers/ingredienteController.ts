import {Request,Response} from 'express';
import db from '../database';

class IngredienteController{

    public async list  (req: Request,res:Response){
        const ingrediente = await db.query('SELECT * FROM ingrediente');
        res.json(ingrediente);
      } 

    public async create (req: Request, res: Response): Promise<void>{
        await db.query('INSERT INTO ingrediente set ?', [req.body]);
        res.json({message: 'Ingrediente guardado'});
    }

    public async update (req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await db.query('UPDATE ingrediente set ? WHERE id_ingrediente = ?', [req.body,id]);
        res.json({message: 'El ingrediente fue actualizada'});
    }

    public async delete (req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await db.query('DELETE FROM ingrediente WHERE id_ingrediente = ?', [id]);
        res.json({message: ':El ingrediente fue eliminado'});
    }

}

 export const ingredienteController = new IngredienteController();