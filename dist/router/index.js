"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const handlers_1 = require("../handlers");
const router = express_1.default.Router();
router.get('/', handlers_1.getMain);
router.get('/agradecimientos/', handlers_1.agradecimientos);
router.get('/agendado/', handlers_1.agradecimientos);
/** Landing pages endpoints */
router.get('/landing', handlers_1.landingGetMany);
router.post('/landing', handlers_1.landingCreateOne);
router.get('/miruta', handlers_1.demohandler);
/**
 * router.get('/agradecimientos/', (req: Request, res: Response) => {
    res.render('home/agradecimientos')
})

/** Leads endpoint */
router.get('/lead', handlers_1.leadGetMany);
router.post('/lead', handlers_1.leadCreateOne);
router.get('/admin/leads', (req, res) => res.render('admin/leads'));
/** Tours */
router.get('/tour-clubikonia', handlers_1.clubRender);
router.get('/tour-apartamentos', handlers_1.apartmentsRender);
exports.default = router;
