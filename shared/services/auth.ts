import { User } from "@prisma/client";
import { $api } from "./instanse";

export const getMe = async () => {
  const { data } = await $api.get<User>("/auth/me");

  return data;
};
