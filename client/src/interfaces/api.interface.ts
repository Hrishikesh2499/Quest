export type TGet = string[]
export type TPost = {
  urls: string[];
  data: object;
  headers?: object;
};

export type TPut = TPost;
export type TPatch=TPost
