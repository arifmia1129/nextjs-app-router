import React from "react";

const NewsDetails = ({ params, searchParams }) => {
  console.log(searchParams);
  return (
    <div>
      <h1>The news id is: {params.id}</h1>
    </div>
  );
};

export default NewsDetails;
