import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "./FileUpload.css";

export default function FileUpload() {
  const [image, setImage] = useState(null);
  const [texts, setTexts] = useState("");
  const { id } = useSelector((state) => state.data);
  const onFileChange = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };
  const addText = (e) => {
    setTexts(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    var formData = new FormData();

    formData.append("photo", image);
    formData.append("texts", texts);
    formData.append("userId", id);

    axios
      .post("http://localhost:3000/webapipost/createPost", formData)
      .then((res) => {
        console.log(res);
        window.location.reload();
      });
  };

  return (
    <div>
      <div class="create-post">
        <div class="row">
          <form id="formElem" onSubmit={onSubmit}>
            <div class="col-md-7 col-sm-7">
              <div class="form-group">
                <img
                  src="images/users/img_avatar.png"
                  alt=""
                  class="profile-photo-md"
                />
                <textarea
                  name="texts"
                  id="exampleTextarea"
                  cols="30"
                  rows="1"
                  class="form-control"
                  placeholder="Write what you wish"
                  onChange={addText}
                ></textarea>
              </div>
            </div>
            <div class="col-md-5 col-sm-5">
              <div class="tools">
                <ul class="publishing-tools list-inline">
                  <label for="file_input_id">Choose file</label>
                  <input
                    type="file"
                    id="file_input_id"
                    name="photo"
                    accept="image/*"
                    onChange={onFileChange}
                  />
                  {/*<li><a href="#"><i class="ion-images"></i></a></li>
    <li><a href="#"><i class="ion-map"></i></a></li>*/}
                </ul>
                <button class="btn btn-primary pull-right">Publish</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
