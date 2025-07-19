import Link from "next/link";
import {ChevronRight} from "lucide-react";

export default function HardSkillPage() {
  return (
    <div className="min-h-screen h-full w-full relative pt-28 px-8 sm:px-20 flex flex-col gap-8">
        <div className="absolute bottom-0 right-0 bg-gradient-to-bl from-transparent to-blue-600/5 w-full h-full z-90 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 bg-gradient-to-br from-transparent to-blue-600/5 w-full h-full z-90 pointer-events-none"></div>
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
        <h1 className="superheading-responsive">Hard Skills</h1>
        <ul className="list-disc list-inside space-y-4 base-responsive">
            <li>HTML, CSS, JavaScript</li>
            <li>React.js, Next.js</li>
            <li>Tailwind CSS</li>
            <li>PHP</li>
            <li>Laravel</li>
            <li>Git & GitHub</li>
            <li>REST API integration</li>
            <li>MySQL</li>
        </ul>
    </div>
  );
}
