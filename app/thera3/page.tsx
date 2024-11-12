import Image from "next/image";

export default function Thera3() {
  return (
    <>
      <div className="bg-zinc-950 min-h-screen">
        <div className="flex items-start justify-center space-x-10 p-10">
          {/* Therapist Information Section */}
          <div className="p-2 md:p-10 w-full md:w-1/2 bg-white bg-opacity-75 h-auto pt-10 pl-10">
            <div className="text-3xl">I'm Kevin Hughes, LMHC</div>
            <div className="text-2xl font-semibold mt-2">
              5+ years Experience
            </div>
            <p className="text-lg mt-4">
              Licensed Mental Health Counselor focusing on depression, anxiety,
              and trauma recovery.Helps clients identify and modify negative
              thought patterns and behaviors contributing to their mental health
              challenges.Integrates mindfulness practices to assist clients in
              staying present and managing overwhelming emotions.Focuses on
              building a strong therapeutic alliance and creating a safe space
              for clients to explore their feelings and experiences.Emphasizes
              understanding the impact of trauma on mental health and
              incorporates strategies that promote safety and empowerment.
            </p>
            <div className="text-lg font-semibold mt-4">
              Area of Expertise:Depression, Anxiety, and Trauma recovery.
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
                How does anxiety affect your day?
              </li>
              <li className="text-2xl font-semibold">
                Questions to Ask Yourself
              </li>
              <li className="text-2xl font-semibold">Critical Thinking</li>
              <li className="text-2xl font-semibold">
                What triggers your trauma memories?
              </li>
              <li className="text-2xl font-semibold">SMART Goals</li>
              <li className="text-2xl font-semibold">Gratitude Journal</li>
              <li className="text-2xl font-semibold">
                Stay Away From Negative Thoughts
              </li>
              <li className="text-2xl font-semibold">
                What coping strategies do you use?
              </li>
              <li className="text-2xl font-semibold">What helps you cope?</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
