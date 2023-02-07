import React from "react";
import Image from "next/image";
import design from "../public/design.png";
import dev from "../public/dev.png";

function ServiSkills() {
  return (
    <div>
      <div>
        <h3 className="text-3xl py-1 text-gray-600 dark:text-gray-400 font-montserratSemi font-medium">
          About Me
        </h3>

        <p className="text-md py-2 leading-8 text-slate-800 dark:text-gray-400 font-montserrat">
          Self taught designer and developer. I&apos;ve done contract work for
          <span className="text-slate-800 dark:text-gray-400 ">
            {" "}
            companies{" "}
          </span>
          such as{" "}
          <span className="text-slate-900 font-bold dark:text-white">
            Coca Cola, Kraft Heinz, Liberty Mutual, IKEA, LGE, Inspire Brands{" "}
          </span>
          and more. I love collaborating with talanted people to bring a vision
          to life.
        </p>
        <p className="dark:text-gray-400">
          I love to create, whether it be a{" "}
          <span className="text-slate-900 font-bold dark:text-white">
            website, line drawing, treehouse, water coloring or a skateboard
            ramp
          </span>
          . Let&apos;s build something!
        </p>
      </div>
      <div className="lg:flex gap-10">
        {/* Card */}
        <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
          <Image alt="Design" src={design} className=" max-w-lg rounded-sm" />
          <h3 className="text-lg pt-8 pb-2 text-gray-600 font-montserratSemi">
            Beautiful Designs
          </h3>
          <p className="py-2 font-montserrat">
            Creating beautiful designs that meet your needs.
          </p>
          <h4 className="py-4 font-medium text-teal-600 font-montserrat">
            Design Tools I Use
          </h4>
          <div className="gap-5">
            <p className="text-gray-800 py-1 font-montserrat">Photoshop</p>
            <p className="text-gray-800 py-1 font-montserrat">Illustrator</p>
            <p className="text-gray-800 py-1 font-montserrat">Figma</p>
            <p className="text-gray-800 py-1 font-montserrat">Sketch</p>
          </div>
        </div>
        {/* Card */}
        <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
          <Image alt="Develop" src={dev} className=" max-w-lg rounded-sm" />
          <h3 className="text-lg pt-8 pb-2 text-gray-600 font-montserratSemi">
            Develop Designs into Websites
          </h3>
          <p className="py-2 font-montserrat">
            Developing elegant designs into websites.
          </p>
          <h4 className="py-4 font-medium text-teal-600 font-montserrat">
            Skills
          </h4>
          <div className=" flex flex-wrap justify-around gap-5">
            <div>
              <p className="w-50 text-gray-800 py-1 flex-1 font-montserrat">
                HTML
              </p>
              <p className="w-50 text-gray-800 py-1 flex-1 font-montserrat">
                CSS
              </p>
              <p className="w-50 text-gray-800 py-1 flex-1 font-montserrat">
                Bootstrap
              </p>
              <p className="w-50 text-gray-800 py-1 flex-1 font-montserrat">
                Tailwind
              </p>
            </div>
            <div>
              <p className="w-50 text-gray-800 py-1 flex-1 font-montserrat">
                JavaScript
              </p>
              <p className="w-50 text-gray-800 py-1 flex-1 font-montserrat">
                jQuery
              </p>
              <p className="w-50 text-gray-800 py-1 flex-1 font-montserrat">
                React
              </p>
              <p className="w-50 text-gray-800 py-1 flex-1 font-montserrat">
                Angular
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiSkills;
