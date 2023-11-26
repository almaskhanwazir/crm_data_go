"use client";
import React, { useState } from "react";

export default function About() {
  const [section, setSection] = useState("about");

  return (
    <div className="w-full bg-[#e6e6e6]  px-10 mx-auto sm:px-8 p-4">
      {section === "about" && (
        <div className="aboutSection lg:px-[20%]">
          <div className="font-bold text-black text-[40px] text-center mt-4 mb-4">
            About Blossend
          </div>

          <div className=" px-4 font-normal text-[#303030] text-[16px]">
            <p className="mt-2">
              {`Blossend, Inc. provides innovative & visionary automated Web3 software solutions, networking, consultation, knowledge sharing, and data provision services that empower individuals to achieve freedom, productivity, health & wellness through AI & ML. Our cutting-edge privacy enhanced products & services are designed to maximize individuals’ opportunities & promote authenticity, truth, free speech, & diversity of thought.
`}
            </p>
            <p className="mt-2">
              {`At Blossend, our mission is to empower people to reach their full potential and make a positive impact on the world, one word at a time. We achieve this by providing you with high quality disruptive & reliable software services & technologies that promote innovation and independence, and create opportunities for everyone, regardless of their background or circumstances.
`}
            </p>

            <p className="mt-2">
              {`We believe that access to the tools and resources needed for success is crucial for individuals and organizations to thrive in today's fast-paced and ever-changing world. That's why we are passionate about AI and committed to working towards a future where humans and AI can collaborate to tackle some of humanity's most pressing challenges and create a better world for all. Our AI will empower humans rather than hardwired legacy systems.`}
            </p>

            <p className="mt-2">
              {`Blossend is a company dedicated to empowering people as independent  thinkers. We provide individuals with the tools needed to think critically and make informed decisions based on the most accurate, unbiased, and truthful information available, without being influenced by mainstream trends & external pressures. By democratizing information and fostering a culture of meritocracy, autonomy, and individualism, the company seeks to create a world where people can thrive on their own terms and pursue their unique visions of success – leading them to discover genuine meaning and purpose in their journey.`}
            </p>
            <p className="mt-2">
              {`Our effective & autonomous team enjoys the freedom to pick their schedule and their path to success, without the need for micromanagement. We believe in a meritocracy where merit and success are earned with competence — determined by individual results, effort, and ambition, rather than by a status quo.
`}
            </p>
            <p className="mt-2">
              {`We understand that these values are essential for promoting productivity and effectiveness, but we also prioritize the well-being and mental health of our team members. We believe in fostering an empathetic workplace that values people over tasks, and encourages each individual to be their own boss.`}
            </p>
            <p className="mt-2">
              {`At Blossend, everyone is encouraged to speak freely in order to contribute with their diverse perspectives. We believe that every individual can make a significant impact, regardless of title or position, and that everyone should have equal opportunities to contribute in order to benefit the team and the company’s mission.
`}
            </p>
            <p className="mt-2">
              {`Blossend is a productivity-friendly environment, free from bureaucratic red tape. We prioritize practical and efficient solutions that cater to your needs without overwhelming you with unnecessary paperwork, confusing lengthy processes, policies, and rules. Unlike the legacy healthcare and academic system, we strive to provide competent, efficient, and transparent solutions that work for you.`}
            </p>
            <p className="mt-2">
              {`Join our journey to redefine empowerment. Experience the transformative potential of Blossend's software and embark on a journey to your best self.
`}
            </p>
          </div>
        </div>
      )}
      {section === "12principle" && (
        <div className="12principle px-[10%] mt-8">
          <div className=" mt-2  text-center text-black text-[40px] font-bold font-['Roboto'] leading-[48px]">
            {"Blossend's 12 Principles:"}
          </div>
          <div className="mt-8 flex justify-center w-full lg:px-[20%] text-zinc-800 text-base font-normal font-['Roboto']">
            <ol className="list-decimal pl-6 text-zinc-800 text-base font-normal font-['Roboto'] leading-[48px] tracking-wide">
              <li>Vision, perspective, meaning, & purpose.</li>
              <li>Sense of humor.</li>
              <li>Responsibility.</li>
              <li>
                Authenticity, Democratization, transparency, public/users first,
                truth seeking, & free speech.
              </li>
              <li>
                Open-mindedness, creativity, progress, diversity of thought,
                meritocracy, & equal opportunities.
              </li>
              <li>
                Disruptiveness, innovation, productivity automation, efficient
                80/20 MVP Action Taking.
              </li>
              <li>Freedom seeking, autonomy, flexibility, & privacy.</li>
              <li>
                Individual & independent critical thinking - thinking outside
                the box (non-mainstream thinking), & informed decisions.
              </li>
              <li>
                High energy, optimism, health & well-being, discipline, growth,
                & habits.
              </li>
              <li>Knowledge sharing.</li>
              <li>Leadership, empathy, & respect.</li>
              <li>Bold resilience.</li>
            </ol>
          </div>
        </div>
      )}

      {section === "culture" && (
        <div className="cultureSection px-[10%]">
          <div className="text-center text-black text-[40px] font-bold ">
            Culture:
          </div>

          <div className=" flex-1 justify-center lg:px-[20%]">
            <div className="text-zinc-800 text-xl font-normal font-['Roboto'] leading-[27px] tracking-wide mb-8 mt-6">
              An ideal team player of Blossend Inc. embodies the following
              qualities:
            </div>
            <ol className="list-decimal pl-6 text-zinc-800 text-base font-normal font-['Roboto'] leading-[34px] tracking-wide">
              <li>
                Empowering: They foster an environment that encourages and
                enables individuals to make independent choices and decisions,
                refraining from exerting undue influence or control.
              </li>
              <li>
                Supportive: They provide assistance, encouragement, and
                guidance, while respecting the autonomy and independence of each
                person.
              </li>
              <li>
                Respectful: They genuinely value and honor the opinions,
                desires, and boundaries of others, without attempting to
                manipulate or control them.
              </li>
              <li>
                Collaborative: They actively engage in cooperative and mutually
                beneficial interactions, fostering open communication and
                consensus when making decisions and taking action.
              </li>
              <li>
                Trusting: They have faith in the capabilities and intentions of
                others, granting them the freedom to act according to their own
                judgment.
              </li>
              <li>
                Freeing: They allow individuals the space and autonomy to
                express themselves, make choices, and pursue their own goals
                without unnecessary interference.
              </li>
              <li>
                Nurturing: They cultivate a supportive and caring environment
                that promotes personal growth, autonomy, and self-expression.
              </li>
              <li>
                Non-coercive: They avoid resorting to force, threats, or
                manipulation to influence or control others, preferring open and
                honest communication.
              </li>
              <li>
                Respectable: They recognize and honor the autonomy, dignity, and
                agency of others, refraining from any attempts to exert undue
                control or manipulation.
              </li>
              <li>
                Equal: They treat others as equals, acknowledging their equal
                rights and the freedom to make their own choices and decisions
                without interference or manipulation.
              </li>
              <li>
                Remember, it is not where you start that matters, but rather how
                much progress you make from that starting point.
              </li>
            </ol>
          </div>
        </div>
      )}

      <div className="mt-12 mb-4 lg:px-[21%] w-full">
        <div className="">
          {section !== "about" && (
            <div
              className="flex items-center h-[64px]  bg-[#d9d9d9] cursor-pointer mt-6"
              onClick={(e) => setSection("about")}
            >
              <div className="pl-8 whitespace-nowrap	text-[#130fea] text-[20px] ">
                About
              </div>
            </div>
          )}

          {section !== "12principle" && (
            <div
              className="flex items-center h-[64px]  bg-[#d9d9d9] cursor-pointer mt-6"
              onClick={(e) => setSection("12principle")}
            >
              <div className="pl-8 whitespace-nowrap	text-[#130fea] text-[20px] ">
                Blossend&#39;s 12 Principles
              </div>
            </div>
          )}

          {section !== "culture" && (
            <div
              className="cursor-pointer flex items-center h-[64px]  bg-[#d9d9d9] mt-4"
              onClick={(e) => setSection("culture")}
            >
              <div className="pl-8 whitespace-nowrap [font-family:'Roboto',Helvetica] font-medium text-[#130fea] text-[20px] ">
                Our Culture
              </div>
              
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
