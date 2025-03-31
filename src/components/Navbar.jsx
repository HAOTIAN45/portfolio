import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import GradientText from "../components/GradientText.jsx"

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const menuItems = ["About", "Portfolio", "TechStack"]

    const toggleNav = () => setIsOpen(!isOpen)
    const closeNav = () => setIsOpen(false)


    const menuVariants = {
        open: {
            x: 0,
            opacity: 1,
            transition: {
                stiffness: 20,
                damping: 15
            }
        },
        closed: {
            x: '-100%',
            opacity: 0,
            transition: {
                stiffness: 20,
                damping: 15
            }
        }
    }

    return (
        <div className='fixed top-0 left-0 w-full backdrop-blur-md shadow-md z-50'>
            <div className='flex flex-row justify-between mx-5 py-4 text-xl'>
                <div>
                    <a href="/">
                        <GradientText
                            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                            animationSpeed={3}
                            showBorder={false}
                            className="custom-class"
                        >
                            H A O
                        </GradientText>
                    </a>
                </div>
                <div>
                    <ul className='hidden md:flex flex-row gap-7'>
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <GradientText
                                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                                    animationSpeed={3}
                                    showBorder={false}
                                    className="custom-class"
                                >
                                    {item}
                                </GradientText>
                            </li>
                        ))}
                    </ul>

                    <div onClick={toggleNav} className='md:hidden z-50 text-gray-200 cursor-pointer'>
                        {isOpen ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
                    </div>

                    <motion.div
                        className='fixed top-0 left-0 w-1/2 h-screen bg-gradient-to-t from-black via-purple-900 to-black text-white flex flex-col items-center justify-center z-[100] md:hidden'
                        animate={isOpen ? "open" : "closed"}
                        initial="closed"
                        variants={menuVariants}
                        onClick={closeNav}
                    >
                        <ul className='flex flex-col gap-6 text-lg'>
                            {menuItems.map((item, index) => (
                                <li key={index} onClick={closeNav} className='cursor-pointer'>
                                    <Link
                                    to = "techstack"
                                    smooth = {true}
                                    duration={1000}
                                    offset={200}
                                    onClick={closeNav}
                                    >
                                        <GradientText
                                            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                                            animationSpeed={3}
                                            showBorder={false}
                                            className="custom-class"
                                        >
                                            {item}
                                        </GradientText>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
