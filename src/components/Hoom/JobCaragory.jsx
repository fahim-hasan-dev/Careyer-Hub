import { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";


const JobCaragory = () => {
    const [jobCategory, setJobCategory] = useState([])
    useEffect(() => {
        fetch('/public/categories.json')
            .then(res => res.json())
            .then(data => setJobCategory(data))
    }, [])
    return (
        <div className="my-20 text-black">
            <h1 className="text-5xl font-medium text-center">Job Category List</h1>
            <p className="text-gray-500 mt-3 text-base text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-4 gap-4 mt-8">
                {
                    jobCategory.map(category => <CategoryItem key={category.id} category={category} ></CategoryItem>)
                }
            </div>
        </div>
    );
};

export default JobCaragory;