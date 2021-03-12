/* eslint-disable react/require-default-props */
/* eslint-disable react/no-typos */

import React from "react";
import PropTypes from "prop-types";
import useStores from "stores/useStores";
import { useRouter } from "next/router";

import Todo from "website/_api/Todo";
import TodoCardWrapper from "./TodoCardWrapper";

const TodoCard = ({ todo: { id, userId, title, completed }, view }) => {
  const todo = new Todo();

  const {
    todoStore: { deleteTodos },
  } = useStores();

  const router = useRouter();

  async function onClickDelete(selectedID) {
    await todo.deleter(selectedID);
    deleteTodos(selectedID);

    router.push("/");
  }

  return (
    <TodoCardWrapper
      className={[
        "bg-white",
        "shadow",
        "overflow-hidden",
        "sm:rounded-lg",
        "flex",
      ].join(" ")}
    >
      <div
        className={[
          "px-4 py-5",
          "sm:px-6",
          completed ? "bg-green-300" : "bg-gray-300",
        ].join(" ")}
      >
        <h3
          className={[
            "text-lg",
            "leading-6",
            "font-medium",
            "text-gray-900",
          ].join(" ")}
        >
          {completed ? " COMPLETED" : " PENDING"}
        </h3>
      </div>
      <div className={["border-t", "border-gray-200"].join(" ")}>
        <dl>
          <div
            className={[
              "bg-gray-50",
              "px-4",
              "py-5",
              "sm:grid",
              "sm:grid-cols-3",
              "sm:gap-4",
              "sm:px-6",
            ].join(" ")}
          >
            <dt
              className={["text-sm", "font-medium", "text-gray-500"].join(" ")}
            >
              Entry #
            </dt>
            <dd
              className={[
                "mt-1",
                "text-sm",
                "text-gray-900",
                "sm:mt-0",
                "sm:col-span-2",
              ].join(" ")}
            >
              {id}
            </dd>
          </div>
        </dl>
        <dl>
          <div
            className={[
              "bg-gray-50",
              "px-4",
              "py-5",
              "sm:grid",
              "sm:grid-cols-3",
              "sm:gap-4",
              "sm:px-6",
            ].join(" ")}
          >
            <dt className="text-sm font-medium text-gray-500">Title</dt>
            <dd
              className={[
                "mt-1",
                "text-sm",
                "text-gray-900",
                "sm:mt-0",
                "sm:col-span-2",
              ].join(" ")}
            >
              {title}
            </dd>
          </div>
        </dl>
        <dl>
          <div
            className={[
              "bg-gray-50",
              "px-4",
              "py-5",
              "sm:grid",
              "sm:grid-cols-3",
              "sm:gap-4",
              "sm:px-6",
            ].join(" ")}
          >
            <dt
              className={["text-sm", "font-medium", "text-gray-500"].join(" ")}
            >
              User ID
            </dt>
            <dd
              className={[
                "mt-1",
                "text-sm",
                "text-gray-900",
                "sm:mt-0",
                "sm:col-span-2",
              ].join(" ")}
            >
              {userId}
            </dd>
          </div>
        </dl>
      </div>
      <div className={["px-4 py-5", "sm:px-6", "cardLink"].join(" ")}>
        {view || (
          <a
            className={["text-xs", "bg-blue-300"].join(" ")}
            href={`/todo/${id}`}
          >
            View
          </a>
        )}
        <a
          className={["text-xs", "bg-blue-100"].join(" ")}
          href={`/todo/update/${id}`}
        >
          Update
        </a>
        <a
          className={["text-xs", "bg-red-100"].join(" ")}
          href="#"
          onClick={() => onClickDelete(id)}
        >
          Delete
        </a>
      </div>
    </TodoCardWrapper>
  );
};

TodoCard.propTypes = {
  todo: PropTypes.object.required,
  view: PropTypes.bool,
};

export default TodoCard;
