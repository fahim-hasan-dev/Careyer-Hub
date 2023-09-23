import { useLoaderData } from "react-router-dom";
import PageHeading from "../PageHeading";
import { getStoredData } from "../Utilites/Utility";
import { useEffect, useState } from "react";
import AppliedJobCard from "../AppliedJobCard";


const Jobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([])
    const [showJobs, setShowJobs] = useState([])

    const displayHandle=(filter)=>{
        if(filter==='All'){
            setShowJobs(appliedJobs)
        }else if (filter === 'Remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === "Remote")
            setShowJobs(remoteJobs)
        }else if (filter === "Onsite"){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite==="Onsite")
            setShowJobs(onsiteJobs)
        }
    }

    const allJobs = useLoaderData()

    useEffect(() => {
        const lsJobs = getStoredData()
        const jobsApplied = allJobs?.filter(job => lsJobs?.includes(job.id))
        setAppliedJobs(jobsApplied)
        setShowJobs(jobsApplied)
    }, [allJobs])

    return (
        <div>
            <PageHeading title="Applied Jobs"></PageHeading>
            <div className="dropdown  dropdown-bottom flex justify-end">
                <label tabIndex={0} className=" bg-gray-300 rounded-md shadow-md text-black text-xl px-3 py-2 m-1">Filter By job type</label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li onClick={()=>displayHandle('All')}><a>All</a></li>
                    <li onClick={()=>displayHandle('Remote')}><a>Remote</a></li>
                    <li onClick={()=>displayHandle('Onsite')}><a>Onsite</a></li>
                </ul>
            </div>

            {
                showJobs?.map(job => <AppliedJobCard key={job.id} job={job}></AppliedJobCard>)
            }

        </div>
    );
};

export default Jobs;