import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPreview } from "../utils/jobSlice";
import { useNavigate } from "react-router-dom";

const Form = ({jobId}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cover, setCover] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addPreview({ name, email, cover }));
    navigate(`/preview/${jobId}`)
  };

  return (
    <div className="w-[48rem] m-auto text-center">
      <label>Name</label>
      <div>
        <input
          className="h-10 p-2 rounded-md border border-black mt-5 mb-5"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <label>Email</label>
      <div>
        <input
          className="h-10 p-2 rounded-md border border-black mt-5 mb-5"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <label>Cover Letter Note</label>
      <div>
        <textarea
          className="h-50 p-2 rounded-md border border-black mt-5"
          type="text"
          onChange={(e) => setCover(e.target.value)}
          value={cover}
        />
      </div>
      <button
        className="bg-gray-600 text-white mt-4 p-2 rounded-full font-bold w-[30%] h-12"
        onClick={submitHandler}
      >
        Submit
      </button>
    </div>
  );
};

export default Form;
