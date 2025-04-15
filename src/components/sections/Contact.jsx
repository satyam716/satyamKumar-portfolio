import { RevealOnScroll } from "../RevealOnScroll"
import { useState } from "react"
import emailjs from "emailjs-com"

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const handelSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY).then(() => {
            alert("Message sent successfully")
            setFormData({name: "", email: "", message: ""})
        }).catch(() => {
            alert("Message not sent, please try again later")
        })

    }
    return <section id="contact" className="min-h-screen flex items-center justify-center py-20"
    >
        <RevealOnScroll>
            <div className="px-4 w-150">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Get In Touch</h2>
                <form className="space-y-6" onSubmit={handelSubmit}>
                    <div className="relative">
                       <input type="text" id="name"  name="name"  required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" placeholder="Name..."/>
                    </div>
                    <div className="relative">
                        <input type="email" id="email" name="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" placeholder="Example@gmail.com"/>
                    </div>
                    <div className="relative">
                        <textarea id="message" name="message" rows={6} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" placeholder="Message..."></textarea>
                    </div>
                    <div className="relative flex justify-center items-center">
                        <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold py-3 rounded-lg hover:scale-105 transition-transform duration-300">Send Message</button>
                    </div>
                </form>
            </div>
            <div>
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center mt-3">More Info</h2>
            <div className="mt-10 px-4 w-150 grid grid-cols-2 mb:grid-cols-2 gap-6">
    {/* Resume Download Button */}
    <div>
        <button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
            <a href="https://drive.google.com/file/d/1x_wDWYis9QklJIVXAXh9AJj4zZsJO0LT/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                Download Resume
            </a>
        </button>
    </div>

    {/* Social Links */}
    <div className="flex items-center space-x-8 ml-25">
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/satyamkumar35" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-cyan-300" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.324 0 .725 0h14.55c.4 0 .725.513.725 1.146v13.708c0 
                    .633-.324 1.146-.725 1.146H.724A.723.723 0 0 1 0 
                    14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.211c.837 
                    0 1.356-.554 1.356-1.248-.015-.71-.52-1.247-1.342-1.247C3.02 
                    2.659 2.5 3.196 2.5 3.906c0 .694.52 1.248 1.328 
                    1.248h.015zM13.458 13.394V9.359c0-2.149-1.147-3.148-2.677-3.148-1.231 
                    0-1.78.679-2.087 1.157v-1H6.293c.03.663 0 7.225 0 
                    7.225h2.401v-4.033c0-.216.016-.432.08-.586.176-.432.576-.88 
                    1.248-.88.88 0 1.233.665 1.233 1.638v3.861h2.203z"/>
            </svg>
        </a>

        {/* GitHub */}
        <a href="https://github.com/satyam716" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 
                3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
                0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13
                -.28-.15-.68-.52-.01-.53.63-.01 1.08.58 
                1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95
                0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12
                0 0 .67-.21 2.2.82.64-.18 1.32-.27 
                2-.27.68 0 1.36.09 2 .27 1.53-1.04 
                2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 
                1.27.82 2.15 0 3.07-1.87 3.75-3.65 
                3.95.29.25.54.73.54 1.48 0 1.07-.01 
                1.93-.01 2.2 0 .21.15.46.55.38A8.013 
                8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
        </a>

        {/* Gmail */}
        <a href="mailto:satyamkumar35399@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-rose-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 
                2v12c0 1.1.9 2 2 2h16c1.1 
                0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 
                4-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
        </a>
    </div>
</div>


            </div>
        </RevealOnScroll>
    </section>
}