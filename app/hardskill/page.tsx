import Link from "next/link";

export default function HardSkillPage() {
  return (
    <div className="min-h-screen pt-28 px-8 sm:px-20 flex flex-col gap-8">
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
            <li>Git & GitHub</li>
            <li>REST API integration</li>
        </ul>
    </div>
  );
}
