import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const Preview = () => {
  const { jobId } = useParams();
  const jobDet = useSelector((store) => store.job.jobLists);
  const preview = useSelector((store) => store.job.preview);
  const navigate = useNavigate();

  const jobListId = jobDet.filter((c) => c?.id === jobId);

  return (
    <div>
      <p className="text-green-400 bg-gray-50 border-b-8 w-[48rem] text-center text-3xl m-auto p-8 mt-3 rounded-lg font-bold">
        Submit Successfully
      </p>
      <div className="border-b-8 bg-slate-50 w-[48rem] m-auto p-8 mt-20 rounded-lg">
        <p className="text-2xl text-blue-500 font-bold">Company Name: {jobListId[0]?.company?.display_name}</p>
        <p className="mt-5 text-2xl">Job Position: {jobListId[0]?.title}</p>
        <p className="mt-5 text-xl">Contract: {jobListId[0]?.contract_type}</p>
        <p className="font-bold text-2xl mt-5">About the job</p>
        <p className="mt-3">{jobListId[0]?.description}</p>
        <p className="mt-5">
          Location: {jobListId[0]?.location?.area?.join(",")}
        </p>
        <p className="mt-5 text-gray-500">Salary: ₹{jobListId[0]?.salary_max}</p>
      </div>
      <div className="bg-slate-100 w-[48rem] m-auto p-8 mt-16 border-b-8 rounded-lg">
        <p className="text-xl">Name: {preview[0]?.name}</p>
        <p className="mt-5 text-xl">Email: {preview[0]?.email}</p>
        <p className="mt-5 text-gray-500">Cover Letter Note: {preview[0]?.cover}</p>
        <button
          className="bg-orange-600 text-white mt-4 p-2 rounded-full font-bold w-[30%] h-12"
          onClick={() => navigate("/landing")}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default Preview;
