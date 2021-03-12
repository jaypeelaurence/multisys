import { useContext, createContext } from "react";
import TodoStore from "./TodoStore";

const Contexts = createContext({
  todoStore: new TodoStore(),
});

const useStores = () => useContext(Contexts);

export default useStores;
