import {Response, Request, NextFunction} from 'express'

// Custom error
interface HttpErrors {
  status: number;
  message: string;
}

export interface CustomResponse extends Response {
  respondCreated?: ({}) => this;
}
