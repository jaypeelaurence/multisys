import React from "react";
import useStores from "stores/useStores";

import Container from "website/_components/Container";

import Loading from "website/_components/Loading";
import Err from "website/_components/Error";

import ListTodos from "website/Todo/ListTodos";

const title = "Welcome to Homepage";

const Home = () => {
  let content = <Loading />;

  const {
    todoStore: { todos },
  } = useStores();

  if (todos.error) {
    content = <Err />;
  }

  if (todos.length) {
    content = <ListTodos todos={todos} />;
  }

  return <Container title={title}>{content}</Container>;
};

export default Home;
