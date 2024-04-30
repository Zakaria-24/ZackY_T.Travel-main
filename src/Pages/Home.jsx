import { useForm } from "react-hook-form";
import Country from "../Components/Country";
import Carousel from "../Slider/Carousel";
import HomeSpots from "./../Components/HomeSpots";
import { useState } from "react";
import toast from "react-hot-toast";

const Home = () => {
  const [success, setSuccess] = useState();
  console.log(success);

  const { handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { email } = data;
    setSuccess("");

    const newNewsletter = {
      email,
    };
    // send data to the server
    fetch("https://southeast-asia-server.vercel.app/newsletter", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newNewsletter),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Added successfully");
        }
      });
  };

  return (
    <div className="bg-slate-300">
      <Carousel></Carousel>

      <div className="container mx-auto my-16">
        <HomeSpots></HomeSpots>
      </div>

      <div className="container mx-auto py-10 pb-20">
        <h1 className=" flex justify-center my-6  text-5xl font-bold text-slate-600 font-serif">
          Countries Historical Place:{}
        </h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Country></Country>
        </div>
      </div>

      {/* extra section 1  */}
      <div className=" mb-16">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-90"></div>

          <div className="hero-content text-center text-neutral-content">
            <div className=" space-y-20">
              <div>
                <h1 className="text-5xl font-bold text-teal-500 font-serif pb-8">
                  HOLIDAY TYPE
                </h1>
                <p className="text-xl font-mono">
                  Get explore your dream and travel the world with{" "}
                  <span>Zacky_T.Travels</span>
                </p>
              </div>
              <div className="flex flex-col lg:flex-row gap-10 ">
                <img
                  className="rounded-full w-40 h-40"
                  src="https://i.ibb.co/1KcxNvW/summer-beach-logo-template-441059-36.jpg"
                  alt=""
                />
                <img
                  className="rounded-full  w-40 h-40"
                  src="https://i.ibb.co/tcS5N1f/cruise1.jpg"
                  alt=""
                />
                <img
                  className="rounded-full  w-40 h-40"
                  src="https://i.ibb.co/K2ryyc4/honeymoon-icon-trendy-honeymoon-logo-concept-white-backgroun-honeymoon-icon-trendy-honeymoon-logo-co.webp"
                  alt=""
                />
                <img
                  className="rounded-full w-40 h-40"
                  src="https://i.ibb.co/4gSpWLt/adventure-logo-free-vector.jpg"
                  alt=""
                />
                <img
                  className="rounded-full w-40 h-40"
                  src="https://i.ibb.co/S6bBY6T/citybreak-icons-05.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Extra section 2 */}
      <div className=" container mx-auto pb-16">
        <div className=" bg-teal-500 py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold text-slate-600 mb-4">
              Subscribe to Our Newsletter! <br /> And Get notified about
              upcoming Exclusive Deals and Discounts.
            </h2>
            <p className="text-lg text-white mb-6">
              Access exclusive deals and discounts on accommodations, tours, and
              activities, saving you money on your travels.
            </p>
            <p className=" mb-4">
              You will only receive a single email when a new product is added
              or when a new discount code is available.
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex justify-center"
            >
              <input
                className="w-full sm:w-auto rounded-l-lg px-4 py-2 bg-white text-gray-900"
                type="email"
                name="email"
                placeholder="Your Email Address"
              ></input>
              <button
                className="bg-white hover:bg-gray-200 text-gray-900 font-semibold px-4 py-2 rounded-r-lg"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
