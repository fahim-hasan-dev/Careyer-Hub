import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollarCircle} from "react-icons/ai";
import { Link } from "react-router-dom";
const AppliedJobCard = ({job}) => {
    const {id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary}=job
    return (
        <div className="ml-[100px] mb-14 grid grid-cols-6 gap-10  items-center">
                <img className="bg-[#f4f4f4] py-16 px-5 rounded-md" src={logo} alt="" />   

            <div className="col-span-3">
            <h1 className="text-2xl font-medium mt-4">{job_title}</h1>
            <p className="my-2 text-base font-medium text-gray-500">{company_name}</p>
            <div className="flex gap-3">
                <button className="border rounded border-[#7E90FE] px-4 py-[5px] text-[#7E90FE]">{remote_or_onsite}</button>
                <button className="border rounded border-[#7E90FE] px-4 py-[5px] text-[#7E90FE]">{job_type}</button>
            </div>

            <div className="flex gap-4 mt-3 mb-7 ">
                <div className="flex items-center gap-2 ">
                    <span className="text-xl"><CiLocationOn></CiLocationOn></span>
                    <p className="font-medium text-gray-500">{location}</p>
                </div>
                 <div className="flex items-center gap-2 ">
                    <span className="text-xl text-gray-500"><AiOutlineDollarCircle></AiOutlineDollarCircle></span>
                    <p className="font-medium text-gray-500">{salary}</p>
                </div>
            </div>
            </div>
           
            <Link to={`/job/${id}`} className="text-xl ml-auto col-span-2 mr-20 font-medium text-white px-4 py-2 h-12  rounded bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">View Details</Link>

        </div>
    );
};

export default AppliedJobCard;



