/* eslint-disable no-unused-vars */
import React from 'react';
// Import icons for contact info
import { MdOutlineEmail, MdOutlinePhone, MdOutlineLocationOn } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    // Section with the light background
    <section id="contact" className="w-full bg-light-text text-dark-bg py-24">
      <div className="container mx-auto px-8">

        {/* --- Section Title --- */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Get in Touch</h2>
          <p className="text-xl text-dark-bg/80">
            I'm open to discussing new opportunities or projects.
          </p>
        </div>

        {/* --- Two-Column Layout --- */}
        <div className="flex flex-col md:flex-row gap-12">

          {/* ===== Left Column: Contact Details ===== */}
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              
              {/* Email */}
              <div className="flex items-start gap-4">
                <MdOutlineEmail className="text-3xl mt-1" />
                <div>
                  <h4 className="text-xl font-bold">Email</h4>
                  <a href="mailto:maildcharansai@gmail.com" className="text-lg hover:underline">
                    maildcharansai@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <MdOutlinePhone className="text-3xl mt-1" />
                <div>
                  <h4 className="text-xl font-bold">Phone</h4>
                  <a href="tel:+918341059364" className="text-lg hover:underline">
                    +91 8341059364
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start gap-4">
                <FaLinkedin className="text-3xl mt-1" />
                <div>
                  <h4 className="text-xl font-bold">LinkedIn</h4>
                  <a href="https://linkedin.com/in/charan-sai-deekonda" target="_blank" rel="noopener noreferrer" className="text-lg hover:underline">
                    linkedin.com/in/charan-sai-deekonda
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <MdOutlineLocationOn className="text-3xl mt-1" />
                <div>
                  <h4 className="text-xl font-bold">Location</h4>
                  <p className="text-lg">Hyderabad, Telangana</p>
                </div>
              </div>

            </div>
          </div>

          {/* ===== Right Column: Contact Form ===== */}
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl font-bold mb-6">Send Me a Message</h3>
            
            {/* This form uses Formspree. 
              See instructions below to set this up.
            */}
            <form 
              action="https://formspree.io/f/xjkppzzo" // <-- IMPORTANT: Update this
              method="POST"
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-lg font-medium mb-2">Your Name</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  required
                  className="w-full p-3 bg-white text-dark-bg border-2 border-dark-bg/30 rounded-md
                             focus:outline-none focus:border-dark-bg"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium mb-2">Your Email</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  required
                  className="w-full p-3 bg-white text-dark-bg border-2 border-dark-bg/30 rounded-md
                             focus:outline-none focus:border-dark-bg"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows="5" 
                  required
                  className="w-full p-3 bg-white text-dark-bg border-2 border-dark-bg/30 rounded-md
                             focus:outline-none focus:border-dark-bg"
                ></textarea>
              </div>
              <div>
                <button 
                  type="submit"
                  className="bg-dark-bg text-light-text px-8 py-3 rounded-md text-lg font-medium
                             hover:bg-opacity-90 transition-all duration-200 shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;