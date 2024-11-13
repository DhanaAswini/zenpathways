//import Image from "next/image";

export default function Thera1() {
  return (
    <>
      <div className="bg-zinc-950 min-h-screen">
        <div className="flex items-start justify-center space-x-10 p-10">
          {/* Therapist Information Section */}
          <div className="p-2 md:p-10 w-full md:w-1/2 bg-white bg-opacity-75 h-auto pt-10 pl-10">
            <div className="text-3xl">I am Jenny,LMHC</div>
            <div className="text-2xl font-semibold mt-2">
              5+ years Experience
            </div>
            <p className="text-lg mt-4">
              Cognitive Behavioral Therapy (CBT) is a widely used,
              evidence-based form of psychotherapy that focuses on identifying
              and changing negative thought patterns and behaviors. It is
              structured, goal-oriented, and short-term, typically used to treat
              a wide range of mental health conditions.It is based on the
              principle that our thoughts, feelings, and behaviors are
              interconnected, and that by changing negative or distorted thought
              patterns, individuals can change their emotional state and
              behavior.Cognitive Behavioral Therapy (CBT) is a structured,
              time-limited psychotherapy that aims to address and modify
              dysfunctional thoughts, behaviors, and emotional responses.
            </p>
            <div className="text-lg font-semibold mt-4">
              Area of Expertise: Cognitive Behavioral Therapy (CBT)
            </div>
            <div className="flex items-center justify-center">
              <a href="/s1">
                <button className="mt-8 px-6 py-2 bg-col4 text-black font-semibold rounded shadow-md hover:bg-col3 transition duration-200">
                  Book Now
                </button>
              </a>
            </div>
          </div>

          {/* What's Included Section */}
          <div className="p-2 md:p-10 w-full md:w-1/2 bg-white bg-opacity-75 h-auto pt-10 pl-10">
            <div className="text-4xl font-bold">What is Included?</div>
            <ul className="mt-6 space-y-4 list-disc list-inside">
              <li className="text-2xl font-semibold">Cognitive Triangle</li>
              <li className="text-2xl font-semibold">
                Questions to Ask Yourself
              </li>
              <li className="text-2xl font-semibold">Critical Thinking</li>
              <li className="text-2xl font-semibold">
                Challenging Negative Thoughts
              </li>
              <li className="text-2xl font-semibold">SMART Goals</li>
              <li className="text-2xl font-semibold">Gratitude Journal</li>
              <li className="text-2xl font-semibold">
                Stay Away From Negative Thoughts
              </li>
              <li className="text-2xl font-semibold">Shifting Thinking</li>
              <li className="text-2xl font-semibold">Daily Thought Record</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
