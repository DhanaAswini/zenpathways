//import Image from "next/image";

export default function Thera6() {
  return (
    <>
      <div className="bg-zinc-950 min-h-screen">
        <div className="flex items-start justify-center space-x-10 p-10">
          {/* Therapist Information Section */}
          <div className="p-2 md:p-10 w-full md:w-1/2 bg-white bg-opacity-75 h-auto pt-10 pl-10">
            <div className="text-3xl">I am Dr.Rebecca Taylor, LPC</div>
            <div className="text-2xl font-semibold mt-2">
              3+ years Experience
            </div>
            <p className="text-lg mt-4">
              Clinical Psychologist specializing in mood disordersFocuses on
              improving interpersonal relationships and social functioning to
              alleviate mood symptoms.Incorporates mindfulness practices to help
              clients manage emotional distress and promote emotional
              regulation.Conducts comprehensive psychological assessments to
              diagnose mood disorders and develop tailored treatment
              plans.Offers crisis counseling for individuals experiencing severe
              mood episodes or suicidal thoughts.
            </p>
            <div className="text-lg font-semibold mt-4">
              Area of Expertise: Major Depressive Disorder, Bipolar Disorder
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
            <div className="text-4xl font-bold">What is Included?</div>
            <ul className="mt-6 space-y-4 list-disc list-inside">
              <li className="text-2xl font-semibold">
                Do you see patterns in your mood?
              </li>
              <li className="text-2xl font-semibold">
                How is your mood today?
              </li>
              <li className="text-2xl font-semibold">
                What helps you feel grounded?
              </li>
              <li className="text-2xl font-semibold">
                What physical symptoms do you have?
              </li>
              <li className="text-2xl font-semibold">Gratitude Journal</li>
              <li className="text-2xl font-semibold">
                How do you cope with sadness?
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
