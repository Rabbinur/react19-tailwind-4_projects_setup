import React from "react";
import { PropTypes } from "prop-types";

const Underline = ({ children, className, ...props }) => {
  return (
    <div
      className={` flex gap-10  items-center justify-start font-helvetica uppercase font-[600]
         text-[#AC8C66] text-[28px] lg:text-[36px] tracking- wider lg:tracking- [0.1em] ${className}`}
      {...props}
    >
      {children} <div className="w-[75px] h-1 mt-2 bg-primary"></div>
    </div>
  );
};

export default Underline;

Underline.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  props: PropTypes.string,
};
