"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.recetaController = void 0;
const database_1 = __importDefault(require("../database"));
class RecetaController {
    index(req, res) {
        database_1.default.query('DESCRIBE receta');
        res.json('receta');
    }
}
exports.recetaController = new RecetaController();
