import Image from "next/image";

export default function Features() {
  return (
    <>
      <div className="bg-zinc-950">
        <div className="text-white text-5xl text-center font-bold pt-20 pb-20">
          Features
        </div>

        <div className="flex gap-28 pb-14">
          <div className="card glass w-96 ml-20 ">
            <figure>
              <Image src="/song.png" alt="song" height={200} width={400} />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white">Find your Vibe</h2>
              <p className="text-white">
                Feeling low? Let music be your remedy. Explore uplifting songs
                crafted just for you.
              </p>
              <div className="card-actions justify-end">
                {/*<a href="/songs">*/}
                <button className="px-6 py-2 bg-col4 text-black font-semibold rounded shadow-md shadow-col2 hover:bg-col3 transition duration-200">
                  Listen
                </button>
              </div>
            </div>
          </div>

          <div className="card glass w-96">
            <figure>
              <Image src="/movie.jpeg" alt="song" height={200} width={400} />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white">Netflix and Chill</h2>
              <p className="text-white">
                Get your personalized movie recommendations based on your
                interests.
              </p>
              <div className="card-actions justify-end">
                {/*<a href="/cinema">*/}
                <button className="px-6 py-2 bg-col4 text-black font-semibold rounded shadow-md shadow-col2 hover:bg-col3 transition duration-200">
                  Watch
                </button>
              </div>
            </div>
          </div>

          <div className="card glass w-96">
            <figure>
              <Image src="/diary.jpg" alt="song" height={100} width={400} />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white">Dear Diary</h2>
              <p className="text-white">
                Drop down your thoughts and unsaid feelings in your personal
                journal.
              </p>
              <div className="card-actions justify-end">
                <button className="px-6 py-2 bg-col4 text-black font-semibold rounded shadow-md shadow-col2 hover:bg-col3 transition duration-200">
                  Pen down
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
