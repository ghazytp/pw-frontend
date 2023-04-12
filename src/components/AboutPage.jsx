import { useState } from "react";
import myHeroImg from "../assets/img_hero.png";
import TypewriterComponent from "typewriter-effect";
import axios from 'axios'


const BASE_URL = 'https://pw-backend.vercel.app'

export default function AboutPage() {
  const [waitState, setWaitState] = useState(false);
  const [hoverButton, setHoverButton] = useState(false);

  const waitForTitle = () => {
    setWaitState(true);
  };

  const downloadResume = async () => {
    try {
      const {data} = await axios({
        url: BASE_URL  + '/download-pdf',
        method: 'GET',
        responseType: 'blob'
      })
      const url = window.URL.createObjectURL(new Blob([data], {type: 'application/pdf'}))
      
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', 'Ghazy_Prihanda_Resume.pdf')
      document.body.appendChild(link)
      link.click()

      document.body.removeChild(link)
      URL.revokeObjectURL(url)


    } catch (err) {
      console.log(err);
    }
  }


  return (
    <>
    <img src="https://photos.app.goo.gl/db53KKkSgznKWSGJ7" alt="" />
      <section className="flex items-center justify-center min-h-screen px-6">
        <div className="container">
          <div className="w-full flex flex-col items-center mx-auto mt-16 sm:mt-0">
            <div className="w-[190px] sm:w-[250px] md:w-[300px]  animate-fade-in-down">
              <img
                src={myHeroImg}
                alt="my_hero_img"
                className="bg-blend-overlay"
              />
            </div>
            <div className="text-center mt-4">
              <h1 className="text-2xl lg:text-5xl sm:text-4xl font-bold">
                <TypewriterComponent
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("<strong>hi, I'm godzilla 🦖</strong>")
                      .deleteAll()
                      .typeString("sorry...")
                      .deleteAll()
                      .typeString("<strong>hi, I'm ghazytp :)</strong>")
                      .pauseFor(500)
                      .callFunction(waitForTitle)
                      .start();
                  }}
                />
              </h1>
              <div
                className={
                  !waitState
                    ? "invisible"
                    : "animate-fade-in-down visible flex flex-col justify-center items-center"
                }
              >
                <p className="text-xs mt-2 sm:text-xl lg:text-2xl sm:w-8/12 sm:mt-6">
                  a full stack developer who loves coding, coffee, and
                  contemplating the meaning of life and I'm here to share my
                  tech adventures and misadventures with you!
                </p>
                <div className="mx-auto w-fit mt-6">
                  <ul className="text-sm flex font-bold w-full gap-3 sm:gap-4 lg:text-xl">
                    <li className="nav-underline bg-blue-600 p-2 px-4 hover:-translate-y-1">
                      <a href="https://www.linkedin.com/in/ghazytp/" target="_blank">linkedin</a>
                    </li>
                    <li className="nav-underline bg-[#333333] p-2 px-4 hover:-translate-y-1">
                      <a href="https://github.com/ghazytp" target="_blank">github</a>
                    </li>
                    <li className="nav-underline bg-[#833AB4] p-2 px-4 hover:-translate-y-1">
                      <a href="https://www.instagram.com/ghzytp/" target="_blank">instagram</a>
                    </li>
                  </ul>
                  <button onClick={downloadResume} className="mt-4  hover:font-bold text-secondary">
                    get my latest resume
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
