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
    <div className="font-sans min-h-screen h-full w-full overflow-auto md:overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full ">
        <div className="relative w-full h-full overflow-auto md:overflow-hidden">
          <div className="absolute top-0  right-0 bg-gradient-to-bl from-transparent to-blue-600/5 w-full h-full z-90 pointer-events-none hidden md:block"></div>
          <div className="absolute top-0 right-0 bg-gradient-to-br from-transparent to-blue-600/5 w-full h-full z-90 pointer-events-none hidden md:block"></div>
          <header className="hidden absolute top-0 left-0 md:block w-full max-h-xl border-blue-600 border-b-2 sm:px-20 sm:py-3 z-90">
            <div className="flex flex-row justify-start items-center w-full h-full ">
              <Link href="/portfolio" className="w-auto h-full text-nowrap rounded-lg px-4 py-2  header-responsive hover:text-blue-400 group">
                <p className="group-hover:-translate-y-2">Portfolio</p>
              </Link>
              <Link href="/cv" className="w-auto h-full text-nowrap rounded-lg px-4 py-2  header-responsive hover:text-blue-400 group">
                <p className="group-hover:-translate-y-2">Curriculum Vitae</p>
              </Link>
              <Link href="/softskill" className="w-auto h-full text-nowrap rounded-lg px-4 py-2  header-responsive hover:text-blue-400 group">
                <p className="group-hover:-translate-y-2">Soft Skill</p>
              </Link>
              <Link href="/hardskill" className="w-auto h-full text-nowrap rounded-lg px-4 py-2  header-responsive hover:text-blue-400 group">
                <p className="group-hover:-translate-y-2">Hard Skill</p>
              </Link>
              <Link href="/" className="w-auto h-full text-nowrap rounded-lg px-4 py-2  header-responsive hover:text-blue-400 group">
                <p className="group-hover:-translate-y-2">About Me</p>
              </Link>
            </div>
          </header>
          <div className="max-w-[1440px] mx-auto w-full h-auto px-4 sm:px-6 lg:px-8 relative flex flex-col items-start gap-16 py-20">
            <div className="absolute top-0  right-0 bg-gradient-to-bl from-transparent to-blue-600/5 w-full h-full z-90 pointer-events-none md:hidden block"></div>
            <div className="absolute top-0 right-0 bg-gradient-to-br from-transparent to-blue-600/5 w-full h-full z-90 pointer-events-none md:hidden block"></div>
            <Image width={1000} height={1000} src="/assets/img/person/4.png" alt="RizalAmriRozaqi" className="w-2xl h-2xl z-70 rounded-lg drop-shadow-xl absolute lg:top-60 lg:right-20 top-60 -right-50 up-down lg:block hidden " />
              <div className="flex relative w-full h-full ">
                  <Play className=" absolute top-0 right-30 md:top-0 md:right-20 stroke2 stroke-blue-200 h-16 w-16 md:h-[350px] md:w-[350px] rotate-left"  />
                  <LoaderCircle className="absolute top-0 right-26 2xl:top-32 2xl:right-10 stroke2 stroke-blue-200 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rotate-left delay-200"  />
                  <CircleChevronDown className=" absolute top-10 right-28 2xl:top-0 2xl:right-0 stroke2 stroke-blue-200 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rotate-left delay-500"  />
                  <Circle className=" absolute top-18 right-22 2xl:top-0 2xl:right-20 stroke2 stroke-blue-200 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rotate-left delay-600"  />


                <div className="flex flex-col gap-10 lg:gap-28 items-center sm:items-start relative w-full h-full">

                  <div className="w-full h-full items-center justify-center hidden max-lg:flex ">
                    <div className="overflow-hidden rounded-full bg-white/70">
                      <Image width={1000} height={1000} src="/assets/img/person/4.png" alt="RizalAmriRozaqi" className="w-full h-full" />
                    </div>
                  </div>

                  <div className="flex items-start md:justify-start justify-center lg:pt-28 flex-col">
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
                      I&apos;m an Informatics Engineering student at Universitas Amikom Yogyakarta with a strong interest in web development. I have pretty solid foundation in fullstack development and am eager to grow my skills further through real-world internship experience in the industry.
                    </p>
                  </div>


                  <div className="grid grid-cols-2 grid-rows-auto gap-5 lg:flex lg:flex-row ">
                    <a className="flex items-center gap-2 hover:underline hover:underline-offset-4 link-responsive" href="https://www.linkedin.com/in/rizal-amri-764281311">
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
                  </div>

                  <div className="md:flex w-full h-full  items-center hidden gap-7">
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
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
