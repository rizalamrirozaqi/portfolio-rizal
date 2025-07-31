'use client';
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

// Semester 4
const portfolioSaiful = ["/assets/img/portfolio/web/portfolio-saiful/1.mp4"];
const ventra = ["/assets/img/portfolio/web/ventra/1.png", "/assets/img/portfolio/web/ventra/2.png", "/assets/img/portfolio/web/ventra/3.png", "/assets/img/portfolio/web/ventra/4.png", "/assets/img/portfolio/web/ventra/5.png", "/assets/img/portfolio/web/ventra/6.png", "/assets/img/portfolio/web/ventra/7.png", "/assets/img/portfolio/web/ventra/8.png", "/assets/img/portfolio/web/ventra/9.png", "/assets/img/portfolio/web/ventra/10.png", "/assets/img/portfolio/web/ventra/11.png", "/assets/img/portfolio/web/ventra/12.png", "/assets/img/portfolio/web/ventra/13.png", "/assets/img/portfolio/web/ventra/14.png", "/assets/img/portfolio/web/ventra/15.png", "/assets/img/portfolio/web/ventra/16.png", "/assets/img/portfolio/web/ventra/17.png", "/assets/img/portfolio/web/ventra/18.png"];
const quizu = ["/assets/img/portfolio/web/quizu/1.png"];

// Semester 3
const uasSmtThree = ["/assets/img/portfolio/web/uas-smt3/1.png", "/assets/img/portfolio/web/uas-smt3/2.png", "/assets/img/portfolio/web/uas-smt3/3.png", "/assets/img/portfolio/web/uas-smt3/4.png", "/assets/img/portfolio/web/uas-smt3/5.png", "/assets/img/portfolio/web/uas-smt3/6.png", "/assets/img/portfolio/web/uas-smt3/7.png", "/assets/img/portfolio/web/uas-smt3/8.png", "/assets/img/portfolio/web/uas-smt3/9.png", "/assets/img/portfolio/web/uas-smt3/10.png", "/assets/img/portfolio/web/uas-smt3/11.png", "/assets/img/portfolio/web/uas-smt3/12.png"];

// Semester 2
const genshin = ["/assets/img/portfolio/web/genshin/1.mp4"];
const theEminenceInShadow = ["/assets/img/portfolio/web/seven-shadow/1.png", "/assets/img/portfolio/web/seven-shadow/2.png", "/assets/img/portfolio/web/seven-shadow/3.png", "/assets/img/portfolio/web/seven-shadow/4.png", "/assets/img/portfolio/web/seven-shadow/5.png", "/assets/img/portfolio/web/seven-shadow/6.png", "/assets/img/portfolio/web/seven-shadow/7.png"];
const solarSystem = ["/assets/img/portfolio/web/solar-system/1.png"];
const experiment = ["/assets/img/portfolio/web/experiment/1.png"];
const component = ["/assets/img/portfolio/component/card.mp4", "/assets/img/portfolio/component/login1.png", "/assets/img/portfolio/component/register1.png", "/assets/img/portfolio/component/login2.png", "/assets/img/portfolio/component/register2.png", "/assets/img/portfolio/component/three-java.png"];

