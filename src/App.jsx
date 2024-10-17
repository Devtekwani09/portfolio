import './App.css';
import Nav from './Components/Nav';
import { MdEmojiEmotions } from "react-icons/md";
import profilePic from "../src/public/images/profile.png"
import HighlightedText from './Components/HighlightedText';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { projects } from './Data/projects';
import { useState } from 'react';
import Cards from './Components/Cards';
import java from '../src/public/images/skills/java2.png'
import css from '../src/public/images/skills/css2.png'
import python from '../src/public/images/skills/python.png'
import express from '../src/public/images/skills/express.png'
import git from '../src/public/images/skills/git.png'
import html from '../src/public/images/skills/html.png'
import js from '../src/public/images/skills/js.png'
import mongo from '../src/public/images/skills/mongo.png'
import node from '../src/public/images/skills/node.jpeg'
import react from '../src/public/images/skills/react.png'

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const projectTitle = [
  "All Projects",
  "Web Projects",
  "ML projects"
]

function App() {

  const [currTab, setCurrTab] = useState(projectTitle[0])
  const [project, setProject] = useState(projects[0].links)
  const [loading, setLoading] = useState(false);

  const setMyProject = (value) => {
    setCurrTab(value)
    const result = projects.filter((pro) => pro.title === value);
    setProject(result[0].links)
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    setLoading(true);  // Set loading to true at the start of form submission
    
    emailjs
      .sendForm('service_nmmhlkg', 'template_vtdmavu', form.current, 'OaFtkXeY25bfY4afP')
      .then(
        () => {
          toast.success('SUCCESS!...Email Sent successfully');
          e.target.reset();  // Clear the form after success
          setLoading(false);  // Set loading to false after success
        },
        (error) => {
          toast.error('FAILED!...Cannot send email, try again');
          setLoading(false);  // Set loading to false after failure
        }
      );
  };
  

  return (
    <div className='w-screen max-h-full min-h-full h-full bg-richblack-900 flex flex-col'>
      <Nav />

      <div id="Home" className='text-richblack-25 mt-[30px] w-11/12 items-center mx-auto'>
        <div className='flex-col-reverse md:flex-row  flex item-center justify-between p-3 w-full gap-5'>
          <div className='items-center md:items-start md:w-[50%] flex flex-col justify-center gap-6'> 
            <h1 className='flex flex-wrap items-center text-4xl font-semibold gap-3'><MdEmojiEmotions /> Hi, I'm Dev <HighlightedText text={"Tekwani"} /></h1>
            <p className='text-xl '>
              I am a dedicated full Stack Developer with a passion for continuous learning and problem solving
            </p>
            <a target='_blank' href="https://drive.google.com/file/d/1MJcVRjv0OSzLPyAhgyr87Oe0YXQPmWUj/view?usp=sharing" rel="noopener noreferrer">
              <button className='bg-richblack-600 p-3 rounded-md w-[130px] hover:bg-richblack-500 hover:scale-95 transition-all duration-200'>
                Resume
              </button>
            </a>
            

            <div className='flex flex-row gap-4 text-[40px]'>
              <a  href="https://github.com/Devtekwani09" target="_blank" rel="noopener noreferrer">
              <FaGithub />
              </a>
              <a href="linkedin.com/in/dev-tekwani-3b5b74220" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
              </a>
              
            </div>
          </div>

          <div className='md:w-[40%] flex items-center justify-center'>
            <img className='w-[40%] md:w-[80%] shadow-xl shadow-blue-100 rounded-full'
            src={profilePic} alt="" />
          </div>
        </div>

      </div>

      {/**********************Project Section**********************/}
      <div id="Projects" className=' mt-[15vh] mb-5 flex w-11/12 items-center mx-auto text-richblack-25'>
      <div className='flex gap-10 bg-richblack-600 w-fit p-4 rounded-full items-center mx-auto'>
        {projectTitle.map((Element, index) => {
          return(
            <div key={index}
            className= {`flex 
              ${currTab === Element
                ? "bg-richblack-800 p-3 rounded-full scale-105"
                : " "
              }
              cursor-pointer transition-all duration-200 hover:bg-richblack-800 hover:scale-95 hover:p-3 hover:rounded-full`}
              onClick={() => setMyProject(Element)}
            >
              {Element}
            </div>
          )
        })}
      </div>
      </div>

      
      <div className='h-full'>
        <div className=' w-11/12 flex flex-wrap items-center justify-center mx-auto gap-5 gap-y-16'>
          {project.map((Element, index) => {
            return(
              <Cards 
              key={index}
              data={Element}
              />
            )
          })}
        </div>
      </div>

      {/******************Skills Section  ***********************/}
      <div id='skills' className='h-full mt-[150px] text-richblack-25'>
        <div className='w-11/12 flex flex-col flex-wrap items-center justify-center mx-auto gap-5 gap-y-16'>
          <div className='flex text-4xl'>
            Languages & <HighlightedText text={"Tools"}/>
          </div>

          <div className='md:w-11/12 flex flex-wrap gap-x-32 gap-y-12 justify-center items-center mx-auto '>
            <img src={java} width={200} alt="java" className='bg-richblack-800 rounded-full shadow-[#f89820] shadow-inner hover:scale-110 duration-200 transition-all' />
            <img src={html} width={200} alt="java" className='bg-richblack-800 rounded-full shadow-[#f89820] shadow-inner hover:scale-110 duration-200 transition-all' />
            <img src={css} width={200} alt="java" className='bg-richblack-800 rounded-full shadow-blue-400 shadow-inner hover:scale-110 duration-200 transition-all' />
            <img src={js} width={200} alt="java" className='bg-richblack-800 rounded-full shadow-blue-400 shadow-inner hover:scale-110 duration-200 transition-all' />
            <img src={react} width={200} alt="java" className='bg-richblack-800 rounded-full shadow-blue-400 shadow-inner hover:scale-110 duration-200 transition-all' />
            <img src={node} width={200} alt="java" className='bg-richblack-800 rounded-full shadow-blue-400 shadow-inner hover:scale-110 duration-200 transition-all' />
            <img src={express} width={200} alt="java" className='bg-richblack-800 rounded-full shadow-blue-400 shadow-inner hover:scale-110 duration-200 transition-all' />
            <img src={mongo} width={200} alt="java" className='bg-richblack-800 rounded-full shadow-blue-400 shadow-inner hover:scale-110 duration-200 transition-all' />
            <img src={git} alt="java" className='bg-richblack-800 rounded-full shadow-blue-400 shadow-inner hover:scale-110 duration-200 transition-all' />
            <img src={python} alt="java" className='bg-richblack-800 rounded-full shadow-blue-400 shadow-inner hover:scale-110 duration-200 transition-all' />
          </div>

        </div>
      </div>


      {/******************Skills Section  ***********************/}
      <div id='contact' className='h-full mt-[150px] text-richblack-25'>
        <div className='w-11/12 bg-richblack-800 flex flex-col items-center mx-auto gap-5 gap-y-16 mt-5 mb-8 rounded-md'>
          <div className='flex text-4xl mt-4 gap-x-2'>
          Lets <HighlightedText text={" Connect"}/>
          </div>

          <div className='flex md:flex-row flex-col-reverse items-center flex-wrap-reverse justify-between w-11/12'>
            <div className='text-4xl'>
              Connect me on - 
              <div className='flex flex-row gap-4 text-[40px] mt-3'>
              <a href="https://github.com/Devtekwani09" target="_blank" rel="noopener noreferrer">
              <FaGithub />
              </a>
              <a href="linkedin.com/in/dev-tekwani-3b5b74220" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
              </a>
              
            </div>
              
            </div>

            <div className='flex flex-col w-[50%]'>
              <div className='text-3xl'>
                Contact Form
              </div>

              <form ref={form} onSubmit={sendEmail} className='flex flex-col mt-4 mb-4 gap-2'>
              <label>
              <p className='text-2xl text-richblack-5'>Name <sup className='text-pink-200'>*</sup></p>
              <input required type="text" name="user_name" className='text-richblack-5 bg-richblack-900 rounded-md p-2 w-full mt-1' />
              </label>
              
              <label>
              <p className='text-2xl text-richblack-5'>Email <sup className='text-pink-200'>*</sup></p>
              <input required type="email" name="user_email" className='text-richblack-5 bg-richblack-900 rounded-md p-2 w-full mt-1' />
              </label>
              
              <label>
              <p className='text-2xl text-richblack-5'>Message <sup className='text-pink-200'>*</sup></p>
              <textarea required name="message" className='text-richblack-5 bg-richblack-900 rounded-md p-2 w-full mt-1' />
              </label>
              
              <button type='submit' className='bg-yellow-100 text-richblack-900 p-2 w-full rounded-md hover:scale-95 duration-200 transition-all'>
                {
                  loading ? <p>Sending...</p> : <p>Send</p>
                }
              </button>
            </form>


            </div>
          </div>

        </div>
      </div>

    </div>

  );
}

export default App;