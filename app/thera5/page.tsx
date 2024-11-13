//import Image from "next/image";

export default function Thera5() {
  return (
    <>
      <div className="bg-zinc-950 min-h-screen">
        <div className="flex items-start justify-center space-x-10 p-10">
          {/* Therapist Information Section */}
          <div className="p-2 md:p-10 w-full md:w-1/2 bg-white bg-opacity-75 h-auto pt-10 pl-10">
            <div className="text-3xl">I'm Dr.Johnson, MA, MFT</div>
            <div className="text-2xl font-semibold mt-2">
              11+ years Experience
            </div>
            <p className="text-lg mt-4">
              Licensed Professional Counselor with a focus on talk therapy and
              mindfulness techniques for depression.Utilizes evidence-based talk
              therapy techniques, including Cognitive Behavioral Therapy (CBT)
              and Person-Centered Therapy, to facilitate open communication and
              self-exploration.Integrates mindfulness practices into sessions to
              help clients become more aware of their thoughts and feelings,
              promoting relaxation and emotional regulation.Works with adults
              and adolescents experiencing depression, providing a safe and
              supportive environment to explore feelings, thoughts, and
              behaviors.
            </p>
            <div className="text-lg font-semibold mt-4">
              Area of Expertise: Mindfulness Techniques for depression
            </div>
            <div className="flex items-center justify-center">
              <a href="S1">
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
                Does focusing on your breath help?
              </li>
              <li className="text-2xl font-semibold">
                Is staying present difficult?
              </li>
              <li className="text-2xl font-semibold">Describe your Emotions</li>
              <li className="text-2xl font-semibold">
                What helps you feel grounded?
              </li>
              <li className="text-2xl font-semibold">
                How do you cope with overwhelm?
              </li>
              <li className="text-2xl font-semibold">Gratitude Journal</li>
              <li className="text-2xl font-semibold">
                What do you want to achieve?
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
