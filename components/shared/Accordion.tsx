import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

/**
 *
 * A simple accordion component used at FAQ page, created by using Material UI package.
 *
 * @param {Array} questions - Array of questions, data comes from strapi. questionTitle is the title, questionDescription is the description.
 *
 */

export default function SimpleAccordion() {
  const [questions] = useState({
    questions: [
      {
        questionTitle: "Front-end Developer Freelance [YugaZephyr IT Consultancy and Services] Nov 2023 - Present",
        questionDescription: <ol>

          <li>1. Led the development of the frontend for a Content Management Tool tailored for a photographer, enhancing the online visibility of their services and portfolio.</li>
          <li>2. Spearheaded the creation of a user-friendly web application, allowing potential clients to easily access and view the photographer's services and portfolio, thereby boosting client engagement.</li>
          <li>3. Developed a robust Content Management Tool, enabling the admin to efficiently send client photos for download, streamlining the workflow and enhancing overall client satisfaction.</li>
          <li>4. Successfully managed a team of interns during the project, providing guidance and support to ensure project milestones were met effectively and efficiently.</li>
        </ol>
      },
       {
        questionTitle: "Frontend Developer Freelance [PySync Pvt Ltd] June 2023 - Present",
        questionDescription:
          <ol>

            <li>1. Led the frontend development of an engaging landing website, elevating PySync's digital presence.</li>
            <li>2. Developed a comprehensive CRM tool tailored for travel agencies inclusive of lead management, company and user profiles, employee management, and administrative panels.</li>
            <li> 3. Integral involvement in the creation of the Itinerary Builder feature within the CRM tool.<br />
              → Seamless integration into the broader CRM framework.<br />
              → Empowered travel agencies to craft personalized itineraries for their customers.<br />
              → Featured dynamic customization options and PDF generation capabilities`
            </li>

          </ol>



      },

 
      {
        questionTitle: "Teaching Assistant Dec 2022 - May 2023",
        questionDescription:
          <ol>

            During my internship, I gained valuable debugging skills by identifying and resolving errors in students' code. This opportunity also gave me the chance to refresh my understanding of Java and data structures, subjects that I had extensively studied prior to the start of my internship. Moreover, mentoring over 450 students during this time significantly enhanced my communication skills and boosted my confidence.<br/>
            Key Responsibilities
            <li>1. Taking Doubt Sessions</li>
            <li> 2. Debugging Codes</li>
            <li>3. Helping Students in assignments and various projects.</li>
          </ol>,

      },
    ],
  });

  return (
    <>
      <div className="accordion-style">
        {questions.questions.map((i) => {
          return (
            <Accordion
              elevation={0}
              sx={{
                backgroundColor: "#bae374",
                paddingTop: "5px",
                paddingBottom: "5px",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#2d3436" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  sx={{
                    color: "#2d3436",
                    fontSize: "20px",
                    fontWeight: "500",
                    lineHeight: "122%",
                    fontFamily: "Visby",
                  }}
                >
                  {i.questionTitle}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    color: "#2d3436",
                    fontSize: "16px",
                    lineHeight: "122%",
                    fontFamily: "Visby",
                  }}
                >
                  {i.questionDescription}
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
      <style jsx>
        {`
          .accordion-style {
            padding-top: 5vw;
          }
        `}
      </style>
    </>
  );
}
