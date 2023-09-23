

const PageHeading = ({title}) => {
    return (
        <div className="bg-[url('/src/assets/images/bg1.png')] py-20 bg-contain bg-no-repeat bg-left-bottom">
            <h1 className="text-center text-4xl font-bold text-black">{title}</h1>
            <div></div>
        </div>
    );
};

export default PageHeading;