import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Modal } from "./Modal";
import Form from "./Form";

const JobDetail = () => {
  const { jobId } = useParams();
  const jobDet = useSelector((store) => store?.job?.jobLists);
  const [close, setClose] = useState(false);

  const jobListId = jobDet.filter((c) => c?.id === jobId);

  const applyHandler = () => {
    setClose(true);
  };

  return (
    <div className="w-[48rem] m-auto p-8 mt-48 border-b-8 bg-slate-50">
      <p className="text-2xl text-blue-500 font-bold">Company Name: {jobListId[0]?.company?.display_name}</p>
      <p className="mt-5 text-2xl">Job Position: {jobListId[0]?.title}</p>
      <p className="mt-5 text-xl">Contract: {jobListId[0]?.contract_type}</p>
      <p className="font-bold text-2xl mt-5">About the job</p>
      <p className="mt-3"> {jobListId[0]?.description}</p>
      <p className="mt-5">
        Location: {jobListId[0]?.location?.area?.join(",")}
      </p>
      <p className="mt-5 text-gray-500">Salary: ₹{jobListId[0]?.salary_max}</p>
      <button
        className="bg-pink-600 text-white mt-4 p-2 rounded-full font-bold w-[30%] h-12"
        onClick={applyHandler}
      >
        Apply
      </button>
      {close ? (
        <Modal onClose={() => setClose(false)}>
          <Form jobId={jobId}/>
        </Modal>
      ) : null}
    </div>
  );
};

export default JobDetail;
