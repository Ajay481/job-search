import React, { useState } from "react";
import { Link } from "react-router-dom";
import JobCard from "./JobCard";

const LandingScreen = () => {
  const [category, setCategory] = useState("java");
  const [jobList, setJobList] = useState([]);

  const searchHandler = async () => {
    const data = await fetch(
      `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=db97c802&app_key=88261242d15ec85ae2ef70ef3d84ee75&results_per_page=20&what=${category}%20developer&content-type=application/json`
    );
    const json = await data.json();

    setJobList(json?.results);
  };

  return (
    <div className="h-[100vh]">
      <div className="bg-green-300 w-[48rem] m-auto text-center p-8 mt-24 rounded-lg">
        <p className="text-2xl font-bold">
          What programming language you're looking for a job ?
        </p>
        <div>
          <select
            className="h-10 p-2 rounded-md border border-black mt-5"
            name="category"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            <option>java</option>
            <option>javascript</option>
            <option>c++</option>
            <option>python</option>
          </select>
        </div>
        <button
          className="bg-indigo-600 text-white mt-4 p-2 rounded-full font-bold w-[30%] h-12"
          onClick={searchHandler}
        >
          Search
        </button>
      </div>
      <div>
        {jobList?.map((jobs) => (
          <Link to={"/jobdetail/" + jobs?.id} key={jobs?.id}>
            <JobCard info={jobs} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LandingScreen;
