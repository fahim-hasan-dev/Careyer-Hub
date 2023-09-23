import { useEffect, useState } from "react";
import JobItem from "./JobItem";


const FeaturedJobs = () => {
    const [jobs, setJob] = useState([])
    const [showJob, setShowJob] = useState(4)
    useEffect(() => {
        fetch('/public/jobs.json')
            .then(res => res.json())
            .then(data => setJob(data))
    }, [])

   
    return (
        <div className="text-black mb-12">
            <h1 className="text-5xl font-medium text-center">Featured Jobs</h1>
            <p className="text-gray-500 mt-3 text-base text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid mt-12 grid-cols-2 gap-6">
                {
                    jobs.slice(0, showJob).map(job => <JobItem key={job.id} job={job}></JobItem>)
                }
            </div>
            <div className={showJob===jobs.length ? 'hidden' : ''}>
                <div className="text-center">
                <button onClick={()=>setShowJob(jobs.length)} className="text-xl font-medium  text-white px-4 py-3  rounded bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Show all jobs</button>

                </div>
            </div>

        </div>
    );
};

export default FeaturedJobs;