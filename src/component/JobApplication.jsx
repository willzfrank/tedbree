import React from "react";
import { FaTimes } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { AiOutlineCloudUpload } from "react-icons/ai";

function JobApplication() {
  return (
    <section className="JobApplicationContainer">
      <div className="flex justify-between">
        <div>
          <h2 className="JobApplicationHeader">Front end developer</h2>
          <div className="">
            <GoLocation className="JobApplicationLocationIcon inline-block" />
            <span className="JobApplicationAddress">Ikeja Lagos</span>
          </div>
        </div>
        <FaTimes className="JobApplicationClose" />
      </div>
      <form action="#">
        <div>
          <label for="fname" className="form__label px-45">
            First Name
          </label>
          <input
            type="text"
            id="fname"
            name="fname"
            className="JobApplicationInput"
          />
          <label for="lname" className="form__label px-45">
            Last Name
          </label>
          <input
            type="text"
            id="lname"
            name="lname"
            className="JobApplicationInput"
          />
          <label for="lname" className="form__label px-45">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="JobApplicationInput"
          />
          <label for="location" className="form__label px-45">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            className="JobApplicationInput"
          />
          <label for="lname" className="form__label px-45">
            Phone Number
          </label>
          <input
            type="text"
            id="lname"
            name="lname"
            className="JobApplicationInput"
          />
          <div>
            <div className="UploadBox px-45">
              <div class="image-upload">
                <label for="file-input">
                  <AiOutlineCloudUpload className="JobApplicationCloudUpload " />
                </label>
                <input id="file-input" type="file" />
              </div>
              <span className="block span__text">
                Drag and drop your CV here
              </span>
              <span className="block span__text">or</span>
              <span className="block text-center browse__btn">
                <span className="button__box">Browse files</span>
              </span>
            </div>
          </div>
        </div>
        <div>
          <button type="submit" className="JobApplicationSubmitButton px-45">
            <span className="button__box">Submit Application</span>
          </button>
        </div>
      </form>
    </section>
  );
}

export default JobApplication;
