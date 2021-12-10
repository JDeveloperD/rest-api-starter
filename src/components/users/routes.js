// @ts-check
import { Router } from 'express'
import * as UserController from './controller'

const router = Router()

router.get('/', UserController.getAllUsers)

export default router
