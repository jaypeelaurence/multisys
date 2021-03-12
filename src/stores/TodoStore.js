import { observable, action } from "mobx";
import sortTodos from "website/_utils/sortTodos";

let todos;

export default class TodoStore {
  @observable todos = [];

  @observable isset = false;

  @action resetTodos = (resTodos) => {
    if (resTodos.message) {
      this.todos = { error: true };
    } else {
      this.todos = resTodos.sort(sortTodos);
    }

    this.isset = true;
  };

  @action addTodos = (todo) => {
    if (todo.message) {
      this.todos = { error: true };
    } else {
      todos = [...this.todos, todo].sort(sortTodos);

      this.todos = todos;
    }
  };

  @action updateTodos = (todoInput) => {
    todos = [...this.todos];

    this.todos = todos.map((todo) => {
      const { id } = todoInput;

      if (todo.id === id) {
        return todoInput;
      }

      return todo;
    });
  };

  @action deleteTodos = (id) => {
    todos = [...this.todos];

    this.todos = todos.filter((todo) => todo.id !== id);
  };
}
