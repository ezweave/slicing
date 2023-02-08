import { writeFileSync } from 'fs';

import LarsOwenJSON from '@slicing/__fixtures__/swapi/people/lars-owen.json';

import { getFromSWAPI } from './getFromSWAPI';

describe(getFromSWAPI, () => {
  it('gets a request from SWAPI', async () => {
    const getter = jest.fn().mockResolvedValue({
      data: LarsOwenJSON,
    });
    const getPeople =
      getFromSWAPI('https://swapi.dev/api/', getter)(`people`);
    const response = await getPeople(6);
    expect(response.data).toEqual(LarsOwenJSON);
    expect(getter).toHaveBeenCalledTimes(1);
    expect(getter.mock.calls[0]).toMatchSnapshot();
  });
});
