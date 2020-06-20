"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const recetaController_1 = require("../controllers/recetaController");
class RecetaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', recetaController_1.recetaController.index); //Ruta inicial devuelve hellow
    }
}
const recetaRoutes = new RecetaRoutes();
exports.default = recetaRoutes.router;
