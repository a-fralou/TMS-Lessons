import { TODOS_CONST } from "./constants";

const setToDosInLocalStorage = (todos) => {
  localStorage.setItem(TODOS_CONST, JSON.stringify(todos));
};

module.exports = {
  setToDosInLocalStorage,
};
