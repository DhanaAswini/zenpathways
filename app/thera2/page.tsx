//import Image from "next/image";

export default function Thera2() {
  return (
    <>
      <div className="bg-zinc-950 min-h-screen">
        <div className="flex items-start justify-center space-x-10 p-10">
          {/* Therapist Information Section */}
          <div className="p-2 md:p-10 w-full md:w-1/2 bg-white bg-opacity-75 h-auto pt-10 pl-10">
            <div className="text-3xl">I'm Dr. David Peterson, MD</div>
            <div className="text-2xl font-semibold mt-2">
              6+ years Experience
            </div>
            <p className="text-lg mt-4">
              Dr. Peterson is a board-certified psychiatrist with a focus on the
              biological and medical aspects of depression. He specializes in
              treating clinical depression with a combination of medication
              management and supportive therapy. Dr. Peterson works closely with
              his patients to ensure they receive the most effective treatment
              plan, whether it involves antidepressants, psychotherapy, or a
              combination of both.offers compassionate care for individuals
              struggling with depression. He works with clients to explore the
              root causes of their depressive symptoms and helps them develop
              personalized treatment plans.
            </p>
            <div className="text-lg font-semibold mt-4">
              Area of Expertise: Depression
            </div>
            <div className="flex items-center justify-center">
              <a href="/S1">
                <button className="mt-8 px-6 py-2 bg-col4 text-black font-semibold rounded shadow-md hover:bg-col3 transition duration-200">
                  Book Now
                </button>
              </a>
            </div>
          </div>

          {/* What's Included Section */}
          <div className="p-2 md:p-10 w-full md:w-1/2 bg-white bg-opacity-75 h-auto pt-10 pl-10">
            <div className="text-4xl font-bold">What's Included?</div>
            <ul className="mt-6 space-y-4 list-disc list-inside">
              <li className="text-2xl font-semibold">
                Questions to Ask Yourself
              </li>
              <li className="text-2xl font-semibold">Critical Thinking</li>
              <li className="text-2xl font-semibold">
                Challenging Negative Thoughts
              </li>
              <li className="text-2xl font-semibold">
                What do you think is at the core of your depression?
              </li>
              <li className="text-2xl font-semibold">Gratitude Journal</li>
              <li className="text-2xl font-semibold">
                Stay Away From Negative Thoughts
              </li>
              <li className="text-2xl font-semibold">Describe your emotions</li>
              <li className="text-2xl font-semibold">Daily Thought Record</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
