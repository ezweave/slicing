import { getFromSWAPI, Getter } from "@slicing/io/swapi"
import { transformSwapiPeopleResponse } from "@slicing/transform/swapi";

export const getPeople = async (index: number, getFn: Getter = getFromSWAPI()) => {
  const response = await getFn('people')(index);
  return transformSwapiPeopleResponse(response.data);
}