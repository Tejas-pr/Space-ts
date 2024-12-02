import logoo from "../assets/logoo.png";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-black/20 py-2 md:py-4">
      <div className="flex items-center ml-10 md:ml-20">
        <img src={logoo} alt="logo" className="w-12" />
      </div>
      <div className="text-white">
        <ul className="hidden md:flex gap-x-10">
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#technology">Technology</a>
          </li>
          <li>
            <a href="#galaxy">Galaxy</a>
          </li>
          <li>
            <a href="#satellite">Satellite</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center mr-10 md:mr-20">
        <button className="text-white border-2 px-3 py-1 rounded-md">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
