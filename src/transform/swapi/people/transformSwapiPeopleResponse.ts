import { People } from "@slicing/types";
import { transformAllFieldNamesToCamel } from "field-caser";

export const transformSwapiPeopleResponse = (response: any) => <People>transformAllFieldNamesToCamel(response)