import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import profileImg from '../assets/images/profile.jpg';
import myrsume from '../assets/pdf/myresume.pdf';
const Hero = () => {
    const [text] = useTypewriter({
        words: ['Charan Sai Deekonda'],
        loop: true, 
        typeSpeed: 70,
        deleteSpeed: 50,
        delaySpeed: 1000,
    });

    return (
    <section id="hero" className="container mx-auto px-8 min-h-[calc(100vh-80px)] flex flex-col-reverse md:flex-row items-center pt-10 pb-16 md:pb-24">
        <div className="w-full mt-(-10) md:mr-30 md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-start">

                <img
                    src={profileImg}
                    alt="Charan Sai Deekonda"
                    className="w-80 h-80 md:w-[28rem] md:h-[28rem] rounded-full object-cover"
                />
            </div>

            <div className="w-full md:w-1/2 text-dark-bg text-center md:text-left mt-8 md:mt-0 md:mr-10 Text Column:">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 ">
                    <h2 className="text-2xl md:text-3xl">Hi, I am</h2>
                    <div className="text-zinc-900 ">
                        {text}
                        <Cursor cursorStyle='|' />
                    </div>
                </h1>

                <p className="max-w-xl text-lg md:text-2xl leading-relaxed mb-8">
                    Final-year Artificial Intelligence and Machine Learning student passionate about applying AI to solve real-world problems.
                    Skilled in developing efficient, high-quality software solutions with a strong focus on innovation, adaptability, and continuous learning.
                </p>

                <div className="flex justify-center md:justify-start">
                    <a
                        href={myrsume}
                        download="Charan_Sai_Deekonda_Resume.pdf"
                        className="bg-dark-bg text-light-text px-8 py-4 rounded-md text-xl font-medium
                        hover:bg-opacity-90 transition-all duration-200 shadow-lg"
                    >   
                        Download Resume
                    </a>
                </div>
            </div>

        </section>
    );
}

export default Hero;