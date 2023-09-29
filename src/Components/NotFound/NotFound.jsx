import React from "react";
import notFoundImg from "../../Assets/images/error.svg";
export default function NotFound() {
  return (
    <div className="">
      <img
        src={notFoundImg}
        className="d-block mx-auto py-5 my-5"
        alt="Not Found Page"
      />
    </div>
  );
}
