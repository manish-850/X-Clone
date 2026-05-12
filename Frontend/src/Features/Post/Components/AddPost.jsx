import React from "react";
import { RiAddLine } from "@remixicon/react";

const AddPost = ({setShowPostForm}) => {
  return (
    <div className="createBtn-container">
      <button
      onClick={()=>{
          setShowPostForm(true)
      }}
       className="createBtn">
        <RiAddLine />
      </button>
    </div>
  );
};

export default AddPost;
