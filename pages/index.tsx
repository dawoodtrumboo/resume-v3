import CommonFooter from "../components/CommonFooter";
import { useEffect, useState } from "react";
import Home from "components/home/Home";
import Expertise from "components/home/Expertise";
import Navigation from "components/Navigation";
import Experience from "components/home/Experience";
import Contact from "components/home/Contact";
import Work from "components/work/Work";
import { BrowserView, MobileView } from "react-device-detect";
import Projects from "components/home/Projects";
import Head from "next/head";
import parse from "html-react-parser";

export default function Index() {
  

  /// To use the animation for expertise section.
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        } else {
          entry.target.classList.remove("fade-in");
        }
      });
    });
    observer.observe(document.querySelector("#section2"));
    setTimeout(function () {
      document.querySelector(".vl-leaderboard") &&
        (document.querySelector<HTMLElement>(".vl-leaderboard").style.display =
          "none");
    }, 50);
  });

  // const parseHead = parse(texts.head);
  return (
    <>
      <Head>
        <script src="https://www.googleoptimize.com/optimize.js?id=OPT-KMD99G5"></script>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        {/* <title>{texts.title}</title> */}
        <title>Dawood Trumboo</title>
        {/* <meta name="description" content={texts.description} /> */}
        <link rel="icon" href="/favicon.ico" />
        {/* {parseHead} */}
      </Head>
      <Navigation />
      <main>
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <section id="Home">
              <Home />
            </section>
            <section id="Expertise">
              <Expertise />
            </section>
            <section id="Work">
              <BrowserView>
                <Work />
              </BrowserView>
              <MobileView>
                <Projects />
              </MobileView>
            </section>
            <section id="Experience">
              <Experience />
            </section>
            <section id="Contact">
              <Contact />
            </section>
          </div>
        </div>
      </main>
      <CommonFooter />
      <div
        id="popup-trigger"
        data-vl-widget="popupTrigger"
        style={{ opacity: 0 }}
      ></div>
    </>
  );
}
