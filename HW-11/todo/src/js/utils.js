import { v4 as uuidv4 } from "uuid";

export const getRandomId = () => uuidv4();

export const obj = {
  age: 21,
  scopes: {
    html: "html",
    css: "css",
    js: "js",
  },
};
