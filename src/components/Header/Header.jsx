import  profile from "./../../assets/images/profile.png"

const Header = () => {
    return (
        <div className="flex justify-between items-center border-b-2 py-6 mb-10">
            <h1 className="text-4xl font-bold">Bloggy Blog Site</h1>
            <img className="w-14 h-14" src={profile} alt="" />

        </div>
    );
};

export default Header;