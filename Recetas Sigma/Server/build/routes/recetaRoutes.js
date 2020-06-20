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
        this.router.get('/', recetaController_1.recetaController.list); //Ruta inicial
        this.router.get('/:id', recetaController_1.recetaController.getOne);
        this.router.post('/', recetaController_1.recetaController.create);
        this.router.put('/:id', recetaController_1.recetaController.update);
        this.router.delete('/:id', recetaController_1.recetaController.delete);
    }
}
const recetaRoutes = new RecetaRoutes();
exports.default = recetaRoutes.router;
