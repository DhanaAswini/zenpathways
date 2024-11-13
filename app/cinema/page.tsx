//import Image from "next/image";

export default function Cinema() {
  return (
    <>
      <div
        className="responsive bg-cover bg-no-repeat bg-center w-screen h-screen fixed"
        style={{ backgroundImage: "url(/lights.jpg)" }}
      >
        <div className="mx-40 my-20 border-2 border-zinc-400 rounded-lg">
          <div className="pt-12 text-center text-5xl text-white font-normal">
            Movie Recommendations
          </div>

          <div className="bg-zinc-900 mx-72 my-20 p-8 rounded-sm">
            <div className="pb-4">
              <details className="dropdown">
                <summary className="btn m-1 w-96">Select a Language</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-96 p-2 shadow">
                  <li>
                    <a>Telugu</a>
                  </li>
                  <li>
                    <a>Hindi</a>
                  </li>
                  <li>
                    <a>English</a>
                  </li>
                  <li>
                    <a>Korean</a>
                  </li>
                </ul>
              </details>
            </div>
            <div className="pb-4">
              <details className="dropdown">
                <summary className="btn m-1 w-96">Select by Genre</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-96 p-2 shadow">
                  <li>
                    <a>Feel-good</a>
                  </li>
                  <li>
                    <a>Action</a>
                  </li>
                  <li>
                    <a>Comedy</a>
                  </li>
                  <li>
                    <a>Rom-com</a>
                  </li>
                  <li>
                    <a>Horror</a>
                  </li>
                </ul>
              </details>
            </div>
            <div className="pl-44">
              <button className=" px-6 py-2 bg-col4 text-black font-semibold rounded shadow-md shadow-col2 hover:bg-col3 transition duration-200">
                Get Recommendations
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
