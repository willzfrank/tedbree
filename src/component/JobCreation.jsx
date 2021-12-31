import React from "react";
import { FaTimes } from "react-icons/fa";

function JobCreation() {
  return (
    <section className="JobApplicationContainer">
      <div className="flex justify-between">
        <div>
          <h2 className="JobApplicationHeader">New Job</h2>
          <div className="">
            <span className="JobCreationAddress">
              Kindly Provide the required information to get matched with
              suitable candidates
            </span>
          </div>
        </div>
        <FaTimes className="JobApplicationClose" />
      </div>
      <form action="#">
        <div>
          <label for="fname" className="form__label px-45">
            Job Title
          </label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            className="JobApplicationInput"
          />
          <label for="lname" className="form__label px-45">
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            className="JobApplicationInput"
          />
          <label for="lname" className="form__label px-45">
            Location
          </label>
          <input
            type="text"
            id="jobLocation"
            name="jobLocation"
            className="JobApplicationInput"
          />
          <div class="relative inline-block text-left">
            <div>
              <label for="lname" className="form__label px-45">
                What type of employment is it?
              </label>
              <span
                type="button"
                class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 JobApplicationInput"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
                Salary
                Range
              >
                <div className="select__container">
                  <span className="select__box">Select Option</span>
                  <svg
                    class="-mr-1 ml-2 h-5 w-5 arrow__down"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </span>
            </div>
          </div>
          <label for="lname" className="form__label px-45">
            Salary range
          </label>
          <input
            type="text"
            id="lname"
            name="lname"
            className="JobApplicationInput"
          />
          <label for="lname" className="form__label px-45">
            Submission deadline
          </label>
          <input
            type="text"
            id="lname"
            name="lname"
            className="JobApplicationInput"
          />
          <div>
            <label for="lname" className="form__label px-45">
              What sector is this job categorised under?
            </label>
            <span
              type="button"
              class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 JobApplicationInput"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
              Salary
              Range
            >
              <div className="select__container">
                <span className="select__box">Select Option</span>
                <svg
                  class="-mr-1 ml-2 h-5 w-5 arrow__down"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </span>
          </div>
          <div>
            <button type="submit" className="JobApplicationSubmitButton px-45">
              <span className="button__box">Submit Application</span>
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default JobCreation;
