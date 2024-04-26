import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar p-4">
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
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              {/* <li className=" bg-teal-600 rounded-2xl text-white">
                <NavLink to="/allTouristsSpot">All Tourists Spot</NavLink>
              </li>

              {user && (
                 <>
                 <li className=" bg-teal-600 rounded-2xl mr-2 text-white">
                   <NavLink to="/addTouristsSpot">Add Tourists Spot</NavLink>
                 </li>
                 <li className=" bg-teal-600 rounded-2xl mr-2 text-white">
                   <NavLink to="/myList">My List</NavLink>
                 </li>
               </>
              )} */}
            </ul>
          </div>
          <div className="tooltip tooltip-right" data-tip="Zacky_T.Travel">
            <Link to="/">
              <img
                className="w-28 h-12 rounded-md"
                src="https://i.ibb.co/3vTKL1Y/Logo2.png"
                // https://i.ibb.co/mDyk53S/Logo.png

                alt="image"
              />
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            {/* <li className=" bg-teal-600 rounded-2xl text-white">
                <NavLink to="/allTouristsSpot">All Tourists Spot</NavLink>
              </li>

            {user && (
              <>
                <li className=" bg-teal-600 rounded-2xl mr-2 text-white">
                  <NavLink to="/addTouristsSpot">Add Tourists Spot</NavLink>
                </li>
                <li className=" bg-teal-600 rounded-2xl mr-2 text-white">
                  <NavLink to="/myList">My List</NavLink>
                </li>
              </>
            )} */}
          </ul>
        </div>
        <div className="navbar-end">
          <button>End</button>
          {/* {user ? (
            <>
              <div
                className="tooltip tooltip-left w-10 rounded-full"
                data-tip={user?.displayName || "user name not found"}
              >
                <img
                  className=" rounded-full h-10 w-10"
                  alt="image"
                  src={
                    user?.photoURL || "https://i.ibb.co/h8QtYNY/preview-xl.jpg"
                  }
                />
              </div>
              <Link
                to="/login"
                className=" btn hover:bg-teal-200 bg-teal-400 px-4 rounded-2xl ml-2"
                onClick={() => logOut()}
              >
                Log Out
              </Link>
            </>
          ) : (
            <div>
            <Link to="/login">
              <button className="btn hover:bg-teal-300 bg-teal-500 rounded-2xl">
                Log In
              </button>
            </Link>
            <Link to="/register">
              <button className="btn hover:bg-teal-300 bg-teal-500 rounded-2xl">
                Register
              </button>
            </Link>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
