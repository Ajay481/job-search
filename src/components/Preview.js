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
      <div className="bg-gray-300 w-[48rem] m-auto p-8 mt-20">
        <p>Company Name: {jobListId[0]?.company?.display_name}</p>
        <p className="mt-5">Contract: {jobListId[0]?.contract_type}</p>
        <p className="mt-5">Description: {jobListId[0]?.description}</p>
        <p className="mt-5">
          Location: {jobListId[0]?.location?.area?.join(",")}
        </p>
        <p className="mt-5">Job Position: {jobListId[0]?.title}</p>
        <p className="mt-5">Salary: ₹{jobListId[0]?.salary_max}</p>
      </div>
      <div className="bg-yellow-200 w-[48rem] m-auto p-8 mt-48">
        <p>Name: {preview[0]?.name}</p>
        <p>Email: {preview[0]?.email}</p>
        <p>Cover Letter Note: {preview[0]?.cover}</p>
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
