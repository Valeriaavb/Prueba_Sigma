"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ingredienteController_1 = require("../controllers/ingredienteController");
class IngredienteRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', ingredienteController_1.ingredienteController.list);
        this.router.post('/', ingredienteController_1.ingredienteController.create);
        this.router.put('/:id', ingredienteController_1.ingredienteController.update);
        this.router.delete('/:id', ingredienteController_1.ingredienteController.delete);
    }
}
const ingredienteRoutes = new IngredienteRoutes();
exports.default = ingredienteRoutes.router;
