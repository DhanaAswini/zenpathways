import Image from "next/image";

export default function Thera4() {
  return (
    <>
      <div className="bg-zinc-950 min-h-screen">
        <div className="flex items-start justify-center space-x-10 p-10">
          {/* Therapist Information Section */}
          <div className="p-2 md:p-10 w-full md:w-1/2 bg-white bg-opacity-75 h-auto pt-10 pl-10">
            <div className="text-3xl">I'm Dr. Olivia Martin, PsyD</div>
            <div className="text-2xl font-semibold mt-2">
              7+ years Experience
            </div>
            <p className="text-lg mt-4">
              Dr. Martin is an experienced therapist who offers evidence-based
              treatments for depression, such as Cognitive Behavioral Therapy
              (CBT) and Dialectical Behavior Therapy (DBT). She is committed to
              helping her clients understand their emotional responses and
              develop healthier ways to cope with depressive episodes. Dr.
              Martin’s practice emphasizes self-compassion, mindfulness, and
              resilience building, ensuring a comprehensive approach to mental
              health care.
            </p>
            <div className="text-lg font-semibold mt-4">
              Area of Expertise:(CBT) and (DBT)
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
                What thoughts are you having right now?
              </li>
              <li className="text-2xl font-semibold">
                Questions to Ask Yourself
              </li>
              <li className="text-2xl font-semibold">
                What positive coping strategies have you tried?
              </li>
              <li className="text-2xl font-semibold">
                Challenging Negative Thoughts
              </li>
              <li className="text-2xl font-semibold">
                What triggers your negative thoughts?
              </li>
              <li className="text-2xl font-semibold">Gratitude Journal</li>
              <li className="text-2xl font-semibold">
                Stay Away From Negative Thoughts
              </li>
              <li className="text-2xl font-semibold">
                What emotions are you feeling?
              </li>
              <li className="text-2xl font-semibold">
                What makes you feel grounded?
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
