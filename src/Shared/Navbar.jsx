import { NavLink } from "react-router-dom";
import CustomContex from "../Utilis/CustomContex";
import { useEffect, useState } from "react";
// import TextLottie from "../TextLottie.json";
// import Lottie from "lottie-react";

const Navbar = () => {
  const { user, logOut } = CustomContex();

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  return (
    <div>
      <div className="navbar p-2 bg-slate-600 font-serif text-slate-300">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className=" bg-teal-600 rounded-2xl font-serif text-slate-500 ">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className=" bg-teal-600 rounded-2xl ">
                <NavLink to="/allTouristsSpot">All Tourists Spot</NavLink>
              </li>

              {user && (
                <>
                  <li className=" bg-teal-600 rounded-2xl ">
                    <NavLink to="/addTouristsSpot">Add Tourists Spot</NavLink>
                  </li>
                  <li className=" bg-teal-600 rounded-2xl ">
                    <NavLink to="/myList">My List</NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div>
            {/* <Lottie animationData={TextLottie} /> */}
            <h1 className=" text-2xl font-bold ">Zacky_T.Travels</h1>
          </div>
          {/* <div className="tooltip tooltip-right" data-tip="Zacky_T.Travels">
            <Link to="/">
              <img
                className="w-28 h-8 rounded-md"
                src="https://i.ibb.co/3vTKL1Y/Logo2.png"
                alt="image"
              />
            </Link>
          </div> */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
            <li className=" bg-teal-600 rounded-2xl mr-2 ">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className=" bg-teal-600 rounded-2xl mr-2">
              <NavLink to="/allTouristsSpot">All Tourists Spot</NavLink>
            </li>

            {user && (
              <>
                <li className=" bg-teal-600 rounded-2xl mr-2 ">
                  <NavLink to="/addTouristsSpot">Add Tourists Spot</NavLink>
                </li>
                <li className=" bg-teal-600 rounded-2xl ">
                  <NavLink to="/myList">My List</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {/* theme controllar */}
          <label className="swap swap-rotate mr-2">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              onChange={handleToggle}
              checked={theme === "light" ? false : true}
            />

            {/* sun icon */}
            <svg
              className="swap-on fill-current w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-off fill-current w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          {user ? (
            <>
              <div
                className="tooltip tooltip-left w-10 rounded-full"
                data-tip={user?.displayName || "user name not found"}
              >
                <img
                  className=" rounded-full h-10 w-10"
                  alt="image"
                  src={user?.photoURL || "https://i.ibb.co/3vTKL1Y/Logo2.png"}
                />
              </div>
              <NavLink
                to="/login"
                className=" hover:bg-teal-00 bg-teal-600 px-4 py-2 rounded-2xl ml-2 mr-2 "
                onClick={() => logOut()}
              >
                LogOut
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className=" hover:bg-teal-200 bg-teal-600 px-4 py-2  rounded-2xl ml-2 "
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className=" hover:bg-teal-200 bg-teal-600 px-4 py-2  rounded-2xl ml-2 mr-2 "
              >
                Register
              </NavLink>
            </>
          )}
        </div>
        {/* theme controllar */}
        {/* <div>
          <label className="cursor-pointer grid place-items-center ">
            <input
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
            />
            <svg
              className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
