import { Product } from "@prisma/client";
import { $api } from "./instanse";
import { ApiRoutes } from "./constants";

export const search = async (query: string) => {
  const { data } = await $api.get<Product[]>(ApiRoutes.SEARCH_PRODUCTS, {
    params: { query },
  });

  return data;
};
