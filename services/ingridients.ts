import { Ingredient } from "@prisma/client";
import { $api } from "./instanse";
import { ApiRoutes } from "./constants";

export const getAll = async () => {
  const { data } = await $api.get<Ingredient[]>(ApiRoutes.INGREDIENTS);

  return data;
};
