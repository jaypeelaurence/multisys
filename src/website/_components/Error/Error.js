import React from "react";
import ErrorWrapper from "./ErrorWrapper";

const Error = () => (
  <ErrorWrapper>
    <h1 className={["text-lg", "text-gray-200"].join(" ")}>ERROR</h1>
  </ErrorWrapper>
);

export default Error;
