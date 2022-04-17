import React from "react";
import PageHeadImg from "../../components/PageHeadingImg/PageHeadImg";
import "./NotFound.css";

const NotFound = () => {
  return (
    <>
      <PageHeadImg text="Sorry Page not found!" />
      <div className="not-found">
        <h1>404</h1>
      </div>
    </>
  );
};

export default NotFound;
