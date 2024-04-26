import Head from "next/head";
import Image from "next/image";
import { GiMoonOrbit } from "react-icons/gi";
import chubb from "../public/chubb.jpg";
import coke from "../public/coke.jpg";
import chubbMobile from "../public/chubb_mb.jpg";
import founders from "../public/foundersnew.jpg";
import gocanvas from "../public/GoCanvas.jpg";
import kraft from "../public/kraft.jpg";
import kraftMobile from "../public/khc_mb.jpg";
import mock1 from "../public/Mockup_1.jpg";
import mock1mobile from "../public/Mockup_1_Mobile.jpg";
import mock2C from "../public/Mockup_3_Searchbar.jpg";
import mock2R from "../public/Mockup_2_Responsive.jpg";
import mock4 from "../public/Mockup_4.jpg";
import pacden from "../public/pacden.jpg";
import palo from "../public/palo.jpg";
import usps from "../public/usps.jpg";
import { Fragment, useState } from "react";
import { Modal } from "../components/Modal";
import { ModalMobile } from "../components/ModalMobile";
import About from "../components/About";
import ServiSkills from "../components/ServiSkills";
import Link from "next/link";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [showModal1b, setShowModal1b] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal2b, setShowModal2b] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);
  const [showModal6, setShowModal6] = useState(false);
  const [showModal7, setShowModal7] = useState(false);
  const [showModal8, setShowModal8] = useState(false);
  const [showModal9, setShowModal9] = useState(false);
  const [showModal9b, setShowModal9b] = useState(false);
  const [showModal10, setShowModal10] = useState(false);
  const [showModal10B, setShowModal10B] = useState(false);
  const [showModal11, setShowModal11] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringK, setIsHoveringK] = useState(false);
  const [isHoveringM1, setIsHoveringM1] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleMouseOverK = () => {
    setIsHoveringK(true);
  };

  const handleMouseOutK = () => {
    setIsHoveringK(false);
  };
  const handleMouseOverM1 = () => {
    setIsHoveringM1(true);
  };

  const handleMouseOutM1 = () => {
    setIsHoveringM1(false);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Jerad Griffin</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" bg-white  dark:bg-gray-800 relative h-full">
        <Fragment>
          <section className="px-10">
            <nav className=" py-10 mb-12 flex justify-between">
              <h1 className=" text-xl dark:text-white"></h1>
              <ul className=" flex items-center">
                <li>
                  <GiMoonOrbit
                    onClick={() => setDarkMode(!darkMode)}
                    className=" cursor-pointer text-xl dark:text-white"
                  />
                </li>
                <li>
                  <a
                    className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 font-montserrat font-bold"
                    href="mailto:jerad.griffin@gmail.com"
                  >
                    Contact Me
                  </a>
                </li>
              </ul>
            </nav>
          </section>
          <section className=" relative min-h-screen px-10 md:px-20 lg:px-40">
            <About />
          </section>

          <section className=" mt-0 pt-5 bg-white dark:bg-transparent">
            <div className="px-10 md:px-20 lg:px-40">
              <ServiSkills />
            </div>
          </section>

          <section className="px-10 pt-5 md:px-20 lg:px-40">
            <div>
              <h3
                id="port_h3"
                className="text-2xl py-1 text-gray-600 dark:text-gray-400 font-montserratSemi font-medium"
              >
                Portfolio
              </h3>
              <p className="py-2 dark:text-gray-400">
                Sites that I&apos;ve either designed, developed or designed and
                developed.
              </p>
            </div>

            <div
              className=" flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap"
              id="portfolio-container"
            >
              {/* Mockup 1 */}
              <div
                id="mock1"
                className=" basis-1/3 flex-1 shadow-lg cursor-pointer relative"
                onMouseOver={handleMouseOverM1}
                onMouseOut={handleMouseOutM1}
              >
                <Image
                  alt="Demo 1 landing page"
                  src={mock1}
                  className="rounded-lg object-cover shadow-lg"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />

                {isHoveringM1 ? (
                  <div className=" transition ease-in-out delay-150 w-full h-full mx-auto shadow-xl absolute top-0 flex justify-center items-center bg-opacity-25 backdrop-blur-sm">
                    <button
                      className=" bg-white text-slate-800 text-lg font-medium transition duration-1000 ease-out h-2 p-7 m-7 rounded-xl flex justify-center items-center shadow-lg"
                      onClick={() => setShowModal9(true)}
                    >
                      Desktop View
                    </button>
                    <button
                      className=" bg-white text-slate-800 text-lg font-medium h-2 p-7 m-7 rounded-xl flex justify-center items-center shadow-lg"
                      onClick={() => setShowModal9b(true)}
                    >
                      Mobile View
                    </button>
                  </div>
                ) : null}
              </div>

              <div
                id="mock4"
                className=" basis-1/3 flex-1 shadow-lg cursor-pointer relative"
                onClick={() => setShowModal11(true)}
              >
                <Image
                  alt="Demo4 landing page"
                  src={mock4}
                  id="mock4"
                  className="rounded-lg object-cover shadow-lg"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>

              <div
                id="chubb"
                className=" basis-1/3 flex-1 shadow-lg cursor-pointer relative"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <Image
                  alt="Chubb landing page"
                  src={chubb}
                  className="rounded-lg object-cover shadow-lg"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />

                {isHovering ? (
                  <div className=" transition ease-in-out delay-150 w-full h-full mx-auto shadow-xl absolute top-0 flex justify-center items-center bg-opacity-25 backdrop-blur-sm">
                    <button
                      className=" bg-white text-slate-800 text-lg font-medium transition duration-1000 ease-out h-2 p-7 m-7 rounded-xl flex justify-center items-center shadow-lg"
                      onClick={() => setShowModal1(true)}
                    >
                      Desktop View
                    </button>
                    <button
                      className=" bg-white text-slate-800 text-lg font-medium h-2 p-7 m-7 rounded-xl flex justify-center items-center shadow-lg"
                      onClick={() => setShowModal1b(true)}
                    >
                      Mobile View
                    </button>
                  </div>
                ) : null}
              </div>

              <div
                id="mock2C"
                className=" basis-1/3 flex-1 shadow-lg cursor-pointer relative"
                onClick={() => setShowModal10(true)}
              >
                <Image
                  alt="Demo 2 landing page"
                  src={mock2C}
                  id="mock2C"
                  className="rounded-lg object-cover shadow-lg"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>

              <div
                id="mock2R"
                className=" basis-1/3 flex-1 shadow-lg cursor-pointer relative"
                onClick={() => setShowModal10B(true)}
              >
                <Image
                  alt="Mockup 2R landing page"
                  src={mock2R}
                  id="mock2R"
                  className="rounded-lg object-cover shadow-lg"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>

              <div
                id="kraft"
                className=" basis-1/3 flex-1 shadow-lg cursor-pointer relative"
                onMouseOver={handleMouseOverK}
                onMouseOut={handleMouseOutK}
              >
                <Image
                  alt="Kraft landing page"
                  src={kraft}
                  id="kraft"
                  className="rounded-lg object-cover shadow-lg"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />

                {isHoveringK ? (
                  <div className=" w-full h-full mx-auto shadow-xl absolute top-0 flex justify-center items-center bg-opacity-25 backdrop-blur-sm">
                    <button
                      className=" bg-white text-slate-800 text-lg font-medium transition duration-1000 ease-out h-2 p-7 m-7 rounded-xl flex justify-center items-center shadow-lg"
                      onClick={() => setShowModal2(true)}
                    >
                      Desktop View
                    </button>
                    <button
                      className=" bg-white text-slate-800 text-lg font-medium h-2 p-7 m-7 rounded-xl flex justify-center items-center shadow-lg"
                      onClick={() => setShowModal2b(true)}
                    >
                      Mobile View
                    </button>
                  </div>
                ) : null}
              </div>

              <div
                id="pacden"
                className=" basis-1/3 flex-1 shadow-lg cursor-pointer relative"
                onClick={() => setShowModal3(true)}
              >
                <Image
                  alt="Pacific Dental landing page"
                  src={pacden}
                  id="pacden"
                  className="rounded-lg object-cover shadow-lg"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>

              <div
                id="usps"
                className=" basis-1/3 flex-1 shadow-lg cursor-pointer relative"
                onClick={() => setShowModal4(true)}
              >
                <Image
                  alt="USPS landing page"
                  src={usps}
                  id="usps"
                  className="rounded-lg object-cover shadow-lg"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>

              <div
                id="palo"
                className=" basis-1/3 flex-1 shadow-lg cursor-pointer relative"
                onClick={() => setShowModal5(true)}
              >
                <Image
                  alt="Palo Alto landing page"
                  src={palo}
                  id="palo"
                  className="rounded-lg object-cover shadow-lg"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>

              <div
                id="coke"
                className=" basis-1/3 flex-1 shadow-lg cursor-pointer relative"
                onClick={() => setShowModal6(true)}
              >
                <Image
                  alt="Coca Cola Thrive landing page"
                  src={coke}
                  id="coke"
                  className="rounded-lg object-cover shadow-lg"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>

              <div
                id="founders"
                className=" basis-1/3 flex-1 shadow-lg cursor-pointer relative"
                onClick={() => setShowModal7(true)}
              >
                <Image
                  alt="Founders Brewery landing page"
                  src={founders}
                  id="founders"
                  className="rounded-lg object-cover shadow-lg"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>

              <div
                id="gocanvas"
                className=" basis-1/3 flex-1 shadow-lg cursor-pointer relative"
                onClick={() => setShowModal8(true)}
              >
                <Image
                  alt="GoCanvas landing page"
                  src={gocanvas}
                  id="gocanvas"
                  className="rounded-lg object-cover shadow-lg"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>
            </div>
            <Link href="/fulfillment" className="fulfillment">
              Fulfillment Policy
            </Link>
          </section>

          <Modal isVisible={showModal9} onClose={() => setShowModal9(false)}>
            <Image alt=" " src={mock1} />
          </Modal>
          <ModalMobile
            isVisible={showModal9b}
            onClose={() => setShowModal9b(false)}
          >
            <Image
              alt=" "
              className=" "
              src={mock1mobile}
              objectFit="contain"
            />
          </ModalMobile>

          <Modal isVisible={showModal1} onClose={() => setShowModal1(false)}>
            <Image alt=" " src={chubb} />
          </Modal>
          <ModalMobile
            isVisible={showModal1b}
            onClose={() => setShowModal1b(false)}
          >
            <Image
              alt=" "
              className=" "
              src={chubbMobile}
              objectFit="contain"
            />
          </ModalMobile>
          <Modal isVisible={showModal2} onClose={() => setShowModal2(false)}>
            <Image alt=" " src={kraft} />
          </Modal>
          <ModalMobile
            isVisible={showModal2b}
            onClose={() => setShowModal2b(false)}
          >
            <Image alt=" " src={kraftMobile} />
          </ModalMobile>
          <Modal isVisible={showModal3} onClose={() => setShowModal3(false)}>
            <Image alt=" " src={pacden} />
          </Modal>
          <Modal isVisible={showModal4} onClose={() => setShowModal4(false)}>
            <Image alt=" " src={usps} />
          </Modal>
          <Modal isVisible={showModal5} onClose={() => setShowModal5(false)}>
            <Image alt=" " src={palo} />
          </Modal>
          <Modal isVisible={showModal6} onClose={() => setShowModal6(false)}>
            <Image alt=" " src={coke} />
          </Modal>
          <Modal isVisible={showModal7} onClose={() => setShowModal7(false)}>
            <Image alt=" " src={founders} />
          </Modal>
          <Modal isVisible={showModal8} onClose={() => setShowModal8(false)}>
            <Image alt=" " src={gocanvas} />
          </Modal>
          <Modal isVisible={showModal10} onClose={() => setShowModal10(false)}>
            <Image alt=" " src={mock2C} />
          </Modal>
          <Modal
            isVisible={showModal10B}
            onClose={() => setShowModal10B(false)}
          >
            <Image alt=" " src={mock2R} />
          </Modal>
          <Modal isVisible={showModal11} onClose={() => setShowModal11(false)}>
            <Image alt=" " src={mock4} />
          </Modal>
        </Fragment>
      </main>
    </div>
  );
}
