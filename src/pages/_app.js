import React, { useEffect } from "react";
import "tailwindcss/tailwind.css";
import useStores from "stores/useStores";
import Todo from "website/_api/Todo";

// eslint-disable-next-line react/prop-types
const App = ({ Component, pageProps }) => {
  const {
    todoStore: { isset, resetTodos },
  } = useStores();

  useEffect(async () => {
    if (!isset) {
      const getTodo = await Todo.get();

      resetTodos(getTodo);
    }
  }, []);

  return <Component {...pageProps} />;
};

export default App;
