import { Fragment } from "react";
import github from '../../../img/github.png'
import linkedIn from '../../../img/linked.png'
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {SiGithub} from 'react-icons/si'
import {SiLinkedin} from 'react-icons/si'
import '../css/landingPage.css'

import '../../../App.css'

const LandingPage=(props) =>{
    return(
    <Fragment className='landing-page'>
       <nav class=" px-2 sm:px-4 py-2.5  fixed w-full z-20 top-0 left-0 dark:border-gray-600">
          <div class="container flex flex-wrap items-center justify-between mx-auto">
          <a href="https://flowbite.com/" class="flex items-center">
              
              <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-slate-900">BellewJames</span>
          </a>
          <div class="flex md:order-2">
              <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-cyan-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
              <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
          <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
              <li>
                <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-slate-900 md:p-0 dark:text-white" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
              </li>
              <li>
                <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
              </li>
              <li>
                <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
              </li>
            </ul>
          </div>
          </div>
        </nav>
      <div className=" lg:px-20 relative p-5 lg:max-w-[60vw] w-full   tracking-widest ">
  <h1 className=" text-black mt-16 text-5xl font-extrabold
 
 ">Hi There.</h1> 
 <h1 className="text-black text-4xl font-bold lg:pt-10 mt-12 ">My Name Is <span className="text-cyan-500 font-extrabold text-4xl">James Bellew</span> </h1>
 <p className="
 text-black lg:pt-8 mt-3 text-3xl  leading-snug
 ">
   Software Engineer / Data Analyst with a passion for creating creative products</p>
   <button class="bg-indigo-600 lg:mt-20 hover:bg-blue-700 bg-slate-900 text-white text-xl font-bold py-2 px-4 rounded-lg">
  My Work
</button>
<button class="bg-cyan-500 mt-12 lg:mt-16 hover:bg-blue-700  text-xl font-bold py-2 px-4 rounded-lg ml-5 text-slate-800">
  Experience
</button>
   
 </div>

   <div className=" text-center mx-auto text-white lg:w-[40vw] w-[0]   h-full flex">
    
    <div className="text-center  self-center mx-auto">
   <SiLinkedin className="w-28 h-28 text-slate-900"/>
    </div>
    <div className="text-center mx-auto self-center">
    <SiGithub className="w-28 h-28 text-cyan-500"/>
    </div>
   </div>
   
    </Fragment>
    
   );
}

export default LandingPage();