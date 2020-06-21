"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pasoController_1 = require("../controllers/pasoController");
class PasoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:id', pasoController_1.pasoController.list);
        this.router.post('/', pasoController_1.pasoController.create);
        this.router.put('/:id', pasoController_1.pasoController.update);
        this.router.delete('/:id', pasoController_1.pasoController.delete);
    }
}
const pasoRoutes = new PasoRoutes();
exports.default = pasoRoutes.router;
