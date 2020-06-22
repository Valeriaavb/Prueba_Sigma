import {Request,Response} from 'express';
import db from '../database';

class PasoController{

    public async list (req: Request,res:Response): Promise<any>{
        const { id } = req.params;
        const paso = await db.query('SELECT * FROM paso WHERE id_receta = ? Order by (paso.numero_paso) ASC', [id]);
            return res.json(paso); 
    }

    public async create (req: Request, res: Response): Promise<void>{
        await db.query('INSERT INTO paso set ?', [req.body]);
        res.json({message: 'Pasos guardado'});
    }

    public async update (req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await db.query('UPDATE paso set ? WHERE id_paso = ?', [req.body,id]);
        res.json({message: 'El paso fue actualizada'});
    }

    public async delete (req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await db.query('DELETE FROM paso WHERE id_paso = ?', [id]);
        res.json({message: ':El paso fue eliminado'});
    }

    public async deletePasosCom (req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await db.query('DELETE FROM paso WHERE id_receta = ?', [id]);
        res.json({message: ':El paso fue eliminado'});
    }
}

 export const pasoController = new PasoController();