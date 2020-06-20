"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.recetaController = void 0;
const database_1 = __importDefault(require("../database"));
class RecetaController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const receta = yield database_1.default.query('SELECT * FROM receta');
            res.json(receta);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const receta = yield database_1.default.query('SELECT * FROM receta WHERE id_receta = ?', [id]);
            if (receta.length > 0) {
                return res.json(receta[0]); //Muestro solo la receta
            }
            res.status(404).json({ text: 'Receta no existe' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO receta set ?', [req.body]);
            res.json({ message: 'Receta guardada' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE receta set ? WHERE id_receta = ?', [req.body, id]);
            res.json({ message: 'La receta fue actualizada' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM receta WHERE id_receta = ?', [id]);
            res.json({ message: ':La receta fue eliminada' });
        });
    }
}
exports.recetaController = new RecetaController();
