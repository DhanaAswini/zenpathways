import Image from "next/image";
export default function Therapists() {
  return (
    <>
      <div className="bg-zinc-950">
        <div className="text-white text-5xl font-bold text-center pt-20">
          Therapists
        </div>
        <div className="flex flex-wrap justify-center gap-8 p-24">
          {/* Therapist 1 */}
          <div className="card bg-zinc-900 w-96 shadow-xl pt-10">
            <figure className="px-10 pt-10">
              <Image
                src="/t1.jpg"
                height={400}
                width={300}
                alt="thera"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center text-white ">
              <h2 className="card-title text-2xl font-bold pt-4">
                Therapist 1
              </h2>
              <div className="flex items-center justify-center pt-2 ">
                <a href="/thera1">
                  <button className="mt-2 px-4 py-1 bg-col4 text-black font-semibold rounded shadow-md hover:bg-col3 transition duration-200">
                    View
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Therapist 2 */}
          <div className="card bg-zinc-900 w-96 shadow-xl pt-10">
            <figure className="px-10 pt-10">
              <Image
                src="/t2.jpg"
                height={400}
                width={300}
                alt="thera"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center text-white ">
              <h2 className="card-title text-2xl font-bold pt-4">
                Therapist 2
              </h2>
              <div className="flex items-center justify-center pt-2">
                <a href="/thera2">
                  <button className="mt-2 px-4 py-1 bg-col4 text-black font-semibold rounded shadow-md hover:bg-col3 transition duration-200">
                    View
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Therapist 3 with rating */}
          <div className="card bg-zinc-900 w-96 shadow-xl pt-10">
            <figure className="px-10 pt-10">
              <Image
                src="/t3.jpg"
                height={400}
                width={300}
                alt="thera"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center text-white ">
              <h2 className="card-title text-2xl font-bold pt-4">
                Therapist 3
              </h2>
              <div className="flex items-center justify-center pt-2">
                <a href="/thera3">
                  <button className="mt-2 px-4 py-1 bg-col4 text-black font-semibold rounded shadow-md hover:bg-col3 transition duration-200">
                    View
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Therapist 4 */}
          <div className="card bg-zinc-900 w-96 shadow-xl pt-10">
            <figure className="px-10 pt-10">
              <Image
                src="/t4.jpg"
                height={400}
                width={300}
                alt="thera"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center text-white ">
              <h2 className="card-title text-2xl font-bold pt-4">
                Therapist 4
              </h2>
              <div className="flex items-center justify-center pt-2">
                <a href="/thera4">
                  <button className="mt-2 px-4 py-1 bg-col4 text-black font-semibold rounded shadow-md hover:bg-col3 transition duration-200">
                    View
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Therapist 5 */}
          <div className="card bg-zinc-900 w-96 shadow-xl pt-10">
            <figure className="px-10 pt-10">
              <Image
                src="/t5.jpg"
                height={400}
                width={300}
                alt="thera"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center text-white ">
              <h2 className="card-title text-2xl font-bold pt-4">
                Therapist 5
              </h2>
              <div className="flex items-center justify-center pt-2">
                <a href="/thera5">
                  <button className="mt-2 px-4 py-1 bg-col4 text-black font-semibold rounded shadow-md hover:bg-col3 transition duration-200">
                    View
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Therapist 6 */}
          <div className="card bg-zinc-900 w-96 shadow-xl pt-10">
            <figure className="px-10 pt-10">
              <Image
                src="/t6.jpg"
                height={400}
                width={300}
                alt="thera"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center text-white ">
              <h2 className="card-title text-2xl font-bold pt-4">
                Therapist 6
              </h2>
              <div className="flex items-center justify-center pt-2">
                <a href="/thera6">
                  <button className="mt-2 px-4 py-1 bg-col4 text-black font-semibold rounded shadow-md hover:bg-col3 transition duration-200">
                    View
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
