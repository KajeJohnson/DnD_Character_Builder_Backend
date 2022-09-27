import { Class } from "./classes.types";

export type Feature = {
  index: string;
  name: string;
  url: string;
  desc?: string[];
  class?: Class;
  level?: number;
  prerequisites?: [];
};

export type Features = {
  results: Feature[];
};
