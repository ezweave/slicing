import { APIGatewayProxyHandler } from 'aws-lambda';
import { StatusCodes } from 'http-status-codes';

export const peopleHandler: APIGatewayProxyHandler = async (
  _event,
  _context,
) => ({
  statusCode: StatusCodes.OK,
  body: JSON.stringify({
    hello: 'World',
  }),
});
