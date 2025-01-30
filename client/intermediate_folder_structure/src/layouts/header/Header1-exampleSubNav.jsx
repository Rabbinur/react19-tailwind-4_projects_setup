import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/logo.png";
import Container from "./../Container/Container";
import Icon from "../../Icon/Icon";
import { Link, NavLink, useNavigate } from "react-router-dom";
import api from "./../../axios/api";

const Header = () => {
  let navigate = useNavigate();
  let [navLink, setNavlink] = useState([]);
  let [phone, setPhone] = useState(false);
  let [categoryShow, setCategoryShow] = useState(false);
  let [show, setShow] = useState(false);
  const categoryRef = useRef(null);
  const navRef = useRef(null);

  const getNavData = async () => {
    try {
      let response = await api.get("/Header.json");
      setNavlink(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNavData();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (categoryRef.current && !categoryRef.current.contains(event.target)) {
        setCategoryShow(false);
      }
      if (navRef.current && !navRef.current.contains(event.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  let handleShow = () => {
    setShow(!show);
  };

  let handleCart = () => {
    console.log("df");
    navigate("/cart");
  };
  let handleWishlist = () => {
    navigate("/wishlist");
  };
  let handleProfile = () => {
    navigate("/login");
  };

  //search
  let handleSearch = () => {
    console.log("");
  };

  return (
    <>
      <div className="fixed z-[9999] w-full  ">
        {/* upper nav */}
        <div className="bg-black py-2">
          <Container>
            <div className="grid lg:grid-cols-12 grid-cols-2 gap-5 items-center">
              <div className="col-span-1">
                <Link to="/">
                  <picture>
                    <img
                      src={logo}
                      alt="logo"
                      className="lg:w-[200px] lg:h-[80px] h-[50px] mr-auto object-contain"
                    />
                  </picture>
                </Link>
              </div>
              <div className="col-span-9 lg:flex justify-end hidden">
                <input
                  type="text"
                  className="w-[80%] py-1 px-2 outli ne-primary outline-none  rounded-s-md"
                  placeholder="Search"
                  onChange={() => handleSearch()}
                />
                <button className="bg-primary px-10 py-2 text-white hover:bg-gray-700 duration-300 capitalize tracking-wider rounded-e-md">
                  search
                </button>
              </div>
              <div className="lg:col-span-2 flex gap-2 items-center justify-end">
                <div className="flex gap-2 items-center justify-end">
                  <span className="handl" onClick={() => handleProfile()}>
                    <Icon
                      type="user"
                      className="text-white text-2xl hover:text-primary duration-500 cursor-pointer"
                    />
                  </span>
                  <span onClick={() => handleWishlist()}>
                    <Icon
                      type="heart"
                      className="text-white text-2xl hover:text-primary duration-500 cursor-pointer"
                    />
                  </span>
                  <span onClick={() => handleCart()}>
                    <Icon
                      type="cart"
                      className="text-white text-2xl hover:text-primary duration-500 cursor-pointer"
                    />
                  </span>
                </div>
                <div>
                  <span onClick={() => handleShow()}>
                    <Icon
                      type={`${!show ? "bar" : "IoMdClose"}`}
                      className={` hover:text-primary duration-500 ml-10 lg:hidden cursor-pointer w-[20px] h-[20px] ${
                        !show
                          ? "text-white lg:text-2xl text-lg  "
                          : "text-red-700 text-2xl border border-red-700 rounded-full "
                      }`}
                    />
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </div>
        {/* lower nav */}
        <div className="bg-primary py-2 relative duration-500 ">
          <Container>
            <div className="grid lg:grid-cols-12 grid-cols-7 gap-2 items-center">
              <div
                ref={categoryRef}
                className="xl:col-span-2 lg:col-span-3 col-span-4"
              >
                <div className=" flex justify-between items-center ">
                  <div className="flex justify-between items-center gap-2 relative bg-white lg:px-5 px-2 lg:py-2.5 py-1 rounded-md  cursor-pointer">
                    <p
                      className="uppercase font-medium xl:text-base text-xs"
                      onClick={() => setCategoryShow(!categoryShow)}
                    >
                      all categories
                    </p>
                    <span
                      className="text-sm lg:text-base"
                      onClick={() => setCategoryShow(!categoryShow)}
                    >
                      <Icon type="bar" />
                    </span>
                    <div
                      className={`bg-white absolute z-40 shadow-lg left-0 w-full duration-500 ${
                        categoryShow
                          ? "opacity-100 top-[100%]"
                          : "opacity-0 -top-[700%]"
                      }`}
                    >
                      <ul className="text-gray-800 text-xs md:text-sm px-5 flex flex-col lg:gap-5 gap-2 py-5">
                        <li className="flex items-center gap-5 hover:text-primary duration-500 e">
                          <span>
                            <Icon
                              type="GiSteeringWheel"
                              className="lg:text-2xl text-xl"
                            />
                          </span>
                          <Link to="/shop">Steering Cover</Link>
                        </li>
                        <li className="flex items-center gap-5 hover:text-primary duration-500">
                          <span>
                            <Icon
                              type="RiSteeringLine"
                              className="lg:text-2xl text-xl"
                            />
                          </span>
                          <Link to="/shop">Steel Rim</Link>
                        </li>
                        <li className="flex items-center gap-5 hover:text-primary duration-500">
                          <span>
                            <Icon
                              type="GiCompactDisc"
                              className="lg:text-2xl text-xl"
                            />
                          </span>
                          <Link to="/shop">Brake Disc</Link>
                        </li>
                      </ul>
                    </div>{" "}
                  </div>
                </div>
              </div>
              <div
                ref={navRef}
                className={`xl:col-span-8 lg:col-span-6 p-10 lg:py-0 duration-500 w-full ${
                  show
                    ? "absolute top-0 left-0 w-full bg-primary z-50 translate-y-0"
                    : "absolute -top-full left-0 -translate-y-full w-full"
                } lg:static lg:translate-y-0 lg:bg-transparent lg:block`}
              >
                <ul className="flex flex-col lg:flex-row justify-center lg:gap-10 gap-5 lg:px-10">
                  {navLink?.map((item) => (
                    <li
                      key={item.id}
                      onClick={() => setShow(false)}
                      className="font-medium capitalize hover:text-white duration-500"
                    >
                      <NavLink
                        to={item.to}
                        className={({ isActive }) =>
                          `hover:text-white duration-500 ${
                            isActive ? "text-white border-b" : ""
                          }`
                        }
                      >
                        {item.keys}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="xl:col-span-2 lg:col-span-3 col-span-3 flex gap-1 items-center justify-end pl-5">
                <span onClick={() => setPhone(!phone)}>
                  <Icon
                    type="phone"
                    className="text-white lg:text-3xl text-xl duration-500"
                  />
                </span>
                <p className={`text-sm ${phone ? "block" : "hidden lg:block"}`}>
                  +01938988980
                </p>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Header;
