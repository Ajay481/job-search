import React from "react";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/jobSlice";

const JobCard = ({ info }) => {
  
  const dispatch = useDispatch();
  dispatch(addItems(info));

  return (
    <div className=" w-[48rem] m-auto text-center">
      <div className="m-5 p-5 hover:border-2 border-gray-300">
        <p className="text-2xl text-blue-500 font-bold">Company Name: {info?.company?.display_name}</p>
        <p className="text-2xl">Position: {info?.title}</p>
        <p className="text-gray-500">Salary: ₹{info?.salary_max}</p>
        <button className="bg-green-600 text-white mt-4 p-2 rounded-full font-bold w-[30%] h-12">
          View Detail
        </button>
      </div>
    </div>
  );
};

export default JobCard;
