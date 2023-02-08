import { People } from "@slicing/types"
import { flow, range } from "lodash"

interface GetNPeople {
  (n: number): People
}

export const getNPeople = flow(
  range,

)