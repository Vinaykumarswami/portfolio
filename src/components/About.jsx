import React from "react";
import { FaCertificate, FaUnderline } from "react-icons/fa6";
import { PiSelectionBackground } from "react-icons/pi";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
        Hello, I'm Vinay Kumar Swami, a full-stack developer with a background in computer science. 
        I specialize in building and managing web applications from the ground up, handling both front-end and back-end development. 
        With a keen interest in modern technologies and a passion for problem-solving.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <span>
          [12th], [Sarswati Vidhya Peeth Public School,Sikar,Rajasthan], [2020] [73.40 %] 
        </span>
        <br />
        <span>
        [B-Tech] [Puducherry Technological University, Puducherry], [2021-2025], [6.35 CGPA]
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <span>
         Languages: C++, C, JavaScript, C#(Beginner),reactjs
         <br />
         Fundamentals: OS, DBMS, OOPs <br />
         Web Development: HTML, CSS, JavaScript,React js,LLM <br />
         Tools: VS Code, Git, Android Studio, Visual Studio,
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <span>
          [ Large Language Model (LLM) is a type of artificial intelligence (AI) program that uses machine learning to process natural language]
          , [AccunAI], [May-20 2024] [Ai-trainer]
          <a href="https://drive.google.com/file/d/1FSLpd43bAZLlbGw1_QWf5WWiukuxd9Ye/view?usp=sharing" target="_link">
                      <FaCertificate className="text-2xl cursor-pointer" />
           </a>
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Achievements & Awards
        </h1>
        <span>
        <a href="https://leetcode.com/u/vinay_kumar_swami/" target="_blank">
           <h1>Leetcode profile</h1>
          </a>

          <br />
          Solved 600 problems on LeetCode and GeeksforGeeks
          <br /> 
          Contest Rating 1428 on LeetCode
        </span>
        <br />
      </div>
    </div>
  );
}

export default About;