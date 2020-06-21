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
exports.ingredienteReceta = void 0;
const database_1 = __importDefault(require("../database"));
class ingredienteRecetaController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const ingredienteRec = yield database_1.default.query('Select ir.*, i.nombre from receta r join ingrediente_receta ir on (r.id_receta = ir.id_receta) join ingrediente i on (ir.id_ingrediente = i.id_ingrediente) where r.id_receta = ? ', [id]);
            return res.json(ingredienteRec);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM ingrediente_receta WHERE id_receta = ?', [id]);
            res.json();
        });
    }
    deleteIng(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM ingrediente_receta WHERE id_ingrediente = ?', [id]);
            res.json();
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO ingrediente_receta set ?', [req.body]);
            res.json({ message: 'Ingredients guardados en receta' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE ingrediente_receta set ? WHERE id_receta = ?', [req.body, id]);
            res.json({ message: 'Los ingredients de la receta fueron actualizados' });
        });
    }
}
exports.ingredienteReceta = new ingredienteRecetaController();
