import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const FrontendSkills = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Bootstrap"];
    const BackendSkills = ["Node.js", "Express", "MongoDB", "Python", "GraphQL"];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
    <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About Me</h2>

            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                    I am a passionate web developer with a knack for creating dynamic and responsive web applications. My journey in web development began with a curiosity to understand how websites work, and it has since evolved into a full-fledged career. I enjoy tackling challenges and continuously learning new technologies to enhance my skills.
                </p>

                <div className="grid grid-cols-1 mb:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> Frontend </h3>
                        <div className="flex flex-wrap gap-2">
                            {FrontendSkills.map((tech, key) =>(
                                <span key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                     hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> Backend </h3>
                        <div className="flex flex-wrap gap-2">
                            {BackendSkills.map((tech, key) =>(
                                <span key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                     hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 translate-all">
                    <h3 className="text-xl font-bold mb-3 text-blue-500"> Education </h3>
                    <ul>
                       <li>
                        <strong> B.tech in Computer Science Engineering </strong> <br />
                        <span className="text-gray-400"> Sri Venkateshwaraa College of Engineering And Technology </span> <br />
                        <span className="text-gray-400"> 2022 - 2026 </span> <br />
                        <span className="text-gray-400"> CGPA: 7.6 </span>
                       </li>
                          <li className="mt-4">
                            <strong> Senior Secondary </strong> <br />
                            <span className="text-gray-400"> GOVT SR SEC SCHOOL </span> <br />
                            <span className="text-gray-400"> 2019 - 2021 </span> <br />
                            <span className="text-gray-400"> Percentage: 90% </span>
                        </li>
                        <li className="mt-4">
                            <strong> Secondary </strong> <br />
                            <span className="text-gray-400"> ADARSH PUBLIC HIGH SCHOOL </span> <br />
                            <span className="text-gray-400"> 2018 - 2019 </span> <br />
                            <span className="text-gray-400"> Percentage: 74% </span>
                        </li> 

                    </ul>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 translate-all">
                    <h3 className="text-xl font-bold mb-3 text-blue-500"> Work Experience </h3>
                    <div className="space-y-4 text-gray-300">
                        <div>
                            <h4><strong>Web Developer Intern at OneYes Infotech Solutions</strong></h4>
                            <p className="text-gray-400"> Developed an web applications for Yoga and Meditation</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </RevealOnScroll>
    </section>
  );
};
