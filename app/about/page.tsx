import Image from "next/image";

export default function About() {
  return (
    <>
      <div>
        <div className="bg-zinc-950">
          <div className="flex flex-row">
            <Image
              src="/about.jpg"
              alt="coffee"
              height={900}
              width={360}
              className="ml-16 mt-8"
            />
            <div className="pt-48 text-center text-5xl font-bold text-white">
              About Us
              <div className="text-center text-xl mt-16 ml-4 mr-4 text-white">
                At ZenPathways, you can connect with experienced therapists,
                attend virtual therapy sessions from the comfort of your home,
                and access a range of soothing resources like calming music,
                uplifting movies, and a personal journal for reflection. Our
                mission is to provide you with a comprehensive platform for
                self-care, growth, and healing, guiding you toward a more
                peaceful, fulfilled life. <br /> <br />
                Let the waves of wellness carry you forward on your journey to
                mental well-being.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
