import React, { useEffect, useRef, useState } from "react";
import Container from "../../Container/Container";
import Icon from "../../../Icon/Icon";
import api from "../../../axios/Api";
import logo from "../../../assets/logo.png";
import { Link, NavLink, useLocation } from "react-router-dom";
const Header = () => {
  let location = useLocation();
  const navRef = useRef(null);
  const [header, setHeader] = useState([]);
  let [menuShow, setmenuShow] = useState(false);
  let active = location.pathname;

  let getHeaderData = async () => {
    try {
      let response = await api.get("/Header.json");
      setHeader(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getHeaderData();
  }, []);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setmenuShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        className={`py-2 bg-white border-b border-lightgray/20 lg:sticky top-0 z-[99999] fixed w-full`}
      >
        <Container>
          <div className="grid lg:grid-cols-12 grid-cols-5 items-center">
            <div
              className="lg:hidden col-span-1 flex flex-col gap-2 group cursor-pointer"
              onClick={() => setmenuShow(!menuShow)}
            >
              <div className="bg-gray w-[25px] h-[1px] group-hover:bg-primary group-hover:w-[25px] duration-500"></div>
              <div className="bg-gray w-[18px] h-[1px] group-hover:bg-primary group-hover:w-[25px] duration-500"></div>
              <div className="bg-gray w-[15px] h-[1px] group-hover:bg-primary group-hover:w-[25px] duration-500"></div>
            </div>
            <div className="lg:col-span-2 col-span-3">
              <Link to="/">
                <picture>
                  <img
                    src={logo}
                    alt="logo"
                    className="w-full h-[60px] object-contain "
                  />
                </picture>
              </Link>
            </div>
            <div
              ref={navRef}
              className={`col-span-3 lg:col-span-7 bg-white absolute lg:static top-0 left-0 w-[70%] lg:w-auto h-full lg:h-auto transition-transform transform duration-500 z-10  ${
                menuShow
                  ? "translate-x-0 bg-white border-r border-gray/20 lg:border-none "
                  : "-translate-x-full bg-white"
              } lg:translate-x-0 grid items-center`}
            >
              <ul className="flex lg:flex-row flex-col lg:justify-center lg:gap-5 gap-10 px-10 py-20 lg:py-0 bg-white shadow lg:shadow-none h-screen lg:h-auto">
                {header?.map((item, index) => (
                  <li
                    key={index}
                    className={`  overflow-hidden  ${
                      active == item.to
                        ? "border-b border-primary lg:border-none"
                        : ""
                    } `}
                    onClick={() => setmenuShow(false)}
                  >
                    <NavLink
                      to={item.to}
                      className={`text-gray font-medium capitalize hover:text-primary duration-500 relative before:absolute overflow-hidden before:bg-primary lg:before:w-full before:w-0 before:h-[1px] before:bottom-0 before:left-[-100%] hover:before:left-[100%] before:duration-500 ${
                        active == item.to ? "text-primary before:left-[0]" : ""
                      }`}
                    >
                      {item.keys}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-3 col-span-1 flex justify-end items-center gap-2 lg:gap-5">
              <div className="lg:flex  items-center gap-2 hidden ">
                <div className="">
                  <input
                    type="text"
                    name="fullName"
                    // value={formData.fullName}
                    // onChange={handleChange}
                    placeholder="Search"
                    className="p-2 border border-lightgray/20 rounded-md w-full placeholder:text-sm outline-primary"
                  />
                </div>
                <span>
                  <Icon
                    type="search"
                    className="text-2xl  hover:text-primary duration-500 cursor-pointer"
                  />
                </span>
              </div>
              <span>
                <Link to="/wishlist">
                  <Icon
                    type="heart"
                    className="text-2xl hover:text-primary duration-500 cursor-pointer "
                  />
                </Link>
              </span>
              <span>
                <Link to="/cart">
                  <Icon
                    type="cart"
                    className="text-2xl hover:text-primary duration-500 cursor-pointer"
                  />
                </Link>
              </span>

              {/* <span>
                <Icon
                  type="user"
                  className="text-2xl hover:text-primary duration-500 cursor-pointer hidden lg:block"
                />
              </span> */}
            </div>
          </div>
        </Container>
        <div
          className={`absolute top-[20px]  z-40 lg:hidden duration-500 ${
            menuShow ? "right-[35%]" : "right-[100%]"
          }`}
          onClick={() => setmenuShow(false)}
        >
          <Icon type="close" className="text-4xl text-primary" />
        </div>
      </div>
    </>
  );
};

export default Header;
