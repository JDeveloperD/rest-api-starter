/**
 * @fileoverview app.js, configuración de la aplicación express
 * @version     1.0
 * @author      David Sandoval <ing.david1993@gmail.com>
 *
 * History
 * v1.0     -   creación del archivo
 */

import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import router from 'interface'
import { responseHelper } from './utils/response.helper'
import config from 'config'

const app = express()
const logger = config.get('LOGGER')

app.set('view engine', 'html')

app
  .use(helmet())
  .use(morgan(logger)) // http logger
  .use(cors({}))
  .use('/api', express.static('src/public'))
  .use('/uploads', express.static('src/public/uploads'))
  .use(express.json({ limit: '1mb' })) // for parsing application/json
  .use(express.urlencoded({ extended: false })) // for parsing application/x-www-form-urlencoded
  .use(responseHelper)

router(app)

export default app
