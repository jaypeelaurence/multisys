/* eslint-disable react/require-default-props */
/* eslint-disable react/no-typos */

import React from "react";
import PropTypes from "prop-types";

import TodoCard from "website/Todo/_components/TodoCard";
import ListTodoWrapper from "./ListTodoWrapper";

const ListTodos = ({ todos }) => (
  <ListTodoWrapper>
    {todos.map((todo) => (
      <TodoCard todo={todo} />
    ))}
  </ListTodoWrapper>
);

ListTodos.propTypes = {
  todos: PropTypes.object.required,
};

export default ListTodos;
