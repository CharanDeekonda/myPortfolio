import React from 'react';

const About = () => {
  return (
    <section id="about" className="w-full bg-dark-bg text-light-text pb-20 pt-10">
      <div className="container mx-auto px-8 ">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-light-text/80">
            My education and professional experience.
          </p>
        </div>
        <div className="max-w-3xl mx-auto flex flex-col gap-8">
          <div className="bg-light-text text-dark-bg p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold mb-4">Education</h3>
            <ul className="space-y-3">
              <li>
                <h4 className="font-bold text-xl">ACE Engineering College, Hyderabad</h4>
                <p className="text-lg">Computer Science (AIML) - GPA: 8.5</p>
              </li>
              <li>
                <h4 className="font-bold text-xl">Narayana Junior College, Hyderabad</h4>
                <p className="text-lg">Intermediate - GPA: 9.7</p>
              </li>
              <li>
                <h4 className="font-bold text-xl">The Nalgonda Public School, Nalgonda</h4>
                <p className="text-lg">CBSE - GPA: 7.9</p>
              </li>
            </ul>
          </div>

          <div className="bg-light-text text-dark-bg p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold mb-4">Professional Experience</h3>
            <div>
              <h4 className="font-bold text-xl">Accenture</h4>
              <p className="text-lg font-medium mb-2">Oracle Technical Consultant Intern</p>
              <p className="text-lg leading-relaxed mb-6">
                Worked in an agile setting to design, develop, and test 5+ business intelligence products.
                Exhibited excellent problem-solving abilities by creating complex SQL queries to extract data
                from a database containing more than 50,000 records for use in front-end dashboards.
              </p>
              <a 
                href="https://drive.google.com/file/d/1V78ftJEzCc7CSdsYodkEKKAtijY4xeTp/view" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-dark-bg text-light-text px-6 py-3 rounded-md text-lg font-medium
                           hover:bg-opacity-90 transition-all duration-200"
              >
                View Certificate
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;