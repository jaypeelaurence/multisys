import React from "react";
import PropTypes from "prop-types";
import Header from "website/_components/Header";
import { Helmet } from "react-helmet";

const Container = ({ children, title }) => (
  <>
    <Helmet title={title} />
    <Header />
    <header className={["bg-white"].join(" ")}>
      <div
        className={[
          "max-w-7xl",
          "mx-auto",
          "py-6",
          "px-4",
          "sm:px-6",
          "lg:px-8",
        ].join(" ")}
      >
        {children}
      </div>
    </header>
  </>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Container;
