import React, { useEffect, useState } from "react";
import Title from "./../../../shared/components/Title/Title";
import Subtitle from "../../../shared/components/Subtitle/Subtitle";
import Container from "../../../shared/components/Container/Container";
import api from "../../../shared/axios/api";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-primary text-white p-2 rounded-full shadow-md hover:bg-gray-600"
    onClick={onClick}
  >
    <IoMdArrowDropleft />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-primary text-white p-2 rounded-full shadow-md hover:bg-gray-600"
    onClick={onClick}
  >
    <IoMdArrowDropright />
  </button>
);
const Category = () => {
  const [category, setCategory] = useState([]);

  const getCategoryData = async () => {
    try {
      const response = await api.get("/Category.json");
      setCategory(response.data); // Ensure this matches the actual API response structure
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    getCategoryData();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    autoplay: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="md:py-20 py-10 overflow-hidden">
      <Container>
        <div className="text-center">
          <Title>Top Categories</Title>
          <Subtitle>
            Get your car looking like new with our vast selection of Auto Parts
            and Car Accessories.
          </Subtitle>
        </div>
        <div className=" lg:pt-20 pt-10">
          {category.length > 0 ? (
            <Slider {...settings}>
              {category.map((item) => (
                <div key={item.id} className="hover:shadow-lg duration-500 p-4">
                  <Link to="/shop">
                    <div className="lg:w-[120px] w-[100px] lg:h-[120px] h-[100px] mx-auto rounded-full overflow-hidden duration-500">
                      <picture>
                        <img
                          src={item?.url}
                          alt={item?.title || "Category image"}
                          className="w-full h-full object-contain hover:scale-105 duration-500 cursor-pointer"
                        />
                      </picture>
                    </div>
                    <p className="text-center text-sm md:text-base text-black/80 capitalize pt-2 hover:text-primary duration-500">
                      {item.title}
                    </p>
                  </Link>
                </div>
              ))}
            </Slider>
          ) : (
            <p className="text-center">No categories available</p>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Category;
