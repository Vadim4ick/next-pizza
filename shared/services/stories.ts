import { Story, StoryItem } from "@prisma/client";
import { $api } from "./instanse";

export type IStory = Story & {
  items: StoryItem[];
};

export const getAll = async () => {
  const { data } = await $api.get<IStory[]>("/stories");

  return data;
};
