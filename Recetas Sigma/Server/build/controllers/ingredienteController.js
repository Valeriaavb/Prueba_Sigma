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
exports.ingredienteController = void 0;
const database_1 = __importDefault(require("../database"));
class IngredienteController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ingrediente = yield database_1.default.query('SELECT * FROM ingrediente');
            res.json(ingrediente);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO ingrediente set ?', [req.body]);
            res.json({ message: 'Ingrediente guardado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE ingrediente set ? WHERE id_ingrediente = ?', [req.body, id]);
            res.json({ message: 'El ingrediente fue actualizada' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM ingrediente WHERE id_ingrediente = ?', [id]);
            res.json({ message: ':El ingrediente fue eliminado' });
        });
    }
}
exports.ingredienteController = new IngredienteController();
