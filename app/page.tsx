'use client';
import Image from "next/image";
import { useEffect } from "react";
import { CircleChevronDown, Play, LoaderCircle, Circle, Instagram, Linkedin, Phone, AtSign, ChevronRight } from "lucide-react"
import Link from "next/link";



export default function Home() {
  useEffect(() => {
    if(typeof window !== 'undefined' && !localStorage.getItem('scrolled')) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
      localStorage.setItem('scrolled', 'true');
    }
  },[]);

  return (
    <div className="font-sans flex flex-col items-start justify-items-start min-h-screen pt-20 px-20 gap-16 sm:px-20 sm:pt-20 overflow-x-hidden relative overflow-auto md:overflow-hidden">
      <Image width={1000} height={1000} src="/assets/img/person/4.png" alt="RizalAmriRozaqi" className="w-2xl h-2xl z-70 rounded-lg drop-shadow-xl absolute -bottom-5 right-50 up-down 2xl:block hidden " />
      <header className="hidden absolute top-0 left-0 md:flex flex-row w-full max-h-xl border-blue-600 border-b-2 sm:px-20 sm:py-3">
        <div className="flex flex-row justify-start items-center w-full h-full">
          <Link href="/portfolio" className="w-full h-full text-nowrap rounded-lg px-4 py-2  header-responsive hover:text-blue-400 group">
            <p className="group-hover:-translate-y-2">Portfolio</p>
          </Link>
          <Link href="/cv" className="w-full h-full text-nowrap rounded-lg px-4 py-2  header-responsive hover:text-blue-400 group">
            <p className="group-hover:-translate-y-2">Curriculum Vitae</p>
          </Link>
          <Link href="/softskill" className="w-full h-full text-nowrap rounded-lg px-4 py-2  header-responsive hover:text-blue-400 group">
            <p className="group-hover:-translate-y-2">Soft Skill</p>
          </Link>
          <Link href="/hardskill" className="w-full h-full text-nowrap rounded-lg px-4 py-2  header-responsive hover:text-blue-400 group">
            <p className="group-hover:-translate-y-2">Hard Skill</p>
          </Link>
          <Link href="/" className="w-full h-full text-nowrap rounded-lg px-4 py-2  header-responsive hover:text-blue-400 group">
            <p className="group-hover:-translate-y-2">About Me</p>
          </Link>
        </div>
        <div className="flex flex-row justify-start items-center w-full h-full"></div>
        <div className="flex flex-row justify-start items-center w-full h-full"></div>
      </header>
      

      {/* <div className="absolute top-0 right-0 bg-gradient-to-t from-transparent to-black/5 dark:from-transparent dark:to-white/5 w-full h-full z-20 pointer-events-none"></div> */}
      <div className="absolute top-0 right-0 bg-gradient-to-bl from-transparent to-blue-600/5 w-screen h-screen z-90 pointer-events-none"></div>
      <div className="absolute top-0 right-0 bg-gradient-to-br from-transparent to-blue-600/5 w-screen h-screen z-90 pointer-events-none"></div>
        <div className="flex flex-row relative w-full h-full ">
            <Play className=" absolute top-0 right-30 md:-top-5 md:right-10 2xl:-top-24 2xl:right-0 stroke2 stroke-blue-200 h-16 w-16 md:h-[350px] md:w-[350px] 2xl:h-[700px] 2xl:w-[700px] rotate-left"  />
            <LoaderCircle className="absolute top-0 right-26 2xl:top-32 2xl:right-10 stroke2 stroke-blue-200 h-4 w-4 2xl:h-[50px] 2xl:w-[50px] rotate-left delay-200"  />
            <CircleChevronDown className=" absolute top-10 right-28 2xl:top-0 2xl:right-0 stroke2 stroke-blue-200 h-5 w-5 2xl:h-[55px] 2xl:w-[55px] rotate-left delay-500"  />
            <Circle className=" absolute top-18 right-22 2xl:top-0 2xl:right-20 stroke2 stroke-blue-200 h-6 w-6 2xl:h-[60px] 2xl:w-[60px] rotate-left delay-600"  />


          <div className="flex flex-col gap-28 items-center sm:items-start relative w-full h-full">


            <div className="flex items-start md:justify-start justify-center pt-28 flex-col">
                <h1 className="superheading-responsive typing overflow-hidden text-nowrap z-10">Hi, I&apos;m Rizal Amri Rozaqi</h1>
                <h1 className="superheading-responsive typing overflow-hidden text-nowrap z-10 delay-300">Web Developer</h1>
            </div>


            <div className="md:hidden w-full h-full justify-center items-center gap-7 grid grid-cols-2">
              <Link href="/portfolio" className="flex flex-row gap-2 items-center justify-center overflow-hidden text-white dark:text-black px-4 py-2 rounded-full bg-gray-800 dark:bg-slate-100 relative 
                before:content-[''] before:w-full before:h-0 before:bg-blue-200 hover:before:h-full before:transition-all before:duration-300 before:absolute before:bottom-0 
                after:content-[''] after:w-full after:h-0 after:bg-blue-400 hover:after:h-full after:transition-all after:duration-300 after:absolute after:bottom-0 after:delay-100
                ">
                <p className="z-10 link-responsive">Portfolio</p>
                <ChevronRight className="w-auto h-auto right-left z-10" />
              </Link>
              <Link href="/cv" className="flex flex-row gap-2 items-center justify-center overflow-hidden text-white dark:text-black px-4 py-2 rounded-full bg-gray-800 dark:bg-slate-100 relative 
                before:content-[''] before:w-full before:h-0 before:bg-blue-200 hover:before:h-full before:transition-all before:duration-300 before:absolute before:bottom-0 
                after:content-[''] after:w-full after:h-0 after:bg-blue-400 hover:after:h-full after:transition-all after:duration-300 after:absolute after:bottom-0 after:delay-100
                ">
                <p className="z-10 link-responsive">CV</p>
                <ChevronRight className="w-auto h-auto right-left z-10" />
              </Link>
              <Link href="/softskill" className="flex flex-row gap-2 items-center justify-center overflow-hidden text-white dark:text-black px-4 py-2 rounded-full bg-gray-800 dark:bg-slate-100 relative 
                before:content-[''] before:w-full before:h-0 before:bg-blue-200 hover:before:h-full before:transition-all before:duration-300 before:absolute before:bottom-0 
                after:content-[''] after:w-full after:h-0 after:bg-blue-400 hover:after:h-full after:transition-all after:duration-300 after:absolute after:bottom-0 after:delay-100
                ">
                <p className="z-10 link-responsive">Soft Skill</p>
                <ChevronRight className="w-auto h-auto right-left z-10" />
              </Link>
              <Link href="/hardskill" className="flex flex-row gap-2 items-center justify-center overflow-hidden text-white dark:text-black px-4 py-2 rounded-full bg-gray-800 dark:bg-slate-100 relative 
                before:content-[''] before:w-full before:h-0 before:bg-blue-200 hover:before:h-full before:transition-all before:duration-300 before:absolute before:bottom-0 
                after:content-[''] after:w-full after:h-0 after:bg-blue-400 hover:after:h-full after:transition-all after:duration-300 after:absolute after:bottom-0 after:delay-100
                ">
                <p className="z-10 link-responsive">Hard Skill</p>
                <ChevronRight className="w-auto h-auto right-left z-10" />
              </Link>
            </div>



            {/* <div className="flex md:hidden flex-col w-full h-full gap-5">
              <Link href="/portfolio" className="w-full h-full rounded-lg bg-black dark:bg-white px-4 py-2 text-center text-white dark:text-black font-semibold base-responsive relative before:content-[''] before:absolute before:top-0 before:bg-orange-600 before:w-full before:h-0 focus:before:w-full before:transition-all before:duration-75 before:ease" >Portfolio</Link>
              <Link href="/cv" className="w-full h-full rounded-lg bg-black dark:bg-white px-4 py-2 text-center text-white dark:text-black font-semibold base-responsive relative before:content-[''] before:absolute before:top-0 before:bg-orange-600 before:w-full before:h-0 focus:before:w-full before:transition-all before:duration-75 before:ease" >Curriculum Vitae</Link>
            </div> */}
            <div className="z-10 flex flex-col gap-3 max-w-3xl">
              <h1 className="heading-responsive">About Me</h1>
              <p className="base-responsive w-full h-full ">
                I&apos;m an Informatics Engineering student at Universitas Amikom Yogyakarta with a strong interest in web development. I have pretty solid foundation in frontend development and am eager to grow my skills further through real-world internship experience in the industry.
              </p>
            </div>


            <footer className="flex gap-[24px] flex-wrap items-center justify-center">
              <a className="flex items-center gap-2 hover:underline hover:underline-offset-4 link-responsive" href="www.linkedin.com/in/rizal-amri-764281311">
                <Linkedin size={16}/>
                <p>Rizal Amri</p>
              </a>
              <a className="flex items-center gap-2 hover:underline hover:underline-offset-4 link-responsive" href="https://www.instagram.com/rizalamri.rar">
                <Instagram size={16} />
                <p>rizalamri.rar</p>
              </a>
              <a className="flex items-center gap-2 hover:underline hover:underline-offset-4 link-responsive" href="tel:+6281575670583">
                <Phone size={16}/>
                <p>+62 815-7567-0583</p>
              </a>
              <a className="flex items-center gap-2 hover:underline hover:underline-offset-4 link-responsive" href="mailto:rizalamrirozaqi@gmail.com ">
                <AtSign size={16}/>
                <p>rizalamrirozaqi@gmail.com</p>
              </a>
            </footer>

            <section>
              <div className="md:flex w-full h-full justify-center items-center hidden gap-7">
                <Link href="/portfolio" className="flex flex-row gap-2 items-center justify-center overflow-hidden text-white dark:text-black px-4 py-2 rounded-full bg-gray-800 dark:bg-slate-100 relative 
                 before:content-[''] before:w-full before:h-0 before:bg-blue-200 hover:before:h-full before:transition-all before:duration-300 before:absolute before:bottom-0 
                 after:content-[''] after:w-full after:h-0 after:bg-blue-400 hover:after:h-full after:transition-all after:duration-300 after:absolute after:bottom-0 after:delay-100
                 ">
                  <p className="z-10 link-responsive">Go To Portfolio</p>
                  <ChevronRight className="w-auto h-auto right-left z-10" />
                </Link>
                <Link href="/cv" className="flex flex-row gap-2 items-center justify-center overflow-hidden text-white dark:text-black px-4 py-2 rounded-full bg-gray-800 dark:bg-slate-100 relative 
                 before:content-[''] before:w-full before:h-0 before:bg-blue-200 hover:before:h-full before:transition-all before:duration-300 before:absolute before:bottom-0 
                 after:content-[''] after:w-full after:h-0 after:bg-blue-400 hover:after:h-full after:transition-all after:duration-300 after:absolute after:bottom-0 after:delay-100
                 ">
                  <p className="z-10 link-responsive">Go To Curriculum Vitae</p>
                  <ChevronRight className="w-auto h-auto right-left z-10" />
                </Link>
              </div>
            </section>
          </div>


          {/* <img src="/assets/img/person/5.png" alt="RizalAmriRozaqi" className="w-sm h-sm z-80 bg-white rounded-lg drop-shadow-xl left-in-person2 absolute -bottom-70 right-50 " />
          <img src="/assets/img/person/5.png" alt="RizalAmriRozaqi" className="w-sm h-sm z-90 bg-white rounded-lg drop-shadow-xl left-in-person3 absolute -bottom-70 -right-30 " /> */}


          {/* <div className="w-full h-full flex flex-col justify-center items-end ">
            <div className="flex h-full w-full"></div>
            <div className="flex h-full w-full">
              <img src="/assets/img/person/4.png" alt="RizalAmriRozaqi" className="w-md h-md z-90 bg-white rounded-lg drop-shadow-blue-600-lg left-in-person" />
            </div>
          </div> */}
        </div>
    </div>
  );
}
