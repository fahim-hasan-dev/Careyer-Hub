import Banner from "./Banner";
import FeaturedJobs from "./FeaturedJobs";
import JobCaragory from "./JobCaragory";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobCaragory ></JobCaragory>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;