import React from "react";
import { useNavigate, } from "react-router-dom";

export default function Base({ children }) {
  let navigate = useNavigate();

  return (
    <div className="">
      <div
        className="border-bottom border-dark"
        style={{
          fontFamily: "Nunito",
          position: "fixed",
          top: "0",
          width: "100%",
          zIndex: "1",
        }}
      >
        <nav class="navbar navbar-expand-lg bg-white">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="me-auto mb-2 mb-lg-0"></div>
              <ul class="navbar-nav d-flex px-4">
                <li className="nav-item px-2">
                  <a
                    className={"nav-link"}
                    href="#"
                    onClick={(e) => {
                      navigate("/");
                    }}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item px-2">
                  <a
                    className="nav-link"
                    href="#"
                    onClick={(e) => {
                      navigate("/callForPapers/mainpage");
                    }}
                  >
                    Call for Papers
                  </a>
                </li>

                <li className="nav-item  px-2">
                  <a
                    className="nav-link"
                    href="#"
                    onClick={(e) => {
                      navigate("/Registration");
                    }}
                  >
                    Registration
                  </a>
                </li>
                <li className="nav-item  px-2">
                  <a
                    className="nav-link"
                    href="#"
                    onClick={() => {
                      navigate("/committees");
                    }}
                  >
                    Committees
                  </a>
                </li>
                <li className="nav-item  px-2">
                  <a className="nav-link" href="#"
                    onClick={e => {
                      navigate("/KeynoteSpeakers")
                    }}>
                    Keynote Speakers
                  </a>
                </li>
                <li className="nav-item  px-2">
                  <a className="nav-link" href="#dates"
                    onClick={e => {
                      navigate("/dates")
                    }}>
                    Dates
                  </a>
                </li>
                <li className="nav-item  px-2">
                  <a className="nav-link" href="#dates"
                    onClick={e => {
                      navigate("/Schedule")
                    }}>
                    Schedule
                  </a>
                </li>
                <li className="nav-item  px-2">
                  <a className="nav-link" href=""
                    onClick={e => {
                      navigate("/contact")
                    }}>
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div
        style={{
          minHeight: "100vh",
          fontFamily: "Playfair Display",
          marginTop: "3rem",
        }}
      >
        {children}
      </div>
      <footer className="bg-christ">
        <div className="p-4 text-center">INTERNATIONAL CONFERENCE ON COMPUTATIONAL SCIENCES AND SUSTAINABLE
            TECHNOLOGIES (ICCSST - 2023) </div>
      </footer>
    </div>
  );
}
