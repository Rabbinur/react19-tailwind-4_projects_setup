import React, { useEffect, useState } from "react";
import Container from "../../shared/components/Container/Container";
import Icon from "../../shared/Icon/Icon";
import { Link, useLocation } from "react-router-dom";
import api from "../../shared/axios/api";
const About = () => {
  let location = useLocation();
  let [about, setAbout] = useState([]);

  const getaboutData = async () => {
    try {
      let response = await api.get("/About.json");
      setAbout(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getaboutData();
  }, []);
  return (
    <>
      <div className="bg-[#F7F8FB]">
        <Container>
          <div className="flex justify-between lg:pt-[220px] lg:pb-20 py-10 items-center">
            <h2 className="lg:text-3xl text-2xl  font-oswald font-medium text-black/80">
              About
            </h2>
            <p className="flex  items-center gap-2 text-gray-500 capitalize">
              <Link to="/" className="text-gray-600">
                home
              </Link>
              {/* <Icon type="MdOutlineKeyboardArrowRight" /> */}
              {location.pathname}
            </p>
          </div>
        </Container>
      </div>
      {/* ============ who we are======== */}
      <Container>
        <div className="grid sm:grid-cols-2 grid-cols-1 lg:gap-20 md:gap-10 gap-5 items-center lg:py-32 py-10">
          <div className="w-full lg:h-[400px] sm:h-[300px] h-[200px]">
            <picture>
              <img
                src={about?.intro?.url}
                alt="img"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </picture>
          </div>
          <div>
            <h2 className="md:text-4xl text-xl font-oswald font-medium text-black/80 lg:pb-5 pb-3">
              {about?.intro?.title}
            </h2>
            <p className=" text-gray-500 text-sm lg:text-bas lg:leading-7 leading-6">
              {about?.intro?.description}
            </p>
          </div>
        </div>
      </Container>
      {/* ============ why choose us======== */}
      <div className="bg-[#F4F9FC] lg:py-20 py-10">
        <Container>
          <div>
            <h2 className="md:text-4xl text-xl font-oswald font-medium text-black/80 lg:pb-5 pb-3 text-center">
              {about?.chooses?.title}
            </h2>
            <p className=" text-gray-500 text-sm lg:leading-7 leading-6 max-w-xl text-center mx-auto">
              {about?.chooses?.description}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:gap-10 md:gap-8 gap-5 py-10 lg:pt-10">
            {about?.chooses?.chooses?.map((item) => (
              <div className="text-center bg-white lg:p-10 p-5" key={item.id}>
                <div className=" bg-primary size-14 flex justify-center items-center rounded-full mx-auto">
                  <Icon type={item.icon} className="text-4xl text-white " />
                </div>
                <h2 className="font-oswald capitalize lg:text-xl text-base lg:py-4 py-2">
                  {item?.title}
                </h2>
                <p className="text-gray-500 text-sm">{item?.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>
      {/* ============team======== */}
      <div className=" lg:py-20 md:py-10 py-">
        <Container>
          <div>
            <h2 className="md:text-4xl text-xl font-oswald font-medium text-black/80 lg:pb-5 pb-3 pt-5 lg:pt-10 text-center capitalize">
              {about?.team?.title}
            </h2>
            <p className=" text-gray-500 text-sm lg:leading-7 leading-6 max-w-xl text-center mx-auto">
              {about?.team?.description}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:gap-10 md:gap-6 gap-5 py-10 lg:pt-10">
            {about?.team?.team?.map((item) => (
              <div
                key={item?.id}
                className="border group duration-500 hover:shadow-lg"
              >
                <div className="w-full lg:h-[350px] md:h-[200px] h-[300px] bg-[#F7F7F7] relative">
                  <picture>
                    <img
                      src={item?.url}
                      alt="img"
                      className="w-full h-full object-cover"
                    />
                  </picture>
                  <div className="absolute top-0 left-0 w-full h-full bg-black/20 opacity-0 group-hover:opacity-100 duration-500  ">
                    <div className="flex gap-2 justify-center items-center h-full">
                      <Link to="https://www.facebook.com/digital.weero/">
                        <div className="bg-white w-[40px] h-[40px] flex justify-center items-center hover:bg-primary duration-500 hover:text-white mt-1 group-hover:mt-0 ">
                          <Icon type="FaFacebookF" className="text-lg " />
                        </div>
                      </Link>
                      <Link to="https://www.instagram.com/doitweero/?hl=en">
                        <div className="bg-white w-[40px] h-[40px] flex justify-center items-center hover:bg-primary duration-500 hover:text-white mt-5 group-hover:mt-0 ">
                          <Icon type="CiInstagram" className="text-lg " />
                        </div>
                      </Link>
                      <Link to="https://bd.linkedin.com/company/weerodigital">
                        <div className="bg-white w-[40px] h-[40px] flex justify-center items-center hover:bg-primary duration-500 hover:text-white mt-10 group-hover:mt-0 ">
                          <Icon type="CiLinkedin" className="text-lg " />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="lg:p-5 p-2">
                  <h2 className="lg:text-xl text-lg capitalize font-bold font-oswald text-black/80 hover:text-primary duration-500 lg:py-2 pb-1">
                    {item?.name}
                  </h2>

                  <p className="text-gray-500 text-sm lg:text-base capitalize">
                    {item?.designation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default About;
