
"use client";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import ScrollToTopButton from "./component/scrollToTop";
import { CiLinkedin } from "react-icons/ci";
import { FaMinus } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { RiInfoCardLine } from "react-icons/ri";
import { MdCleaningServices } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { PiBriefcaseBold } from "react-icons/pi";
import { IoIosContact } from "react-icons/io";
import Image from "next/image";
import { MdDevices } from "react-icons/md";
import { FaAcquisitionsIncorporated } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { GrDocumentPerformance } from "react-icons/gr";
import { AiOutlineApi } from "react-icons/ai";
import { GrDeploy } from "react-icons/gr";
import { TbSettingsPin } from "react-icons/tb";
import CircularProgress from "./component/circularProgress";
import { IoLocationSharp } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa6";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLine } from "react-icons/ri";




function Login() {
  const contactRef = useRef(null);
  const aboutRef = useRef(null)
  const resumeRef = useRef(null)
  const isInView = useInView(aboutRef, { threshold: 0.3 });
  const isInView2 = useInView(resumeRef, { threshold: 0.3 });
  const skillRef = useRef(null);
  const isInView3 = useInView(skillRef, { threshold: 0.3 });

  const [animateProgress, setAnimateProgress] = useState(false);
  useEffect(() => {
    if (isInView3) {
      setAnimateProgress(true); // Set progress once viewed
    }
  }, [isInView3]);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  

  const skills = [
    { name: "Html", percentage: 88 },
    { name: "Css", percentage: 83 },
    { name: "Javascript", percentage: 78 },
    { name: "React", percentage: 81 },
    { name: "Redux", percentage: 75 },
    { name: "Typescript", percentage: 76 },
    { name: "Next.js", percentage: 85 },
    { name: "Bootstrap", percentage: 65 },
    { name: "Tailwind", percentage: 89 },
    { name: "Typescript", percentage: 75 },
    { name: "Node.js", percentage: 85 },
  ];

  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };
  const Resume1 = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const Resume2 = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };


  const iconVariants = {
    hidden: { opacity: 0, x: -20 }, 
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }, 
    exit: { opacity: 0, x: -20, transition: { duration: 0.5 } },
  };
  
  const [activeSection, setActiveSection] = useState("");
  
  const [isVisible, setIsVisible] = useState(false);

  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    
    // Cleanup function
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);


  
 

  useEffect(() => {
    const sections = ["Home", "About", "Services", "Resume", "Skill", "Portfolio", "Contact"];
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sections.forEach((section) => {
              if (entry.target.classList.contains(section)) {
                setActiveSection(section);
              }
            });
          }
        });
      },
      { threshold: 0.5 } 
    );

  
    sections.forEach((section) => {
      const element = document.querySelector(`.${section}`);
      if (element) observer.observe(element);
    });
  
    return () => {
      sections.forEach((section) => {
        const element = document.querySelector(`.${section}`);
        if (element) observer.unobserve(element);
      });
    };
  }, []);


  // control menu bar on small and medium screen

  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const openMenuBar =()=>{
    setIsMenuOpen(true)
  }
  const closeMenuBar =()=>{
    setIsMenuOpen(false)
  }
  
  
  
  return (
  <div className="relative"> 
    <div className=" sidebar absolute lg:block lg:fixed top-0 left-0 bg-gray-800 h-screen lg:w-[22%] lg:z-0 shadow-[-6px_0_10px_rgba(0,0,0,0.5)]">
  <div className="border border-gray-600 justify-center flex py-[70px]">
    <p className="text-white font-semibold text-[35px]">
      <span className="text-yellow-600">A</span>yom<span className="text-yellow-600">i</span>de
    </p>
  </div>
  <div>
    {['Home', 'About', 'Services', 'Resume', 'Skill', 'Portfolio', 'Contact'].map((section) => (
      <div key={section} className="border-b-2 border-gray-700 py-[15px] lg:pl-[70px] text-[17px] font-semibold text-gray-400 flex items-center gap-6">
        <p className="hover:cursor-pointer hover:text-white" onClick={() => handleScroll(section)}>{section.toUpperCase()}</p>
        <div className="flex gap-6 items-center">
          <AnimatePresence>
            {activeSection === section && (
              <motion.p className="text-yellow-600 text-[22px] mt-1" initial="hidden" animate="visible" exit="exit" variants={iconVariants}>
                <FaMinus />
              </motion.p>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {activeSection === section && (
              <motion.p className="text-yellow-600 text-[19px] mb-1" initial="hidden" animate="visible" exit="exit" variants={iconVariants}>
                {section === 'Home' && <IoMdHome />}
                {section === 'About' && <RiInfoCardLine />}
                {section === 'Services' && <MdCleaningServices />}
                {section === 'Resume' && <FaGraduationCap />}
                {section === 'Skill' && <TbSettingsPin />}
                {section === 'Portfolio' && <PiBriefcaseBold />}
                {section === 'Contact' && <IoIosContact />}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    ))}
  </div>
    </div>
    <AnimatePresence>
    {isMenuOpen && (
      <motion.div onClick={closeMenuBar} initial={{ x: "-100%" }} animate={{ x: isMenuOpen ? 0 : "-100%" }} exit={{ x: "-100%" }} transition={{ type: "spring", stiffness: 60, damping: 15 }} className="fixed  inset-0 bg-black bg-opacity-50 z-50 flex">
      <div onClick={(e) => e.stopPropagation()} className={`dom relative sidebar top-0 left-0 bg-gray-800 h-screen md:w-[40%] w-[55%]  md:z-50 z-50 shadow-[-6px_0_10px_rgba(0,0,0,0.5)]${isMenuOpen ? 'z-50' : 'hidden md:block'}`}>
      {<div onClick={closeMenuBar} className="absolute top-4 right-6 text-white hover:cursor-pointer"><RiCloseLine size={25}/></div>}    <div className="border border-gray-600 justify-center flex py-[70px]">
        <p className="text-white font-semibold text-[35px]">
          <span className="text-yellow-600">A</span>yom<span className="text-yellow-600">i</span>de
        </p>
      </div>
      <div>
        <div className="border-b-2 border-gray-700 py-[15px] md:pl-[40px] pl-[27px] text-[17px] font-semibold text-gray-400 flex items-center gap-6">
          <p className="hover:cursor-pointer hover:text-white" onClick={() => handleScroll("Home")}>HOME</p>
          <div className="flex gap-6 items-center">
          <AnimatePresence>{ activeSection === "Home" && (<motion.p className="text-yellow-600 text-[22px] mt-1" initial="hidden"animate="visible" exit="exit"variants={iconVariants}><FaMinus/></motion.p> )}</AnimatePresence>
          <AnimatePresence> { activeSection === "Home" && (<motion.p className="text-yellow-600 text-[19px] mb-2" initial="hidden"animate="visible" exit="exit"variants={iconVariants}><IoMdHome/></motion.p>)} </AnimatePresence>
        </div>  
        </div>
        <div  className="border-b-2 border-gray-700 py-[15px] md:pl-[40px] pl-[27px] text-[17px] text-gray-400 font-semibold flex items-center gap-6">
                  <p className="hover:cursor-pointer hover:text-white" onClick={() => handleScroll("About")}>ABOUT</p>
                  <div className="flex gap-6 items-center">
                  <AnimatePresence>  {activeSection === "About" && (<motion.p className="text-yellow-600 text-[22px] mt-1" initial="hidden"animate="visible" exit="exit"variants={iconVariants}><FaMinus/></motion.p> )}  </AnimatePresence>
                  <AnimatePresence>{activeSection === "About" && (<motion.p className="text-yellow-600 text-[19px] mb-1" initial="hidden"animate="visible" exit="exit"variants={iconVariants}><RiInfoCardLine/></motion.p>)}</AnimatePresence>
                  </div>  
        </div>
        <div  className="border-b-2 border-gray-700 py-[15px] md:pl-[40px] pl-[27px] text-[17px] text-gray-400 font-semibold flex items-center gap-6">
                  <p className="hover:cursor-pointer hover:text-white" onClick={() => handleScroll("Services")}>SERVICES</p>
                  <div className="flex gap-6 items-center">
                  <AnimatePresence>{activeSection === "Services" && (<motion.p className="text-yellow-600 text-[22px] mt-1" initial="hidden"animate="visible" exit="exit"variants={iconVariants}><FaMinus/></motion.p> )}</AnimatePresence>
                  <AnimatePresence>{activeSection === "Services" && (<motion.p className="text-yellow-600 text-[19px] mb-1"initial="hidden"animate="visible" exit="exit"variants={iconVariants}><MdCleaningServices/></motion.p>)}</AnimatePresence>
                  </div>  
        </div>
        <div  className="border-b-2 border-gray-700 py-[15px] md:pl-[40px] pl-[27px] text-[17px] font-semibold text-gray-400 flex items-center gap-6">
                  <p className="hover:cursor-pointer hover:text-white" onClick={() => handleScroll("Resume")}>RESUME</p>
                  <div className="flex gap-6 items-center">
                  <AnimatePresence>{activeSection === "Resume" &&(<motion.p className="text-yellow-600 text-[22px] mt-1" initial="hidden"animate="visible" exit="exit"variants={iconVariants}><FaMinus/></motion.p> )}</AnimatePresence>
                  <AnimatePresence>{activeSection === "Resume" &&(<motion.p className="text-yellow-600 text-[19px] mb-1" initial="hidden"animate="visible" exit="exit"variants={iconVariants}><FaGraduationCap/></motion.p>)}</AnimatePresence>
                  </div> 
        </div >
        <div  className="border-b-2 border-gray-700 py-[15px] md:pl-[40px] pl-[27px] text-[17px] font-semibold text-gray-400 flex items-center gap-6">
                  <p className="hover:cursor-pointer hover:text-white" onClick={() => handleScroll("Skill")}>SKILL</p>
                  <div className="flex gap-6 items-center">
                  <AnimatePresence>{activeSection === "Skill" &&(<motion.p className="text-yellow-600 text-[22px] mt-1" initial="hidden"animate="visible" exit="exit"variants={iconVariants}><FaMinus/></motion.p> )}</AnimatePresence>
                  <AnimatePresence>{activeSection === "Skill" &&(<motion.p className="text-yellow-600 text-[19px] mb-1" initial="hidden"animate="visible" exit="exit"variants={iconVariants}><TbSettingsPin/></motion.p>)}</AnimatePresence>
                  </div> 
        </div >
        <div className="border-b-2 border-gray-700 py-[15px] md:pl-[40px] pl-[27px] font-semibold text-[17px] text-gray-400 flex items-center gap-6">
                  <p className="hover:cursor-pointer hover:text-white" onClick={() => handleScroll("Portfolio")}>PORTFOLIO</p>
                  <div className="flex gap-6 items-center">
                  <AnimatePresence>{activeSection === "Portfolio" && (<motion.p className="text-yellow-600 text-[22px] mt-1" initial="hidden"animate="visible" exit="exit"variants={iconVariants}><FaMinus/></motion.p> )}</AnimatePresence>
                  <AnimatePresence>{activeSection === "Portfolio" && (<motion.p className="text-yellow-600 text-[19px] mb-1" initial="hidden"animate="visible" exit="exit"variants={iconVariants}><PiBriefcaseBold/></motion.p>)}</AnimatePresence>
                  </div> 
        </div>
        <div className="border-b-2 border-gray-700 py-[15px]  md:pl-[40px] pl-[27px] text-[17px] font-semibold text-gray-400 flex items-center gap-6">
                  <p className="hover:cursor-pointer hover:text-white" onClick={() => handleScroll("Contact")}>CONTACT</p>
                  <div className="flex gap-6 items-center">
                  <AnimatePresence>{activeSection === "Contact" && (<motion.p className="text-yellow-600 text-[22px] mt-1 " initial="hidden"animate="visible" exit="exit"variants={iconVariants}><FaMinus/></motion.p>)} </AnimatePresence>
                  <AnimatePresence>{activeSection === "Contact" && (<motion.p className="text-yellow-600 text-[19px] mb-1" initial="hidden"animate="visible" exit="exit"variants={iconVariants}><IoIosContact/></motion.p>)}</AnimatePresence>
                  </div> 
        </div>
                
      </div>
    </div>
    </motion.div>)}
    </AnimatePresence>
  <div className=" w-full relative lg:w-[78%] min-h-screen lg:ml-[22%] ">
      <div className=" fixed inset-0 lg:w-[78%] w-[950px] md:w-[1000px] h-screen bg-cover bg-center lg:ml-[22%]  bg-no-repeat" 
        style={{ backgroundImage: "url('/bg2.jpeg')" }}>
        <div className="absolute inset-0 bg-gray-800 bg-opacity-50"></div>
      </div>
      <div className="relative z-10 h-screen overflow-y-auto  text-white">
      {isVisible && (
          <button
            onClick={()=> window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bg-yellow-600 bottom-6 right-11 z-40 rounded-full text-[15px] p-[15px] text-white flex items-center"
          >
            <FaAngleUp />
          </button>
        )}
      <div onClick={openMenuBar} className="lg:hidden z-50 fixed top-6 right-[45px] h-[100px] text-white hover:cursor-pointer"><GiHamburgerMenu size={27}/></div>
        <div id="Home" className="Home py-[250px] lg:px-[70px] md:px-[70px] px-[43px]">
          <h1 className="text-3xl font-semibold ">Hi! I’m Liadi Ayomide Daniel</h1>
          <p className="mt-4 text-[70px] font-extrabold mb-[-30px]">WEB</p>
          <p className="text-[70px] font-extrabold text-yellow-600">Developer.</p>
        </div>
        <div id="About" ref={aboutRef} className="About bg-gray-800 py-[80px] px-[60px]  overflow-hidden">
              <p className="text-yellow-600 flex justify-center font-semibold text-[28px]">ABOUT ME</p>
              <div className="flex align-middle justify-center text-yellow-600 text-[26px] gap-1">
                  <FaMinus/> 
                  <RiInfoCardLine/>
                  <FaMinus/> 
              </div>
              <div className="lg:flex md:flex gap-[40px] mt-[60px]">
                  <motion.div className="image  relative lg:mb-0 md:mb-0 mb-[40px] lg:border-[7px] mb:border-[4px] border-[3px] border-gray-600 " variants={imageVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
                    <Image 
                      src="/single.jpeg" 
                      alt="Single Image" 
                      width={450}
                      height={100} 
                      style={{ width: "100%", height: "auto" }} 
                    />
                    <div className="absolute inset-0 bg-gray-600 bg-opacity-25 transition-opacity duration-300 hover:opacity-0"></div>
                  </motion.div>
                  <motion.div className="text lg:w-[65%] md:w-[65%] w-full " variants={textVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
                    <p className="font-medium lg:text-[20px] md:text-[13px] text-[18px]">Hi! I’m Liadi Ayomide Daniel</p>
                    <FaMinus className="text-yellow-600 text-[30px]"/>
                    <p className="font-medium lg:text-[25px] md:text-[16px] text-[20px] mb-8">I'm a Web Developer based in Abuja, Nigeria.</p>
                    <p className="text-gray-400 lg:text-[15px] md:text-[12px] text-[11px] lg:mb-4 mb-3">An innovative and detail-oriented Web Developer passionate about building dynamic, user-friendly, 
                      and visually appealing web experiences.</p>
                      <p className="text-gray-400 lg:text-[15px] md:text-[12px] text-[11px]">Proficient in modern web technologies, front-end frameworks, 
                      and responsive design principles. Skilled in problem-solving and optimizing performance to deliver 
                      high-quality, scalable solutions. Adapt at collaborating with teams and stakeholders to create seamless
                       digital experiences while staying up to date with emerging web trends and technologies.
                       </p>
                      <div className="flex gap-6 mt-7">
                        <a  href="/LIADI AYOMIDE DANIEL CV.pdf" download="Liadi_Ayomide_Daniel_CV.pdf" className="bg-yellow-600  lg:px-[16px] md:px-[11px] px-[20px] lg:py-[10px] md:py-[7px] py-[11px] text-white text-center font-semibold lg:text-[15px] md:text-[11px] text-[11px] hover:no-underline hover:text-white">DOWNLOAD CV</a>
                        <button onClick={scrollToContact}  className="hover:bg-yellow-600 border-2 border-yellow-600 px-[40px] py-[10px] text-yellow-600 lg:px-[16px] md:px-[11px] sm:px-[7px] lg:py-[10px] md:py-[7px]  text-center font-semibold lg:text-[15px] md:text-[11px] text-[11px] hover:text-white">HIRE ME</button>  
                      </div> 
                  </motion.div>
            </div>
        </div>
        <div id="Services" className="Services bg-gray-900 px-[60px] py-[80px]">
            <p className="text-yellow-600 flex justify-center font-semibold text-[28px]">MY SERVICES</p>
            <div className="flex align-middle justify-center text-yellow-600 text-[26px] gap-1">
                  <FaMinus/> 
                  <MdCleaningServices/>
                  <FaMinus/> 
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3  gap-[30px] pt-[60px]">
                <div className="group flex flex-col items-center ">
                    <div className="border border-yellow-600 group-hover:bg-yellow-600 transition-all duration-1000  rounded-full items-center align-middle p-[13px]"><MdDevices className="text-yellow-600 text-[25px] transition-all duration-1000 group-hover:text-white"/></div>
                    <p className="font-semibold mt-[20px] text-center ">CUSTOM WEB DEVELOPMENT</p>
                    <p className="text-gray-400 text-center lg:text-[14px] md:text-[12px] text-[11px]">I design and develop modern, responsive websites tailored to your needs—whether
                       it’s a personal portfolio, business website, or landing page.</p>
                </div>
                <div className="group flex flex-col items-center ">
                    <div className="border border-yellow-600 group-hover:bg-yellow-600 transition-all duration-1000  rounded-full items-center align-middle p-[13px]"><FaAcquisitionsIncorporated className="text-yellow-600 text-[25px] transition-all duration-1000 group-hover:text-white"/></div>
                    <p className="font-semibold mt-[20px] text-center ">UI/UX IMPLEMENTATION</p>
                    <p className="text-gray-400 text-center lg:text-[14px] md:text-[12px] text-[11px]">I transform design concepts into fully functional and interactive web experiences, 
                      ensuring pixel-perfect accuracy and seamless user interactions.</p>
                </div>
                <div className="group flex flex-col items-center ">
                    <div className="border border-yellow-600 group-hover:bg-yellow-600 transition-all duration-1000  rounded-full items-center align-middle p-[13px]"><FaCartShopping className="text-yellow-600 text-[25px] transition-all duration-1000 group-hover:text-white"/></div>
                    <p className="font-semibold mt-[20px] text-center ">E-COMMERCE DEVELOPMENT</p>
                    <p className="text-gray-400 text-center lg:text-[14px] md:text-[12px] text-[11px]">Looking to sell online? I build and customize online stores with secure payment gateways,
                       smooth checkout experiences, and optimized product displays.</p>
                </div>
                <div className="group flex flex-col items-center ">
                    <div className="border border-yellow-600 group-hover:bg-yellow-600 transition-all duration-1000  rounded-full items-center align-middle p-[13px]"><GrDocumentPerformance className="text-yellow-600 text-[25px] transition-all duration-1000 group-hover:text-white"/></div>
                    <p className="font-semibold mt-[20px] text-center ">PERFORMANCE OPTIMIZATION</p>
                    <p className="text-gray-400 text-center lg:text-[15px] md:text-[12px] text-[11px]">A slow website drives users away. I optimize websites for speed, 
                      responsiveness, and efficiency to enhance user experience and SEO rankings.</p>
                </div>
                <div className="group flex flex-col items-center ">
                    <div className="border border-yellow-600 group-hover:bg-yellow-600 transition-all duration-1000  rounded-full items-center align-middle p-[13px]"><AiOutlineApi className="text-yellow-600 text-[25px] transition-all duration-1000 group-hover:text-white"/></div>
                    <p className="font-semibold mt-[20px] text-center ">API INTEGRATION & WEB APPS</p>
                    <p className="text-gray-400 text-center lg:text-[14px] md:text-[12px] text-[11px]">From third-party services to interactive dashboards,
                       I integrate APIs and develop dynamic web applications to streamline your business processes.</p>
                </div>
                <div className="group flex flex-col items-center ">
                    <div className="border border-yellow-600 group-hover:bg-yellow-600 transition-all duration-1000  rounded-full items-center align-middle p-[13px]"><GrDeploy className="text-yellow-600 text-[25px] transition-all duration-1000 group-hover:text-white"/></div>
                    <p className="font-semibold mt-[20px] text-center ">HOSTING & DEPLOYMENT</p>
                    <p className="text-gray-400 text-center lg:text-[14px] md:text-[12px] text-[11px]">I handle domain setup, SSL certification, and cloud deployment (Vercel, Netlify, AWS) 
                      so your website stays secure and always online.</p>
                </div>
            </div>
        </div>
        <div id="Resume" ref={resumeRef} className="Resume  bg-gray-800 py-[80px] px-[60px] overflow-hidden">
             <p className="text-yellow-600 flex justify-center font-semibold text-[28px]">RESUME</p>
              <div className="flex align-middle justify-center  text-yellow-600 text-[26px] gap-1">
                  <FaMinus/> 
                  <FaGraduationCap/>
                  <FaMinus/> 
              </div>
              <div className="mt-[60px] justify-center items-center flex">
                <motion.div className="w-[50%]" variants={Resume2} initial="hidden" animate={isInView2 ? "visible" : "hidden"}>
                    <div className="border-2 border-gray-700  lg:p-[20px] md:p-[20px] p-[31px] lg:pb-[20px] md:pb-[20px] pb-[38px] relative">
                        <p className="lg:text-[15px] md:text-[15px] text-[12px] mb-[20px]">2023 - 2025</p>
                        <p className="text-yellow-600 lg:text-[17px] md:text-[17px] text-[10px] mb-1">Rework, Abuja Nigeria </p>
                        <p className="lg:text-[13px] md:text-[13px] text-[10px]">Web Developer</p>
                        <PiBriefcaseBold className="text-gray-600 absolute lg:right-3 md:right-3 lg:top-4 md:top-4 right-3 top-7 lg:text-[30px] md:text-[30px] text-[20px]"/>
                    </div>
                </motion.div>
              </div>
        </div>
        <div id="Skill" ref={skillRef} className="Skill  bg-gray-900 px-[60px] py-[80px]">
              <p className="text-yellow-600 flex justify-center font-semibold text-[28px]">MY SKILL</p>
              <div className="flex align-middle justify-center text-yellow-600 text-[26px] gap-1">
                  <FaMinus/> 
                  <TbSettingsPin/>
                  <FaMinus/> 
              </div>
              <motion.div className="grid lg:grid-cols-4 md:grid-cols-2  gap-6 mt-[60px]" initial="hidden" animate={animateProgress ? "visible" : "hidden"} transition={{ staggerChildren: 0.2 }}>
                {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="text-center items-center flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  animate={animateProgress ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <CircularProgress percentage={animateProgress ? skill.percentage : 0} />
                  <p className="text-gray-400 text-[18px]">{skill.name}</p>
                </motion.div>
                  ))}
              </motion.div>
        </div>
        <div id="Portfolio" className="Portfolio  bg-gray-800 py-[80px] px-[60px]">
              <p className="text-yellow-600 flex justify-center font-semibold text-[28px]">MY PORTFOLIO</p>
              <div className="flex align-middle justify-center text-yellow-600 text-[26px] gap-1">
                  <FaMinus/> 
                  <PiBriefcaseBold/>
                  <FaMinus/> 
              </div>
              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-6 mt-[60px]  px-[100px]">
                  <div className="box lg:h-[350px] md:h-[350px] h-[150px] lg:w-[350px] md:w-[350px] w-[150px] border border-gray-600 justify-center align-middle relative group overflow-hidden">
                      <Image
                        src="/cinco-logo.png"
                        alt="Cinco Image" 
                        width={350}
                        height={350}  
                        className="absolute transform scale-100 transition-all duration-[5000ms] ease-in-out group-hover:scale-110 "
                      />

                      <div className="trans p-7 absolute inset-0 bg-black flex bg-opacity-60 scale-0 rotate-[-180deg] text-center items-center justify-center transition-all duration-[20000ms] ease-[cubic-bezier(0.1,0.7,0.1,1)] group-hover:scale-100 group-hover:rotate-0">
                        <div className="text-[13px]">
                          <p className="lg:text-[12px] md:text-[11px] text-[9px]">Cinco Cinema</p>
                          <p className="text-yellow-600 lg:text-[12px] md:text-[11px] text-[9px]">Web Design</p>
                          <a className="lg:text-[12px] md:text-[11px] text-[9px]" href="https://cincocinema.onrender.com">View</a>
                        </div>
                      </div>
                  
                  </div>
              </div>
        </div>
        <div id="Contact" ref={contactRef} className="Contact  bg-gray-900 py-[80px] px-[60px]">
          <p className="text-yellow-600 flex justify-center font-semibold text-[28px]">CONTACT ME</p>
              <div className="flex align-middle justify-center text-yellow-600 text-[26px] gap-1">
                  <FaMinus/> 
                  <IoIosContact/>
                  <FaMinus/> 
              </div>
              <div className="grid lg:px-0 md:px-0  lg:grid-cols-4 md:grid-cols-2 grid-cols-1  justify-between items-center align-middle  mt-[60px]">
                <div className="group flex flex-col items-center lg:mb-0 md:mb-0 mb-[40px] ">
                      <div className="border border-yellow-600 group-hover:bg-yellow-600 transition-all duration-1000  rounded-full items-center align-middle p-[13px]"><IoLocationSharp className="text-yellow-600 text-[25px] transition-all duration-1000 group-hover:text-white"/></div>
                      <p className="font-semibold mt-[20px] text-center ">LOCATION</p>
                      <p className="text-gray-400 text-center">FCT, Abuja</p>
                </div>
                <div className="group flex flex-col items-center lg:mb-0 md:mb-0 mb-[40px]">
                      <div className="border border-yellow-600 group-hover:bg-yellow-600 transition-all duration-1000  rounded-full items-center align-middle p-[13px]"><IoMail className="text-yellow-600 text-[25px] transition-all duration-1000 group-hover:text-white"/></div>
                      <p className="font-semibold mt-[20px] text-center ">EMAIL</p>
                      <p className="text-gray-400 text-center">liadiwalemide@gmail.com</p>
                </div>
                <div className="group flex flex-col items-center md:mt-[40px] lg:mt-0 lg:mb-0 md:mb-0 mb-[40px]">
                      <div className="border border-yellow-600 group-hover:bg-yellow-600 transition-all duration-1000  rounded-full items-center align-middle p-[13px]"><FaPhoneAlt className="text-yellow-600 text-[25px] transition-all duration-1000 group-hover:text-white"/></div>
                      <p className="font-semibold mt-[20px] text-center ">PHONE</p>
                      <p className="text-gray-400 text-center">+2347048450967</p>
                      
                </div> 
                <div className="group flex flex-col items-center hover:cursor-pointer lg:mt-0 md:mt-[40px]">
                <a 
                  href="https://www.linkedin.com/in/ayomide-liadi-346ab4206/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className=" border border-yellow-600 group-hover:bg-yellow-600 transition-all duration-1000  rounded-full items-center align-middle p-[13px]"
                >
                  <CiLinkedin  className="text-yellow-600 text-[25px] transition-all duration-1000 group-hover:text-white"/>
                </a>                      <p className="font-semibold mt-[20px] text-center ">linkedin</p>
                      <p className="text-gray-400 text-center">www.linkedin.com</p>
                </div> 
                
              </div>
        </div>
      </div>
  </div>

</div>

  );
}

export default Login;

