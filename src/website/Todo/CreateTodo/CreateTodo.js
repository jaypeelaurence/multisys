import React from "react";
import { useRouter } from "next/router";
import Container from "website/_components/Container";
import useStores from "stores/useStores";
import Todo from "website/_api/Todo";
import TodoForm from "website/Todo/_components/TodoForm";

const title = "Create A Todo";

const CreateTodo = () => {
  const router = useRouter();

  const {
    todoStore: { addTodos },
  } = useStores();

  async function onSubmit(todoInput) {
    const todo = new Todo();

    const result = await todo.create(todoInput);

    addTodos(result);

    router.push("/");
  }

  const content = (
    <TodoForm onSubmit={onSubmit}>
      <div className={["px-4 py-5", "sm:px-6"].join(" ")}>
        <h1>Create A Todo</h1>
      </div>
    </TodoForm>
  );

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

export default CreateTodo;
