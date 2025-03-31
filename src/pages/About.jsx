import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio.jsx";
import ScrollVelocity from "../components/ScrollVelocity.jsx"
import TechStack from "../components/TechStack.jsx"

const About = () => {
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
        </div>
    );
};

export default About;
