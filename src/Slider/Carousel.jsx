import { Link } from "react-router-dom";

const Carousel = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div
            className="hero min-h-screen rounded-2xl"
            style={{
              backgroundImage: "url(https://i.ibb.co/1qyrP8W/sundarban.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-lg">
                <h1 className="mb-5 text-5xl font-bold text-teal-400 font-serif">
                  Streamlining Your Tourism Experience
                </h1>
                <p className="mb-5 text-lg  text-white font-normal opacity-100 font-serif">
                  Zacky_T.Travel empowers you to explore the world with ease.
                  Join us and embark on a journey where every moment is an
                  adventure waiting to unfold.
                </p>
                <Link to="/register" className="btn bg-slate-500 font-serif">
                  Let's Get Started
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div
            className="hero min-h-screen rounded-2xl"
            style={{
              backgroundImage: "url(https://i.ibb.co/m8CMnXw/Cox-s.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold text-teal-400 font-serif">
                  Streamlining Your Tourism Experience
                </h1>
                <p className="mb-5 text-lg  text-white font-normal opacity-100 font-serif">
                  Zacky_T.Travel empowers you to explore the world with ease.
                  Join us and embark on a journey where every moment is an
                  adventure waiting to unfold.
                </p>
                <Link to="/register" className="btn bg-slate-500 font-serif">
                  Let's Get Started
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div
            className="hero min-h-screen rounded-2xl"
            style={{
              backgroundImage: "url(https://i.ibb.co/K9ymV4p/Rangamati.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold text-teal-400 font-serif">
                  Streamlining Your Tourism Experience
                </h1>
                <p className="mb-5 text-lg  text-white font-normal opacity-100 font-serif">
                  Zacky_T.Travel empowers you to explore the world with ease.
                  Join us and embark on a journey where every moment is an
                  adventure waiting to unfold.
                </p>
                <Link to="/register" className="btn bg-slate-500 font-serif">
                  Let's Get Started
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <div
            className="hero min-h-screen rounded-2xl"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/yP5FQ1Z/kuakata-sea-beach.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold text-teal-400 font-serif">
                  Streamlining Your Tourism Experience
                </h1>
                <p className="mb-5 text-lg  text-white font-normal opacity-100 font-serif">
                  Zacky_T.Travel empowers you to explore the world with ease.
                  Join us and embark on a journey where every moment is an
                  adventure waiting to unfold.
                </p>
                <Link to="/register" className="btn bg-slate-500 font-serif">
                  Let's Get Started
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
