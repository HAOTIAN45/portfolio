import React from 'react'
import { motion } from 'framer-motion'

const TechStack = () => {

    const Techs = ["HTML", "CSS", "Tailwind", "MySQL", "MongoDB", "Express", "Node", "React"]

    return (
        <div>
            <div
                id='techstack'
                className='min-h-screen bg-black text-white flex flex-col items-center justify-center'
            >
                <motion.h2
                    className='text-4xl font-bold pb-5 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent'
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 1 }}
                >
                    Tech Stack
                </motion.h2>

                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 1 }}
                >
                    {Techs.map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex items-center justify-center border border-gray-500 px-6 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition duration-300"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.2 }}
                        >
                            {item}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default TechStack
