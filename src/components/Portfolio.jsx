import React from 'react'
import { motion } from 'framer-motion'

const Portfolio = () => {

    const projects = [
        {
            id: 1,
            title: "Project 1",
            description: "Deskripsi Project."
        },
        {
            id: 2,
            title: "Project 2",
            description: "Deskripsi Project."
        },
        {
            id: 3,
            title: "Project 3",
            description: "Deskripsi Project."
        }
    ]

    return (
        <div
            id='portfolio'
            className='min-h-screen bg-black text-white flex flex-col items-center justify-center px-5'>
            <motion.h2
                className='text-4xl my-4 font-bold pb-2 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
            >
                My Portfolio
            </motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 4 }}
                className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'
            >
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        className='bg-blue-950 p-5 rounded-lg shadow-lg my-1 mx-1'
                        whileHover={{ scale: 1.05, y: 5 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                        <h3 className='text-xl font-semibold'>{project.title}</h3>
                        <p className='text-gray-400'>{project.description}</p>
                    </motion.div>
                ))}
            </motion.div>

        </div>
    )
}

export default Portfolio
