import React from "react";
import Container from "../../../shared/components/Container/Container";
import Icon from "../../../shared/Icon/Icon";

const Shipping = () => {
  return (
    <>
      <Container>
        <div className="grid sm:grid-cols-3 grid-cols-1 lg:gap-10 gap-5 lg:py-5 py-10 my-5">
          <div className="lg:px-10 lg:py-20 py-2 text-center hover:shadow p-1 duration-500">
            <span>
              <Icon
                type="LiaShippingFastSolid"
                className="lg:text-7xl text-4xl text-gray-500 text-center mx-auto"
              />
            </span>
            <p className="lg:text-xl font-oswald lg:py-5 py-2">Free Delivery</p>
            <p className="text-gray-400 text-sm lg:text-base">
              If you are going to use of Lorem, you need to be sure there
              anything
            </p>
          </div>
          <div className="lg:px-10 lg:py-20 py-2 text-center hover:shadow p-1 duration-500">
            <span>
              <Icon
                type="FaHandHoldingDollar"
                className="lg:text-7xl text-4xl text-gray-500 text-center mx-auto"
              />
            </span>
            <p className="lg:text-xl font-oswald lg:py-5 py-2">30 Day Return</p>
            <p className="text-gray-400 text-sm lg:text-base">
              If you are going to use of Lorem, you need to be sure there
              anything
            </p>
          </div>
          <div className="lg:px-10 lg:py-20 py-2 text-center hover:shadow p-1 duration-500">
            <span>
              <Icon
                type="TfiHeadphoneAlt"
                className="lg:text-7xl text-4xl text-gray-500 text-center mx-auto"
              />
            </span>
            <p className="lg:text-xl font-oswald lg:py-5 py-2">27/4 Support</p>
            <p className="text-gray-400 text-sm lg:text-base">
              If you are going to use of Lorem, you need to be sure there
              anything
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Shipping;
