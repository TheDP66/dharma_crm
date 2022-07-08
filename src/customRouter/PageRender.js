import React from "react";
import { useParams } from "react-router-dom";

const generatePage = (pageName) => {
  const component = () => require(`../pages/${pageName}`).default;

  try {
    return React.createElement(component());
  } catch (error) {
    console.log(error);
  }
};

const PageRender = () => {
  const { page, id } = useParams();

  let pageName = "";

  if (id) {
    pageName = `${page}/[id]`;
  } else {
    pageName = `${page}`;
  }

  return generatePage(pageName);
};

export default PageRender;
