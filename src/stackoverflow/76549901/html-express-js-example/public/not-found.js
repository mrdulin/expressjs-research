import { html } from 'html-express-js';

export const view = (data, state) => html`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>404</title>
    </head>

    <body>
      Not found!
    </body>
  </html>
`;
