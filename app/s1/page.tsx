import Image from "next/image";

export default function S1() {
  return (
    <>
      <div className="bg-zinc-950 min-h-screen">
        <div className=" text-center font-bold text-5xl pt-24 pb-16 text-white">
          Therapy Session
        </div>
        <div className="flex flex-row p-20 justify-between gap-8 ">
          <div className="bg-zinc-900 p-8 rounded-lg ">
            <div className="text-white text-2xl font-semibold">$99/session</div>
            <div className="text-white text-2xl pt-10 font-semibold">
              Dr. David Peterson, MD
            </div>
            <div className="text-white text-2xl pt-10 font-semibold">
              6+Experience
            </div>
            <div className="flex justify-center">
              <button className="mt-12 w-[200px] px-6 py-2  bg-col4 text-black font-semibold rounded-full shadow-md hover:bg-col3 transition duration-200 justify-center">
                Book Now
              </button>
            </div>
          </div>

          <div className="bg-zinc-900 p-8 rounded-lg">
            <div className="text-white text-2xl font-semibold">
              $100/session
            </div>
            <div className="text-white text-2xl pt-10 font-semibold ">
              Dr. Olivia Martin, PsyD
            </div>
            <div className="text-white text-2xl pt-10 font-semibold">
              7+Experience
            </div>
            <div className="flex justify-center">
              <button className="mt-12 w-[200px] px-6 py-2  bg-col4 text-black font-semibold rounded-full shadow-md hover:bg-col3 transition duration-200 justify-center">
                Book Now
              </button>
            </div>
          </div>
          <div className="bg-zinc-900 p-8 rounded-lg ">
            <div className="text-white text-2xl font-semibold">$88/session</div>
            <div className="text-white text-2xl pt-10 font-semibold">
              Dr.Rebecca Taylor, LPC
            </div>
            <div className="text-white text-2xl pt-10 font-semibold">
              3+Experience
            </div>
            <div className="flex justify-center">
              <button className="mt-12 w-[200px] px-6 py-2  bg-col4 text-black font-semibold rounded-full shadow-md hover:bg-col3 transition duration-200 justify-center">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
