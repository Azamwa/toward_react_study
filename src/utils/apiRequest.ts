import { PostType } from "./../type";
import { openIndexedDB } from "./indexedDB";

export const fetchPost = async (): Promise<PostType[]> => {
  const posts = await openIndexedDB<PostType[]>("GET");
  return posts ?? [];
};
