"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const TYPING_WORDS = ["Ayaan", "a student", "a coder", "an editor"];

export default function Home() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 75 : 150;
    const pauseTime = 1500;
    
    const timeout = setTimeout(() => {
      const currentFullWord = TYPING_WORDS[currentWordIndex];
      
      if (!isDeleting) {
        setCurrentText(currentFullWord.substring(0, currentText.length + 1));
        
        if (currentText === currentFullWord) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setCurrentText(currentFullWord.substring(0, currentText.length - 1));
        
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % TYPING_WORDS.length);
        }
      }
    }, currentText === TYPING_WORDS[currentWordIndex] && !isDeleting ? pauseTime : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex]);

  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* --- SCROLLING INTRO ANIMATION --- */}
      <div className="w-full relative bg-[#111317]">
        <div className="h-[400vh] w-full relative z-40">
          <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-[#111317]">
            
            {/* Background Decorators for Intro */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] z-0"></div>

            {/* Intro 1: Coding */}
            <div 
              className="absolute z-10 flex flex-col md:flex-row items-center justify-center transition-all duration-700 ease-out gap-8 md:gap-16 w-full px-8 max-w-6xl"
              style={{
                opacity: scrollY < 1000 ? 1 : 0,
                transform: `scale(${scrollY < 1000 ? 1 : 0.95}) translateY(${scrollY < 1000 ? 0 : -50}px)`,
                pointerEvents: scrollY < 1000 ? 'auto' : 'none'
              }}
            >
              <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                  [Coding Placeholder Text]
                </h2>
                <p className="text-[#00E5FF] animate-pulse font-medium tracking-widest uppercase text-sm">Scroll down</p>
              </div>
              <div className="relative w-full md:w-[450px] h-[250px] md:h-[300px] rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,229,255,0.15)] border border-[#00E5FF]/20 flex-shrink-0">
                <div className="absolute inset-0 bg-black/50 hover:bg-black/30 transition-colors flex items-center justify-center z-10">
                   <p className="text-gray-300 font-bold tracking-widest text-sm">[Coding Image Placeholder]</p>
                </div>
                <Image src="/cropped_circle_image.png" alt="Coding" fill className="object-cover opacity-60 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" />
              </div>
            </div>

            {/* Intro 2: Video Editing */}
            <div 
              className="absolute z-10 flex flex-col md:flex-row-reverse items-center justify-center transition-all duration-700 ease-out gap-8 md:gap-16 w-full px-8 max-w-6xl"
              style={{
                opacity: scrollY >= 1000 && scrollY < 2000 ? 1 : 0,
                transform: `scale(${scrollY >= 1000 && scrollY < 2000 ? 1 : 0.95}) translateY(${scrollY < 1000 ? 50 : scrollY >= 2000 ? -50 : 0}px)`,
                pointerEvents: scrollY >= 1000 && scrollY < 2000 ? 'auto' : 'none'
              }}
            >
              <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                  [Video Editing Placeholder]
                </h2>
                <p className="text-[#00E5FF] animate-pulse font-medium tracking-widest uppercase text-sm">Keep scrolling</p>
              </div>
              <div className="relative w-full md:w-[450px] h-[250px] md:h-[300px] rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,229,255,0.15)] border border-[#00E5FF]/20 flex-shrink-0">
                <div className="absolute inset-0 bg-black/50 hover:bg-black/30 transition-colors flex items-center justify-center z-10">
                   <p className="text-gray-300 font-bold tracking-widest text-sm">[Editing Image Placeholder]</p>
                </div>
                <Image src="/cropped_circle_image.png" alt="Editing" fill className="object-cover opacity-60 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" />
              </div>
            </div>

            {/* Intro 3: Wrap up / Final point */}
            <div 
              className="absolute z-10 flex flex-col items-center justify-center transition-all duration-700 ease-out w-full px-8 max-w-4xl"
              style={{
                opacity: scrollY >= 2000 && scrollY < 3000 ? 1 : 0,
                transform: `scale(${scrollY >= 2000 && scrollY < 3000 ? 1 : 0.95}) translateY(${scrollY < 2000 ? 50 : scrollY >= 3000 ? -50 : 0}px)`,
                pointerEvents: scrollY >= 2000 && scrollY < 3000 ? 'auto' : 'none'
              }}
            >
              <h2 className="text-4xl md:text-6xl font-extrabold text-white text-center tracking-tight mb-8 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                [And whatever else you want!]
              </h2>
              <div className="flex gap-4">
                 <div className="w-20 h-1 bg-[#00E5FF]/30"></div>
                 <div className="w-20 h-1 bg-[#00E5FF]/60 shadow-[0_0_10px_rgba(0,229,255,0.8)]"></div>
                 <div className="w-20 h-1 bg-[#00E5FF]/30"></div>
              </div>
              <p className="text-[#00E5FF] mt-8 animate-bounce font-medium tracking-widest uppercase text-sm">Enter Portfolio</p>
            </div>

          </div>
        </div>
      </div>

    <main className="flex flex-col items-center min-h-screen bg-[#111317] text-[#E2E8F0] overflow-hidden pt-10 md:pt-24 px-4 sm:px-8 pb-20 relative z-10">
      
      {/* --- BACKGROUND DECORATORS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#00E5FF] opacity-[0.04] blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#00B4CC] opacity-[0.04] blur-[100px] rounded-full"></div>
      </div>

      {/* --- HERO SECTION --- */}
      <section className="w-full max-w-5xl flex flex-col-reverse md:flex-row items-center justify-between mt-10 md:mt-20 mb-32 gap-12">
        {/* Left: Text Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left z-10 space-y-6 md:w-1/2">
          <h1 className="flex flex-col text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
            <span>Hi, I&apos;m</span>
            <span className="text-[#00E5FF] drop-shadow-[0_0_10px_rgba(0,229,255,0.5)] min-h-[1.2em] flex items-center justify-center md:justify-start">
              {currentText}
              <span className="w-[4px] h-[0.8em] bg-[#00E5FF] shadow-[0_0_8px_rgba(0,229,255,1)] ml-1 mt-1 animate-[pulse_1s_infinite]"></span>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-md font-light">
            I craft modern, dynamic, and engaging digital experiences based on elegant code and scalable architecture.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#projects" className="px-6 py-3 bg-[#00E5FF] text-[#111317] font-bold rounded-full hover:bg-[#00B4CC] transition-all hover:shadow-[0_0_25px_rgba(0,229,255,0.6)] shadow-[0_0_15px_rgba(0,229,255,0.3)]">
              View Projects
            </a>
            <a href="#contact" className="px-6 py-3 border border-white/10 text-white font-semibold rounded-full hover:bg-white/5 transition-all">
              Contact Me
            </a>
          </div>
        </div>

        {/* Right: Profile Picture with Subtle Gradient Aura */}
        <div className="relative flex items-center justify-center md:w-1/2 h-[350px]">
          {/* Subtle glowing aura */}
          <div className="absolute w-[450px] h-[450px] bg-[radial-gradient(circle_at_center,_rgba(0,229,255,0.15)_0%,_transparent_60%)] animate-pulse" style={{ animationDuration: '4s' }}></div>
          
          {/* Profile Picture */}
          <div className="relative w-[220px] h-[220px] md:w-[280px] md:h-[280px] rounded-full overflow-hidden shadow-2xl border border-white/5 z-20">
            <Image 
              src='/cropped_circle_image.png'
              alt="Image Of Ayaan"
              fill
              sizes="(max-width: 768px) 220px, 280px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* --- ABOUT ME SECTION --- */}
      <section id="about" className="w-full max-w-5xl mb-32 scroll-mt-24">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">About Me</h2>
        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl shadow-xl backdrop-blur-sm">
          <p className="text-gray-300 leading-relaxed text-lg mb-6">
            [Placeholder text for your background, education, and passions. Write about how you got into coding, your favorite technologies, and what drives you to build great software.]
          </p>
          <div className="flex flex-wrap gap-3">
            {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"].map(skill => (
              <span key={skill} className="px-4 py-2 bg-black/30 rounded-full text-sm font-medium border border-white/5 text-gray-300">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="w-full max-w-5xl mb-32 scroll-mt-24">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="group relative bg-[#1E2128] border border-white/5 rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,229,255,0.15)] hover:border-[#00E5FF]/40 flex flex-col h-[350px]">
              <div className="h-[180px] w-full bg-black/40 flex items-center justify-center p-6 relative overflow-hidden">
                <span className="text-gray-600 text-sm italic z-10">[Project Image Placeholder]</span>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1E2128]" />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00E5FF] group-hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.6)] transition-all">Project Name {item}</h3>
                  <p className="text-sm text-gray-400 line-clamp-2">
                    A brief description of this awesome project. What technologies did you use, and what problem did it solve?
                  </p>
                </div>
                <div className="mt-4 flex gap-3 text-xs font-semibold text-[#00E5FF]">
                  <span>Demo &rarr;</span>
                  <span>GitHub &rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="w-full max-w-5xl text-center flex flex-col items-center justify-center mb-10 scroll-mt-24">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Let&apos;s Work Together</h2>
        <p className="text-gray-400 max-w-lg mb-8 text-lg">
          Currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>
        <a href="mailto:ayaan@example.com" className="px-8 py-4 bg-white text-[#111317] font-bold rounded-full hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 shadow-xl">
          Say Hello
        </a>
      </section>

    </main>
    </>
  );
}