import express, {Request, response, Response} from 'express'
import {
    agradecimientos,
    apartmentsRender,
    clubRender,
    demohandler,
    getMain,
    landingCreateOne,
    landingGetMany,
    leadCreateOne,
    leadGetMany
} from '../handlers'

const router = express.Router()

router.get('/', getMain)
router.get('/agradecimientos', agradecimientos )
router.get('/agendado', agradecimientos )
/** Landing pages endpoints */
router.get('/landing', landingGetMany)
router.post('/landing', landingCreateOne)
router.get('/miruta', demohandler)

/** 
 * router.get('/agradecimientos/', (req: Request, res: Response) => {
    res.render('home/agradecimientos')
})

/** Leads endpoint */
router.get('/lead', leadGetMany)
router.post('/lead', leadCreateOne)
router.get('/admin/leads', (req: Request, res: Response) => res.render('admin/leads'))

/** Tours */
router.get('/tour-clubikonia', clubRender)
router.get('/tour-apartamentos', apartmentsRender)

export default router