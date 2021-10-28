import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import NewsfeedLeftbar from "./NewsfeedLeftbar";
import NewsfeedRightbar from "./NewsfeedRightbar";
import UserNavbar from "./UserNavbar";
import FileUpload from "./FileUpload";

export default function Newsfeed() {
  const [imagePost, setImagePost] = useState([]);
  const [textPost, settextPost] = useState("");
  useEffect(() => {
    axios.get("http://localhost:3000/webapipost/posts").then((res) => {
      console.log(res.data);
      setImagePost(res.data.posts);
    });
  }, [setImagePost]);
  return (
    <div>
      <UserNavbar />

      <div id="page-contents">
        <div className="container">
          <div className="row">
            {/* <!-- Newsfeed Common Side Bar Left
            ================================================= --> */}
            <NewsfeedLeftbar />

            <div className="col-md-7">
              <FileUpload />

              <div className="post-content">
                {imagePost.map((p, index) => (
                  <div>
                    <p style={{ fontWeight: "bold" }}>
                      Post is by user id: {p.userId}
                    </p>
                    <p>{p.texts}</p>
                    <img
                      src={`http://localhost:3000/${p.imagePath}`}
                      alt="noimage"
                      class="img-responsive post-image"
                    />
                    <hr />
                  </div>
                ))}
              </div>
            </div>

            <NewsfeedRightbar />
          </div>
        </div>
      </div>
    </div>
  );
}
