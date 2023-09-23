import { useLoaderData, useParams } from "react-router-dom";
import PageHeading from "../PageHeading";
import { saveApplidJobs } from "../Utilites/Utility";


const JobDetails = () => {
    const jobs = useLoaderData()
    const {id} = useParams()
    const intId = parseInt(id)
    const job = jobs.find(job => job.id == id)
    const {job_description,salary,job_title,job_responsibility,educational_requirements,experiences,contact_information}=job
    return (
        <div>
            <PageHeading title='Job Details'></PageHeading>
            <div className="grid grid-cols-3 gap-5 my-14">
                <div className="col-span-2">
                    <h3 className="text-gray-600 leading-7  font-normal text-base"><span className="font-bold text-black">Job Description:</span>{job_description}</h3>
                    <h3 className="text-gray-600 my-5 leading-7 font-normal text-base"><span className="font-bold text-black">Job Responsibility:</span>{job_responsibility}</h3>
                    <h2 className="font-bold text-black my-4">Educational Requirements:</h2>
                    <p className="text-gray-600  leading-7 font-normal text-base">{educational_requirements}</p>
                    <h2 className="font-bold text-black my-4">Experiences:</h2>
                    <p className="text-gray-600  leading-7 font-normal text-base">{experiences}</p>
                </div>
                <div className="text-black bg-[#f4f2ff] p-7 rounded-md ml-7">
                    <h1 className="text-lg font-bold py-5 border-b border-gray-400">Job Details</h1>
                    <h3 className="text-gray-600  pt-5 pb-2 font-normal text-base"><span className="font-bold text-black">Salary : </span>{salary}</h3>
                    <h3 className="text-gray-600   font-normal text-base"><span className="font-bold text-black">Job Title : </span>{job_title}</h3>
                    <h1 className="text-lg font-bold py-5 border-b border-gray-400">Contact Information</h1>
                    <h3 className="text-gray-600 py-4   font-normal text-base"><span className="font-bold text-black">Phone : </span>{contact_information.phone}</h3>
                    <h3 className="text-gray-600   font-normal text-base"><span className="font-bold text-black">Email : </span>{contact_information.email}</h3>
                    <h3 className="text-gray-600 py-3  font-normal text-base"><span className="font-bold text-black">Address : </span>{contact_information.address}</h3>

                    <button onClick={()=>saveApplidJobs(intId)} className=" py-2 text-white w-full mt-10 rounded-md text-lg font-medium bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;