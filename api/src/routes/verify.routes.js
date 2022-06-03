import { Router } from 'express'
import verify from '../controllers/verify.controller'

const router = Router();

router.get('/:token', verify)

export default router