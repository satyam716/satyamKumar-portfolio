import { RevealOnScroll } from "../RevealOnScroll"

export const Project = () => {
    return <section id="project" className="min-h-screen flex items-center justify-center py-20"
        >
        <RevealOnScroll>
            <div className="max-w-5xl mx-auto scroll-px-48">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                        <h3>StudySync Web-page</h3>

                        <p>
                            A responsive web page for StudySync, a platform for students to connect and collaborate on study materials. 
                        </p>
                        <div>
                            {["HTML", "CSS", "JavaScript"].map((tech, key) => (
                                <span key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                     hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <a href="#" className="text-blue-500 hover:text-blue-700 transition">
                                View Project 
                            </a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all">
                        <h3>Familia Web-page</h3>

                        <p>
                            A responsive web page for Restront, a platform for food lovers to connect and share their experiences. 
                        </p>
                        <div>
                            {["HTML", "CSS", "JavaScript"].map((tech, key) => (
                                <span key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                     hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <a href="#" className="text-blue-500 hover:text-blue-700 transition">
                                View Project 
                            </a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all">
                        <h3>My Portfolio</h3>

                        <p>
                            A responsive web page for my portfolio, showcasing my skills and projects. 
                        </p>
                        <div>
                            {["HTML", "CSS", "JavaScript","React"].map((tech, key) => (
                                <span key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                     hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <a href="#" className="text-blue-500 hover:text-blue-700 transition">
                                View Project 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
        </section>

}