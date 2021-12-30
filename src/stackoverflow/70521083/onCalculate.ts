import * as functions from 'firebase-functions';

export const onCalculate = functions.https.onRequest((request, response) => {
  const param1 = request.body.param1;
  const param2 = request.body.param2;
  response.status(200).send(calculate(param1 as number, param2 as number));
});

/**
 * Function to calculate two numbers
 * @param {number} param1
 * @param {number} param2
 * @return {number}
 */
function calculate(param1: number, param2: number): number {
  return param1 + param2;
}
