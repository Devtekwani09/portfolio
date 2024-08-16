import './App.css';
import Nav from './Components/Nav';
import { MdEmojiEmotions } from "react-icons/md";
import profilePic from "../src/public/images/profile.png"
import HighlightedText from './Components/HighlightedText';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { projects } from './Data/projects';
import { useState } from 'react';
import Cards from './Components/Cards';

const projectTitle = [
  "All Projects",
  "Web Projects",
  "ML projects"
]

function App() {

  const [currTab, setCurrTab] = useState(projectTitle[0])
  const [project, setProject] = useState(projects[0].links)
  console.log(project)
  const [currCard, setCurrCard] = useState(projects[0].links[0])

  return (
    <div className='w-screen max-h-full min-h-full h-full bg-richblack-900 '>
      <Nav />

      <div className='text-richblack-25 mt-[30px] w-11/12 items-center mx-auto'>
        <div className='flex-col-reverse md:flex-row  flex item-center justify-between p-3 w-full gap-5'>
          <div className='items-center md:items-start md:w-[50%] flex flex-col justify-center gap-6'> 
            <h1 className='flex flex-wrap items-center text-4xl font-semibold gap-3'><MdEmojiEmotions /> Hi, I'm Dev <HighlightedText text={"Tekwani"} /></h1>
            <p className='text-xl '>
              I am a dedicated full Stack Developer with a passion for continuous learning and problem solving
            </p>
            <button className='bg-richblack-600 p-3 rounded-md w-[130px] hover:bg-richblack-500 hover:scale-95 transition-all duration-200'>
              Resume
            </button>

            <div className='flex flex-row gap-4 text-[40px]'>
              <FaGithub />
              <FaLinkedin />
            </div>
          </div>

          <div className='md:w-[40%] flex items-center justify-center'>
            <img className='w-[40%] md:w-[80%] shadow-xl shadow-blue-100 rounded-full'
            src={profilePic} alt="" />
          </div>
        </div>

      </div>

      {/**********************Project Section**********************/}
      <div className='mt-[15vh] mb-5 flex w-11/12 items-center mx-auto text-richblack-25'>
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
            >
              {Element}
            </div>
          )
        })}
      </div>
      </div>

      
      <div className='h-full'>
        <div className='w-11/12 flex flex-wrap items-center justify-center mx-auto gap-5'>
          {project.map((Element, index) => {
            return(
              <Cards 
              key={index}
              data={Element}
              // className=''
              />
            )
          })}
        </div>
      </div>

      </div>

  );
}

export default App;
