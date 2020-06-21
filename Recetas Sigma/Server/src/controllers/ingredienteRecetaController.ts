import {Request,Response} from 'express';
import db from '../database';

class ingredienteRecetaController{

    public async list (req: Request,res:Response): Promise<any>{
        const { id } = req.params;
        const ingredienteRec = await db.query('Select ir.*, i.nombre from receta r join ingrediente_receta ir on (r.id_receta = ir.id_receta) join ingrediente i on (ir.id_ingrediente = i.id_ingrediente) where r.id_receta = ? ', [id]);
            return res.json(ingredienteRec); 
    }

    public async delete (req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await db.query('DELETE FROM ingrediente_receta WHERE id_receta = ?', [id]);
        res.json();
    }

    public async deleteIng (req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await db.query('DELETE FROM ingrediente_receta WHERE id_ingrediente = ?', [id]);
        res.json();
    }
    public async create (req: Request, res: Response): Promise<void>{
        await db.query('INSERT INTO ingrediente_receta set ?', [req.body]);
        res.json({message: 'Ingredients guardados en receta'});
    }

    public async update (req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await db.query('UPDATE ingrediente_receta set ? WHERE id_receta = ?', [req.body,id]);
        res.json({message: 'Los ingredients de la receta fueron actualizados'});
    }  

}

 export const ingredienteReceta = new ingredienteRecetaController();