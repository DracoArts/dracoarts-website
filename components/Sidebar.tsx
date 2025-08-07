'use client';
import Link from "next/link";
import { useState } from "react";
import Select from "react-select";
import Lottie from "lottie-react";
import animationData from "../public/animations/anim1.json";
import { TypeAnimation } from "react-type-animation";
type sideBarProps = {
  sidebar: boolean;
  setSidebar: (open: boolean) => void;
};
const Sidebar = ({ sidebar, setSidebar }: sideBarProps) => {
  const [dropdown, setDropdown] = useState<null | number>(null);
  const [subMenu, setSubmenu] = useState<null | number>(null);
  const options = [
    { value: "English", label: "Eng" },
    { value: "Bangla", label: "Ban" },
    { value: "Hindi", label: "Hin" },
  ];
  const selectStyles = {
    control: (styles: any) => ({
      ...styles,
      height: "40px",
      width: "60px",
      backgroundColor: "transparent",
      color: "red",
      border: "0",
      boxShadow: "0",
    }),
    option: (styles: any, { isSelected }: { isSelected: any }) => ({
      ...styles,
      color: isSelected ? "#fff" : "#000",
      padding: "0",
      textAlign: "center",
      backgroundColor: isSelected ? "#161829" : "white",
      "&:hover": { backgroundColor: "#161829", color: "#fff" },
    }),
    placeholder: (styles: any) => ({ ...styles, color: "#fff" }),
    singleValue: (styles: any) => ({ ...styles, color: "#fff" }),
  };
  return (
    <div className={`sidebar-wrapper ${sidebar ? "sidebar-active" : ""}`}>
      <div className="position-relative">
        <div className="side-menubar py-6 d-flex flex-column justify-content-between align-items-center">
          <div
            onClick={() => setSidebar(!sidebar)}
            className="sidebar-close d-none d-xl-block"
          >
            <button className="d-center d-grid">
              <i className="material-symbols-outlined mat-icon fs-three">
                {sidebar ? "close" : "menu_open"}
              </i>
              <span>Lets Connect</span>
            </button>
          </div>
          <ul className="d-grid gap-4 social-area">
            <li>
              <Link
                href="https://www.facebook.com"
                aria-label="Facebook"
                className="d-center"
              >
                <i className="fab fa-facebook-f"></i>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com"
                aria-label="Instagram"
                className="d-center"
              >
                <i className="fab fa-instagram"></i>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com"
                aria-label="Linkedin"
                className="d-center"
              >
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </li>
            <li>
              <Link
                href="https://twitter.com/DracoArts_"
                aria-label="Twitter"
                className="d-center"
              >
                <i className="fab fa-twitter"></i>
              </Link>
            </li>
          </ul>
          {/* <div className="bottom-area">
            <Select
              components={{
                IndicatorSeparator: () => null,
                DropdownIndicator: () => null,
              }}
              styles={selectStyles}
              menuPlacement="top"
              options={options}
              defaultValue={options[0]}
            />
          </div> */}
        </div>
        <div className="sidebar-content d-center flex-columnn">

          <Lottie
            animationData={animationData}
            style={{ marginTop: "-10%" }}
            loop={true}
          />

          <span className="display-one">
            Our Games Are
            <br />
            <TypeAnimation
              sequence={["Entertainment", "Joy", "Fun", "Art"]}
              wrapper="span"
              className="typed d-inline-block"
              repeat={Infinity}
              speed={3}
              deletionSpeed={1}
            />
          </span>

          <div className="footer-items w-100 bottom-0">
            <div className="row">
              <div className="col-xl-3 col-lg-6">
                <div className="single-item p-5 py-xxl-10 px-xxl-8">
                  <h4 className="mb-6">Office</h4>
                  <div className="d-flex gap-3 align-items-center">
                    <div className="icon-box d-center">
                      <i className="material-symbols-outlined mat-icon fs-fure">
                        {" "}
                        location_on{" "}
                      </i>
                    </div>
                    <div className="right-item w-75">
                      <h5>Dubai</h5>
                      <span>518 , Silicon Oisis , Dubai</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6">
                <div className="single-item p-5 py-xxl-10 px-xxl-8">
                  <h4 className="mb-6">Email address</h4>
                  <div className="d-flex gap-3 align-items-center">
                    <div className="icon-box d-center">
                      <i className="material-symbols-outlined mat-icon fs-fure">
                        {" "}
                        mail{" "}
                      </i>
                    </div>
                    <div className="right-item d-grid">
                      <span>suppoer@dracoarts.com</span>
                      <span>partners@dracoarts.com</span>
                      <span>mirhamzahasan@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6">
                <div className="single-item p-5 py-xxl-10 px-xxl-8">
                  <h4 className="mb-6">Phone Number</h4>
                  <div className="d-flex gap-3 align-items-center">
                    <div className="icon-box d-center">
                      <i className="material-symbols-outlined mat-icon fs-fure">
                        {" "}
                        call{" "}
                      </i>
                    </div>
                    <div className="right-item d-grid">
                      <span>(+971) 5693-1595-3</span>
                      <span>(+92) 315-4644-536</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6">
                <div className="single-item p-5 py-xxl-10 px-xxl-8">
                  <h4 className="mb-6">Working Hours</h4>
                  <div className="d-flex gap-3 align-items-center">
                    <div className="icon-box d-center">
                      <i className="material-symbols-outlined mat-icon fs-fure">
                        {" "}
                        schedule{" "}
                      </i>
                    </div>
                    <div className="right-item w-50">
                      <span>Mon-Fri: 09: 00-18: 00 Sat-Sun: Weekend</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
