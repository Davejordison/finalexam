//import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-full">
    <AiOutlineLoading3Quarters className="animate-spin text-4xl" />
  </div>
);

export default LoadingSpinner;
