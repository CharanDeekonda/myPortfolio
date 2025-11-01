/* eslint-disable no-unused-vars */
import React from 'react';
import { 
  FaJava, FaPython, FaDatabase, FaReact, FaNodeJs, 
  FaGitAlt, FaGithub, FaProjectDiagram, FaObjectGroup, 
  FaBrain, FaNetworkWired, FaServer, FaChartBar, 
  FaTable, FaCalculator, FaCode, FaTasks, FaSyncAlt
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { TbBrandCpp } from 'react-icons/tb';
const technologies = [
  { icon: <FaJava />, label: "Java" },
  { icon: <FaPython />, label: "Python" },
  { icon: <TbBrandCpp />, label: "C/C++" },
  { icon: <IoLogoJavascript />, label: "JavaScript" },
  { icon: <FaReact />, label: "React.js" },
  { icon: <FaNodeJs />, label: "Node.js" },
  { icon: <FaCode />, label: "LeetCode (250+)" },
  { icon: <FaDatabase />, label: "SQL/MySQL" },
  { icon: <FaGitAlt />, label: "Git" },
  { icon: <FaGithub />, label: "GitHub" },
  { icon: <FaTasks />, label: "Postman" }, 
  { icon: <FaDatabase />, label: "Oracle BI" }, 
  
];

const coreConcepts = [
  { icon: <FaProjectDiagram />, label: "Data Structures" },
  { icon: <FaObjectGroup />, label: "OOP" },
  { icon: <FaBrain />, label: "Machine Learning" },
  { icon: <FaBrain />, label: "Scikit-learn" }, 
  { icon: <FaTable />, label: "Pandas" }, 
  { icon: <FaCalculator />, label: "NumPy" }, 
  { icon: <FaChartBar />, label: "Matplotlib" }, 
  { icon: <FaDatabase />, label: "DBMS" },
  { icon: <FaNetworkWired />, label: "Computer Networks" },
  { icon: <FaSyncAlt />, label: "SDLC" }
];

const Skills = () => {
  const SkillCard = ({ icon, label }) => (
    <div 
      className="bg-light-text text-dark-bg p-6 rounded-lg shadow-xl
                 flex flex-col items-center justify-center
                 transition-all duration-300 hover:scale-105 hover:bg-white"
    >
      <div className="text-5xl mb-3">{icon}</div>
      <span className="text-lg font-medium text-center">{label}</span>
    </div>
  );
  return (
    <section id="skills" className="w-full bg-dark-bg text-light-text py-24">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">My Skills</h2>
          <p className="text-xl text-light-text/80">
            The technologies and concepts I work with.
          </p>
        </div>

        <h3 className="text-3xl font-bold mb-8 text-center">Languages & Technologies</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-16">
          {technologies.map((skill, index) => (
            <SkillCard key={index} icon={skill.icon} label={skill.label} />
          ))}
        </div>

        <h3 className="text-3xl font-bold mb-8 text-center">Core Concepts & Subjects</h3>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {coreConcepts.map((skill, index) => (
            <SkillCard key={index} icon={skill.icon} label={skill.label} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;