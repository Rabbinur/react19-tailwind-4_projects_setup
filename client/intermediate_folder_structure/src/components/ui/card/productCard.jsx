import React, { useEffect, useState } from "react";
import api from "../../../shared/axios/api";
import Container from "../../../shared/components/Container/Container";
import Title from "../../../shared/components/Title/Title";
import Subtitle from "../../../shared/components/Subtitle/Subtitle";
import Icon from "./../../../shared/Icon/Icon";
import { Link } from "react-router-dom";

const Latestproduct = () => {
  let [product, setproduct] = useState([]);

  const getproductData = async () => {
    try {
      let response = await api.get("/Product.json");
      setproduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getproductData();
  }, []);
  return (
    <>
      <div className="lg:py-10 md:py-5">
        <Container>
          <div className="text-center ">
            <Title>Latest Products</Title>
            <Subtitle>
              We have provide all new car accessories and auto parts for your
              car in our store.
            </Subtitle>
          </div>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-8 gap-5  py-10">
            {product?.map((item) => (
              <div
                key={item?.id}
                className="border group duration-500 hover:shadow-lg"
              >
                <div className="w-full xl:h-[350px] md:h-[300px] h-[200px] bg-[#F7F7F7] relative">
                  <picture>
                    <img
                      src={item?.url[0]}
                      alt="img"
                      className="w-full h-full object-contain"
                    />
                  </picture>
                  <div className="absolute top-0 left-0 w-full h-full bg-black/20 opacity-0 group-hover:opacity-100 duration-500  ">
                    <div className="flex gap-2 justify-center items-center h-full">
                      <Link to="/cart">
                        <div className="bg-white w-[40px] h-[40px] flex justify-center items-center hover:bg-primary duration-500 hover:text-white mt-1 group-hover:mt-0 ">
                          <Icon type="CiShoppingCart" className="text-lg " />
                        </div>
                      </Link>
                      <Link to="/shop">
                        <div className="bg-white w-[40px] h-[40px] flex justify-center items-center hover:bg-primary duration-500 hover:text-white mt-5 group-hover:mt-0 ">
                          <Icon type="GoUnlink" className="text-lg " />
                        </div>
                      </Link>
                      <Link to="/wishlist">
                        <div className="bg-white w-[40px] h-[40px] flex justify-center items-center hover:bg-primary duration-500 hover:text-white mt-10 group-hover:mt-0 ">
                          <Icon type="heart" className="text-lg " />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h2 className=" font-oswald text-black/80 hover:text-primary duration-500 py-2">
                    <Link to={`/productDetails/${item?.id}`}>
                      {item?.title}
                    </Link>
                  </h2>
                  <p className="text-primary font-semibold pb-3">
                    {item?.price} $
                    {!item.offer_Price == 0 ? (
                      <span className="text-gray-500 text-sm font-normal px-2 line-through">
                        {item?.offer_Price} $
                      </span>
                    ) : (
                      ""
                    )}
                  </p>
                  <div className="flex gap-1">
                    <Icon type="star" className="text-primary" />
                    <Icon type="star" className="text-primary" />
                    <Icon type="star" className="text-primary" />
                    <Icon type="star" className="text-primary" />
                    <Icon type="star" className="text-primary" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Latestproduct;
