/* eslint-disable react/jsx-boolean-value */

import React from "react";
import { useRouter } from "next/router";
import Container from "website/_components/Container";
import useStores from "stores/useStores";
import Todo from "website/_api/Todo";
import TodoForm from "website/Todo/_components/TodoForm";
import Loading from "website/_components/Loading";
import Err from "website/_components/Error";

const title = "Update A Todo";

const Update = () => {
  let content = <Loading />;

  const apiTodo = new Todo();

  const { id } = useRouter().query;

  const router = useRouter();

  const {
    todoStore: { updateTodos, todos },
  } = useStores();

  async function onSubmit(todoInput) {
    const result = await apiTodo.update({ id, title: todoInput.title });
    updateTodos(result);

    router.push("/");
  }

  const getTodo = todos.find((todo) => todo.id.toString() === id);

  if (getTodo && getTodo.error) {
    content = <Err />;
  }

  if (getTodo && getTodo.id) {
    content = (
      <TodoForm onSubmit={onSubmit} update={true} title={getTodo.title}>
        <div className={["px-4 py-5", "sm:px-6"].join(" ")}>
          <h1>Create A Todo</h1>
        </div>
      </TodoForm>
    );
  }

  return (
    <Container title={title}>
      <div className={["px-4", "py-5"].join(" ")}>
        <a
          href="/"
          className={[
            "bg-blue-500",
            "hover:bg-blue-700",
            "text-white",
            "font-bold",
            "py-2",
            "px-4",
            "rounded",
          ].join(" ")}
        >
          Back
        </a>
      </div>
      {content}
    </Container>
  );
};

export default Update;
