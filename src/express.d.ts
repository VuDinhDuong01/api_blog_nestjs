/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Request } from 'express'

declare global {
  namespace Express {
    interface Request {
      user?: any
    }
  }
}
