"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ingredienteRecetaController_1 = require("../controllers/ingredienteRecetaController");
class IngredienteRecetaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:id', ingredienteRecetaController_1.ingredienteReceta.list);
        this.router.post('/', ingredienteRecetaController_1.ingredienteReceta.create);
        this.router.put('/:id', ingredienteRecetaController_1.ingredienteReceta.update);
        this.router.delete('/:id', ingredienteRecetaController_1.ingredienteReceta.delete);
        this.router.delete('/ing/:id', ingredienteRecetaController_1.ingredienteReceta.deleteIng);
    }
}
const ingredienteRecetaRoutes = new IngredienteRecetaRoutes();
exports.default = ingredienteRecetaRoutes.router;
