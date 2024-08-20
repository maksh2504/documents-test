import { rest } from 'msw';
import { careerGoal, documents } from './mock';

export const handlers = [
  rest.get(
    `https://raw.githubusercontent.com/Phangster/Accredify-FE-Interview-Endpoint/main/goals.json`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(careerGoal));
    },
  ),
  rest.get(
    `https://raw.githubusercontent.com/Phangster/Accredify-FE-Interview-Endpoint/main/documents.json`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(documents));
    },
  ),
];
