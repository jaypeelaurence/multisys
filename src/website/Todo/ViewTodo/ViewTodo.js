/* eslint-disable react/jsx-boolean-value */

import React from "react";
import useStores from "stores/useStores";
import { useRouter } from "next/router";

import Loading from "website/_components/Loading";
import Err from "website/_components/Error";

import Container from "website/_components/Container";
import TodoCard from "website/Todo/_components/TodoCard";

import ViewTodoWrapper from "./ViewTodoWrapper";

let title = "";

const ViewTodo = () => {
  const { id } = useRouter().query;

  let content = <Loading />;

  const {
    todoStore: { todos },
  } = useStores();

  const getTodo = todos.find((todo) => todo.id.toString() === id);

  if (getTodo && getTodo.error) {
    content = <Err />;
  }

  if (getTodo && getTodo.id) {
    title = getTodo.title;

    content = (
      <ViewTodoWrapper>
        <TodoCard todo={getTodo} view={true} />
      </ViewTodoWrapper>
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

export default ViewTodo;
