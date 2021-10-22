import express, { Response } from 'express';

interface Product {}

// export interface ProductListResponse extends Response {
//   render(view: string, options?: { products: Product[] }): void;
//   render(view: string, options?: object, callback?: (err: Error, html: string) => void): void;
//   render(view: string, callback?: (err: Error, html: string) => void): void;
// }

export interface ProductListResponse {
  render(view: string, options?: { products: Product[] }): void;
}

const app = express();

app.get('/', (req, res: ProductListResponse & Response) => {
  res.render('index', { products: [] });
});

// interface Person {}
// interface PersonService {
//   getBy(id: string, options: object): Person;
//   getBy(id: string, callback?: (err: Error) => void): Person;
// }

// interface GoodPersonService extends PersonService {
//   getBy(id: string, options: { ids: string[] }): Person;
//   getBy(id: string, options: object): Person;
//   getBy(id: string, callback?: (err: Error) => void): Person;
// }
