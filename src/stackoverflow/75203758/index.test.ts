import { expect } from "chai";
import {Request, Response} from 'express';
import httpMocks from 'node-mocks-http';

const isAuth = (req: Request, res: Response) => {
  // your code under test
}

describe("Authorization middleware", () => {
  it("Fails when no authorization header", () => {
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse()
    expect(isAuth(req, res));
  });
});