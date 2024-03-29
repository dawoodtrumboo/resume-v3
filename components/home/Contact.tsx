import { useState } from "react";


/**
 *
 * Contact component. Here you can explain your Contact status.
 *
 * @param {String} title - Title of the component.
 * @param {String} subtitle - Subtitle of the component.
 *
 */

export default function Contact() {
  const [texts] = useState({
    title: `<strong>Get in touch</strong> with me.`,
    subtitle: `Whether you have a question or simply want to say hello, I will do my best to respond to you asap.<br/><br/> "You miss 100% of the shots you don't take. - Wayne Gretzky" by Michael Scott
    `,
  });

  return (
    <>
      <section id="section">
        <div className="content">
          <h2 dangerouslySetInnerHTML={{ __html: texts.title }}></h2>
          <p dangerouslySetInnerHTML={{ __html: texts.subtitle }}></p>
        </div>
        <div className="content2">
          <button
            onClick={() =>
              (window.location.href = "mailto:idawoodtrumboo@gmail.com")
            }
          >
            Say Hello
          </button>
        </div>
      </section>

      <style jsx>{`
        section {
          padding: 4vw 5.103vw 2vw 10.317vw;
        }

        section .content2 {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding-top: 5vw;
        }

        section .content2 button {
          background: #2d3436;
          border-radius: 32px;
          width: 15%;
          height: 4.5vw;
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 300;
          font-size: 1.5873vw;
          line-height: 140%;
          color: #ffffff;
        }

        section .content2 img {
          height: 4.5vw;
        }

        section .content2 button:hover {
          background: #bae374;
          color: #2d3436;
        }

        section .content h2 {
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 300;
          font-size: 3.43391vw;
          line-height: 122%;
          color: #2d3436;
          margin-bottom: 2.513vw;
          animation-delay: 0s;
        }

        section .content p {
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 300;
          font-size: 1.5873vw;
          line-height: 140%;
          color: #2d3436;
          margin-bottom: 2.513vw;
          margin-right: 5vw;
        }

        @media screen AND (max-width: 992px) {
          section {
            padding: 35px 22px;
            margin-top: 2vh;
          }

          section > .media {
            display: none;
          }

          section .content {
            width: 100%;
          }

          section .content h2 {
            font-size: 29px;
            line-height: 122%;
            width: 87%;
            margin-bottom: 17px;
          }

          section .content p {
            font-size: 15px;
            line-height: 20px;
            width: 100%;
            margin-bottom: 32px;
          }
        }
        @media only screen and (max-width: 526px) {
          section .content h2 {
            font-size: 29px;
          }
          section .content2 button {
            background: #2d3436;
            border-radius: 32px;
            width: 25%;
            height: 8.5vw;
            font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
              Helvetica, Arial, sans-serif, "Apple Color Emoji",
              "Segoe UI Emoji";
            font-style: normal;
            font-weight: 300;
            font-size: 3.5873vw;
            line-height: 140%;
            color: #ffffff;
          }
          section .content p {
            font-size: 15px;
            line-height: 20px;
          }
        }
      `}</style>
    </>
  );
}
