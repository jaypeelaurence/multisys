import React from "react";
import LoadingWrapper from "./LoadingWrapper";

const Loading = () => (
  <LoadingWrapper>
    <h1 className={["text-lg", "text-gray-200"].join(" ")}>Fetching Data...</h1>
  </LoadingWrapper>
);

export default Loading;
