

const CategoryItem = ({category}) => {
    const {logo,category_name,availability}=category
    return (
        <div className="p-4">
            <img className="p-2 rounded-md bg-[#edeeff]" src={logo} alt="" />
            <h2 className="text-2xl font-medium mt-4 ">{category_name}</h2>
            <p className="text-base text-gray-500 mt-2"> {availability}</p>
        </div>
    );
};

export default CategoryItem;