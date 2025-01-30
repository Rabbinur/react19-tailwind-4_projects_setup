import React, { useEffect, useState } from "react";

const Shipping = () => {
  let [shipping, setShipping] = useState([]);
  useEffect(() => {
    fetch("shipping.json")
      .then((res) => res.json())
      .then((data) => setShipping(data));
  }, []);
  return (
    <>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 lg:pt-20 pt-10 px-5">
        {shipping?.map((item) => (
          <div
            key={item.id}
            className="text-center border lg:py-10 py-5 hover:shadow-2xl duration-500"
          >
            <picture>
              <img
                src={item.url}
                alt="img"
                className="w-[40px] h-[50px] object-contain mx-auto"
              />
            </picture>
            <h2 className="text-sm lg:text-base font-bold uppercase lg:py-3 py-1">
              {item.title}
            </h2>
            <p className="text-[#757575] text-sm">{item.short_desrciption}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Shipping;
