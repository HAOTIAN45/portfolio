import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio.jsx";
import ScrollVelocity from "../components/ScrollVelocity.jsx"
import TechStack from "../components/TechStack.jsx"
import { FaArrowUp } from "react-icons/fa";

const About = () => {

    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <div className="bg-black text-white min-h-screen">
            <Navbar />
            <Hero />
            <Portfolio />
            <TechStack />
            <ScrollVelocity
                texts={[' MongoDB | Express | React | Node | ']}
                velocity={20}
                className="custom-scroll-text"
            />

            {showButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-5 right-5 bg-gradient-to-r text-black from-blue-400 to-green-400 p-2 rounded-full shadow-lg hover:bg-blue-700 focus:scale-125 transition-all duration-300"
                >
                    <FaArrowUp size={20} />
                </button>
            )}

        </div>
    );
};

export default About;
