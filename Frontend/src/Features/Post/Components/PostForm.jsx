import React, { useState } from "react";
import { RiCloseLine,RiImageUploadLine } from "@remixicon/react";
import { postCreationHandler } from "../Services/post.api";
import "../Styles/post.scss";

const PostForm = ({ setShowPostForm, setRefreshFeed }) => {
  const [caption, setcaption] = useState("");
  const [postImg, setPostImg] = useState(null);
  const [preview, setPreview] = useState("");

  const submitHandler = async (e, caption, postImg) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("caption", caption);
      formData.append("postImg", postImg);
      await postCreationHandler(formData);
      setcaption("");
      setShowPostForm(false);
      setRefreshFeed((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="postform-container">
      <div className="postform-wrapper">
        <div className="postform-top">
          <div className="postform-topleft">
            <div
              onClick={() => {
                setShowPostForm(false);
              }}
              className="closeform-btn"
            >
              <RiCloseLine />
            </div>
          </div>
        </div>
        <div className="postform-center">
          <form
            onSubmit={(e) => {
              submitHandler(e, caption, postImg);
            }}
          >
            <textarea required
              onChange={(e) => {
                setcaption(e.target.value);
              }}
              value={caption}
              name="caption"
              className="caption"
              type="text"
              placeholder="Write Something"
            />
            <input
            style={{ display: 'none' }}
              type="file"
              onChange={(e) => {
                console.log(e.target.files[0]);
                setPostImg(e.target.files[0]);
                setPreview(URL.createObjectURL(e.target.files[0]));
              }}
            />
            <button style={{ display: 'none' }} type="submit">Post</button>
          </form>
          <div className="postImg">
            {preview && <img src={preview} alt="Preview" />}
          </div>
        </div>
        <div className="postform-bottom">
            <div className="postform-bottomleft">
                <button
                onClick={()=>{
                    document.querySelector("input[type='file']").click();
                }} 
                className="img-upload-btn">
                    <RiImageUploadLine color="#fff" />
                </button>
            </div>
            <div className="postform-bottomright">
                <button
                style={{cursor:"pointer"}} 
                onClick={(e) => {
                    submitHandler(e, caption, postImg);
                }}
                className="post-btn">Post</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