export default function Portfolio() {
  const renderImageSection = (title: string, items: string[], describe?:string) => (
    <div className="mb-12 flex flex-col gap-2 bg-gray-800 dark:bg-white/50 text-white dark:text-black p-4 lg:p-20 rounded-xl appear-card-colors">
    {/* <div className="mb-12 flex flex-col gap-2 bg-gray-800 dark:bg-zinc-950 p-8 rounded-lg appear relative z-20
    before:content-[''] before:top-0 before:left-0 before:absolute before:w-full before:h-0 before:rounded-lg before:bg-blue-950 hover:before:h-full before:transition-all before:duration-100 before:ease before:-z-20
    after:content-[''] after:top-0 after:left-0 after:absolute after:w-full after:h-0 after:rounded-lg after:bg-gray-950 hover:after:h-full after:transition-all after:duration-100 after:ease after:delay-100 after:-z-10
    "> */}
      <h2 className="heading-responsive mb-4 w-full border-b-2 border-blue-600/10 hover:border-blue-600/70 appear">{title}</h2>
      {describe && <p className="base-responsive py-2a appear">{describe}</p>}
      <div className="overflow-x-auto appear">
        <div className="flex gap-4 w-max appear">
          {items.map((src, index) =>
            src.endsWith(".mp4") ? (
              <video
                key={index}
                src={src}
                className="rounded-lg w-[600px] h-auto appear object-contain my-4 "
                controls
                muted
              />
            ) : (
              <Image
                key={index}
                src={src}
                alt={`${title}-${index + 1}`}
                width={600}
                height={400}
                className="rounded-lg object-contain appear my-4"
              />
            )
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen h-full w-full pt-10 lg:pt-28 px-6 sm:px-20 relative ">
      <div className="absolute top-0 right-5 h-full w-32 
                      border-x border-x-[--pattern-fg] 
                      bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] 
                      bg-[size:10px_10px] bg-fixed 
                      [--pattern-fg:var(--color-gray-950)]/5 
                      dark:[--pattern-fg:var(--color-white)]/10"></div>
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
      <header className="hidden absolute top-0 left-0 md:flex flex-row w-full max-h-xl border-blue-600 border-b-2 sm:px-20 sm:py-3">
          <div className="flex flex-row justify-start items-center w-full h-full">
          <Link href="/portfolio" className="w-auto h-full rounded-lg px-4 py-2 font-semibold header-responsive hover:text-blue-400 group">
              <p className="group-hover:-translate-y-2">Portfolio</p>
          </Link>
          <Link href="/cv" className="w-auto h-full rounded-lg px-4 py-2 font-semibold header-responsive hover:text-blue-400 group">
              <p className="group-hover:-translate-y-2">Curriculum Vitae</p>
          </Link>
          <Link href="/softskill" className="w-auto h-full rounded-lg px-4 py-2 font-semibold header-responsive hover:text-blue-400 group">
              <p className="group-hover:-translate-y-2">Soft Skill</p>
          </Link>
          <Link href="/hardskill" className="w-auto h-full rounded-lg px-4 py-2 font-semibold header-responsive hover:text-blue-400 group">
              <p className="group-hover:-translate-y-2">Hard Skill</p>
          </Link>
          <Link href="/" className="w-auto h-full rounded-lg px-4 py-2 font-semibold header-responsive hover:text-blue-400 group">
              <p className="group-hover:-translate-y-2">About Me</p>
          </Link>
          </div>
          <div className="flex flex-row justify-start items-center w-full h-full"></div>
          <div className="flex flex-row justify-start items-center w-full h-full"></div>
      </header>


      <div className="absolute top-0 right-0 bg-gradient-to-bl from-transparent to-blue-600/5 w-full h-full z-90 pointer-events-none"></div>
      <div className="absolute top-0 right-0 bg-gradient-to-br from-transparent to-blue-600/5 w-full h-full z-90 pointer-events-none"></div>

      <h1 className="superheading-responsive my-10 lg:mb-10 lg:my-0">Portfolio</h1>
      {renderImageSection("Portfolio Site", portfolioSaiful, "In the fourth semester, I helped a friend create a personal portfolio website and a landing page. The project involved designing a clean, responsive layout and structuring content to showcase their skills and works. This experience allowed me to improve my frontend development and collaboration skills, while also learning how to translate someone else’s vision into a functional web presence.")}
      {renderImageSection("Ventra", ventra, "In the fourth semester, I was assigned a project for the Project Management course that required me to develop a website. This led to the creation of Ventra, a web-based escrow platform designed for secure buying and selling of game accounts. I was responsible for the entire development process — from planning and designing the interface to building the core system — all while applying the project management principles I had learned throughout the course. This project not only fulfilled academic requirements but also provided valuable hands-on experience in turning an idea into a fully functional digital product.")}
      {renderImageSection("Quizu", quizu, "For my final project, I developed Quizu, an interactive web-based quiz platform aimed at making programming education more engaging for students. The platform allows users to create, play, and compete in various programming-related quizzes. It features a point and ranking system, multiplayer battle mode, and categorized quiz maps. This project was a culmination of the knowledge and skills I acquired throughout my studies, and it reflects my interest in both education and web development.")}
      {renderImageSection("Semester 3 Final Exam", uasSmtThree, "In this project, I created a web application that serves as a student score recap system, developed using PHP with CodeIgniter 3 and MySQL as the database. The system was designed to allow lecturers to input, update, and view students' final exam scores efficiently. It featured a structured admin panel, CRUD functionality, and secure data handling. This project was developed as part of my coursework in the third semester, showcasing my understanding of database integration and back-end development.")}
      {renderImageSection("Waifu Impact", genshin, "This was one of my first web development projects created during my second semester. As a beginner, I built a simple fan website dedicated to the game Genshin Impact. The project focused on using basic HTML, CSS, and a bit of JavaScript, introducing me to layout design, image handling, and responsive styling. Although simple, this project helped me build confidence in creating and styling web pages from scratch.")}
      {renderImageSection("The Seven Shadow", theEminenceInShadow, "Also created in my second semester, this experimental project allowed me to explore fundamental web components like navigation bars, image sliders, form inputs, and simple animations. It wasn't tied to a specific theme but served as a sandbox for testing new things I learned. This project marked an important step in my journey as I became more comfortable using HTML, CSS, and JavaScript in a real environment.")}
      {renderImageSection("Solar System", solarSystem, "In this second-semester project, I tried to simulate the solar system using basic web technologies and CSS animations. While the idea was ambitious for my skill level at the time, the execution was still rough and far from accurate. It served as a fun exploration of motion and layout, even though it didn’t fully meet expectations.")}
      {renderImageSection("Experiment", experiment, "One of my more creative ideas during the early stages of learning was to design a futuristic game website with a cyberpunk aesthetic. Despite not being completed, the project allowed me to experiment with darker UI styles, neon effects, and thematic layouts. It remains a visual concept that I hope to revisit and improve in the future.")}
      {renderImageSection("Components", component, "This small project was built to practice and understand reusable components in web development. I created clean and functional login and registration forms along with several card designs that could display user data or content previews. It helped me explore design consistency, responsive layout, and component structuring—skills that are essential for building scalable interfaces.")}

      <footer className="w-full h-32 flex items-center justify-center appear">
          <p className="base-responsive">© 2025 Rizal Amri Rozaqi. All Rights Reserved.</p>
      </footer>

    </div>
  );
}
