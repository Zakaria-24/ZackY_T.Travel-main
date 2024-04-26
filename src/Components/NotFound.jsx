import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section className="flex items-center h-full sm:p-16  dark:bg-gray-50 dark:text-gray-800">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
          <img
            className=" w-full"
            src="https://i.ibb.co/rG4xJ9P/smartphone.png"
            alt=""
          />
          <p className="text-3xl">
            OPPS!!!!!!!!
            <br />
            <span className="text-red-500 font-bold">PAGE NOT FOUND </span>
          </p>
          <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
            <button
              onClick={() => navigate(-1 || "/")}
              className="flex items-center justify-center w-1/2 px-5 py-1 text-lg transition-colors duration-200 bg-black text-white border rounded-lg gap-x-2 sm:w-auto   hover:bg-gray-100 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 rtl:rotate-180 text-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>

              <span className=" p-4">Back to Previous Page</span>
            </button>

            <button
              className="flex items-center justify-center w-1/2 px-5 py-1 text-lg text-white transition-colors duration-200 bg-rose-600 border rounded-lg gap-x-2 sm:w-auto   hover:bg-gray-200 "
              onClick={() => navigate("/")}
            >
              Go Home
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
