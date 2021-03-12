/* eslint-disable react/require-default-props */
/* eslint-disable react/no-typos */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const TodoForm = ({ onSubmit, update, children, title }) => {
  const [vTitle, setVTitle] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  function validateSubmit() {
    if (!vTitle) {
      setError("Title field is required");
    } else {
      setMessage(`${update ? "Updated" : "Created"} Todo!`);

      onSubmit({ title: vTitle });
    }
  }

  useEffect(() => {
    setVTitle(title);
  }, []);

  return (
    <form method="POST">
      <div className={["shadow sm:rounded-md", "sm:overflow-hidden"].join(" ")}>
        {children}
        <div
          className={["px-4", "py-5", "bg-white", "space-y-6", "sm:p-6"].join(
            " "
          )}
        >
          <div className={["grid", "grid-cols-3", "gap-6"].join(" ")}>
            <div className={["col-span-3", "sm:col-span-2"].join(" ")}>
              <label
                htmlFor="company_website"
                className={[
                  "block",
                  "text-sm",
                  "font-medium",
                  "text-gray-700",
                ].join(" ")}
              >
                Title*
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  value={vTitle}
                  type="text"
                  name="title"
                  id="title"
                  className={[
                    "focus:ring-indigo-500",
                    "focus:border-indigo-500",
                    "flex-1",
                    "block",
                    "w-full",
                    "rounded-none",
                    "rounded-r-md",
                    "sm:text-sm",
                    "border-gray-300",
                  ].join(" ")}
                  onChange={({ target: { value } }) => {
                    setVTitle(value);
                    setError("");
                    setMessage("");
                  }}
                  placeholder="type your title here..."
                />
              </div>
              <p className={["text-red-500", "text-xs"].join(" ")}>{error}</p>
              <p className={["text-green-500", "text-xs"].join(" ")}>
                {message}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => validateSubmit()}
            className={[
              "bg-green-500",
              "text-xs",
              "hover:bg-blue-700",
              "text-white",
              "font-bold",
              "py-2",
              "px-4",
              "rounded",
            ].join(" ")}
          >
            {update ? "Update Todo" : "Add Todo"}
          </button>
        </div>
      </div>
    </form>
  );
};

TodoForm.propTypes = {
  onSubmit: PropTypes.func.required,
  children: PropTypes.object.required,
  update: PropTypes.bool,
  title: PropTypes.string,
};

export default TodoForm;
