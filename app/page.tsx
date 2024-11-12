import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/home.mp4" type="video/mp4"></source>
        </video>
        <header className="absolute top-0 right-0 w-full p-4 bg-opacity-60 text-black z-20  ">
          <nav className="flex flex-col space-y-4 md:space-y-0 md:space-x-8 md:flex-row justify-end">
            <ul className="flex flex-col space-y-2 md:space-y-0 md:flex-row gap-6 ">
              <li>
                <a href="/about" className="text-2xl font-serif  ">
                  About us
                </a>
              </li>
              <li>
                <a href="/therapists" className="text-2xl font-serif ">
                  Therapists
                </a>
              </li>
              <li>
                <a href="/features" className="text-2xl font-serif ">
                  Features
                </a>
              </li>
              <li>
                <a href="/contact" className="text-2xl font-serif ">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="mt-56 text-center text-5xl font-bold text-white">
            Welcome to ZenPathways
          </div>
          <div className="text-center text-3xl mt-2 text-white">
            Unlock the waves to your mental wellness journey today!
          </div>
          <div className="flex items-center justify-center">
            <a href="/features">
              <button className="mt-12 px-6 py-2 bg-col4 text-black font-semibold rounded shadow-md shadow-col2 hover:bg-col3 transition duration-200">
                Get started
              </button>
            </a>
          </div>
        </header>
      </div>

      <div>
        <div className="bg-zinc-950">
          <div className="flex flex-row">
            <Image
              src="/about.jpg"
              alt="coffee"
              height={900}
              width={360}
              className="ml-16 mt-8"
            />
            <div className="pt-48 text-center text-5xl font-bold text-white">
              About Us
              <div className="text-center text-xl mt-16 ml-4 mr-4 text-white">
                At ZenPathways, you can connect with experienced therapists,
                attend virtual therapy sessions from the comfort of your home,
                and access a range of soothing resources like calming music,
                uplifting movies, and a personal journal for reflection. Our
                mission is to provide you with a comprehensive platform for
                self-care, growth, and healing, guiding you toward a more
                peaceful, fulfilled life. <br /> <br />
                Let the waves of wellness carry you forward on your journey to
                mental well-being.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-zinc-950">
        <div className=" text-center font-bold text-5xl pt-32 pb-16 text-white">
          Features
        </div>
        <div className="flex flex-row p-28 justify-between gap-8 ">
          <div className="bg-zinc-900 p-8 rounded-lg shadow-md shadow-white hover:scale-110">
            <Image src="/music.png" alt="music" height={30} width={50} />
            <div className="text-white text-2xl font-semibold">
              Music Recommendations
            </div>
            <div className="text-white ">
              Handpicked tunes chosen just for you.
            </div>
          </div>

          <div className="bg-zinc-900 p-8 rounded-lg shadow-md shadow-white hover:scale-110">
            <Image src="/mov.png" alt="music" height={30} width={50} />
            <div className="text-white text-2xl font-semibold">
              Movie Recommendations
            </div>
            <div className="text-white">
              Comforting movies for a cozy, relaxing escape.
            </div>
          </div>
          <div className="bg-zinc-900 p-8 rounded-lg shadow-md shadow-white hover:scale-110">
            <Image src="/diar.png" alt="music" height={30} width={50} />
            <div className="text-white text-2xl font-semibold">
              Personal Journal
            </div>
            <div className="text-white">
              Track your thoughts freely, all in one place.
            </div>
          </div>
        </div>
      </div>

      <div className=" text-center font-bold text-5xl pt-28 text-white bg-zinc-950">
        Contact Us
      </div>
      <div className="bg-zinc-950 min-h-full flex justify-center items-center p-28">
        {/* Cards Section */}
        <div className="flex flex-wrap justify-center gap-8 px-4 items-center">
          {/* Card 1 */}
          <div className="bg-zinc-900 border border-black rounded-lg shadow-md shadow-white w-96 h-48 p-7 ">
            <div className="flex justify-center items-center">
              <Image width={48} height={48} src="/email.png" alt="new-post" />
            </div>
            <h2 className="text-xl font-semibold mb-4 text-white text-center pt-3">
              Email
            </h2>
            <a
              href="mailto:zenpathways@gmail.com"
              className="text-white text-center pl-16"
            >
              zenpathways@gmail.com
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-zinc-900 border border-black rounded-lg shadow-md shadow-white w-96 h-48 p-7">
            <div className="flex justify-center items-center">
              <Image width={48} height={48} src="/phone.png" alt="new-post" />
            </div>
            <h2 className="text-xl font-semibold mb-4 text-white text-center pt-3">
              Contact
            </h2>
            <a href="tel:9807654321" className="text-white text-center pl-24">
              +91 9807654321
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-zinc-900 border border-black rounded-lg shadow-md shadow-white w-96 h-48 p-7">
            <div className="flex justify-center items-center">
              <Image
                width={48}
                height={48}
                src="/location.png"
                alt="new-post"
              />
            </div>
            <h2 className="text-xl font-semibold mb-4 text-white text-center pt-3">
              Location
            </h2>
            <p className="text-white text-center">
              Visakhapatnam, Andhra Pradesh
            </p>
          </div>
        </div>
      </div>
      <footer className="footer footer-center bg-base-300 text-base-content p-4 bg-zinc-950 justify-center text-center text-white pt-28">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All rights reserved by
            ZenPathways Ltd
          </p>
        </aside>
      </footer>
    </>
  );
}
