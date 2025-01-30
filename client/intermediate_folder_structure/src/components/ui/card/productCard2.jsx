import React, { useEffect, useState } from "react";
import Title from "../../../../shared/components/Title/Title";
import Container from "../../../../shared/components/Container/Container";
import api from "../../../../shared/axios/Api";
import { Link } from "react-router-dom";

const BestSelling = () => {
  let [product, setproduct] = useState([]);
  let getproductData = async () => {
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
      <div className="py-20">
        <Container>
          <Title title="BEST Selling" />
          <p className="text-center text-gray text-sm lg:text-base pt-5 capitalize font-medium">
            Lorem ipsum dolor sit amet.
          </p>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 
           lg:pt-20 pt-10"
          >
            {product?.map((item) => (
              <div key={item.id} className="my-5 overflow-hidden">
                <Link
                  to={`/productDetails/${item.id}`}
                  className="overflow-hidden  "
                >
                  <div className="bg-[#F9F9F9]">
                    <img
                      src={item?.url?.[0]}
                      alt=""
                      className="w-full lg:h-[300px]  hover:scale-105 duration-300 h-[200px] p-5  object-contain
                      "
                    />
                  </div>
                </Link>
                <h2 className="text-sm lg:text-xl capitalize font-medium text-black lg:py-5 py-2">
                  {item.title}
                </h2>

                <p className="text-sm  font-medium text-primary pb-2 flex gap-2">
                  {item?.price?.offer_Price !== 0
                    ? item?.price?.offer_Price
                    : ""}
                  <span
                    className={`text-gray ${
                      item?.price?.offer_Price !== 0 ? "line-through " : " "
                    }`}
                  >
                    {" "}
                    {item?.price?.regular_Price}
                  </span>
                </p>
                <div className="flex py-2 gap-2">
                  {item?.url?.slice(1).map((img, index) => (
                    <div key={index}>
                      <div className="rounded-full border  border-primary">
                        <img
                          src={img}
                          alt={`img-${index}`}
                          className="size-7 border-2 border-white rounded-full object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default BestSelling;
