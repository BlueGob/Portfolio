import './wave.css'
import LottieControl from './LottieAnimation'
import * as animationData from '../assets/hello.json'
import { motion } from 'framer-motion'
export default function Hero() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 pb-4 md:mb-35 mt-20 md:mt-36 h-lvh">
            <div className='text-white'>
                <motion.h1  transition={{duration:0.5, delay: 0.25}} initial={{  x: -300, opacity:0}} animate={{ x: 0, opacity:1 }} className=" md:pl-20 tracking-tighter lg:mt-16 text-3xl md:text-7xl md:text-left text-center">
                    Welcome, I'm Moslem <span className="wave-emoji">👋</span>
                </motion.h1>
                <motion.p transition={{duration:0.5, delay: 0.4}} initial={{x: -300, opacity:0}} animate={{ x: 0, opacity:1 }} className=" pl-5 md:pl-20 pt-10 md:text-3xl text-xl font-light leading-relaxed">
                    I’m a software engineer with a passion for machine learning, deep learning, and data science.
                    I have a strong grasp of Python, C++, and React.js,
                    and I love building efficient, user-friendly solutions that make a difference.
                </motion.p>
                <motion.div transition={{duration:0.5, delay: 0.5}} initial={{y:200, opacity:0}} animate={{ y: 0, opacity:1 }} className="pl-10 pr-10 md:ml-20 md:pt-20 pt-5 flex justify-start space-x-10 text-white items-center">
                    <button className="bg-blue-700 text-white px-2 py-4 md:w-1/5 w-1/2 rounded-full text-lg md:text-xl transition-colors duration-800 hover:bg-white hover:text-blue-700">
                        My Resume
                    </button>
                    <button onClick={()=>handleScroll("contact")} className="bg-blue-700 text-white px-2 py-4 md:w-1/5 w-1/2 rounded-full text-lg md:text-xl transition-colors duration-800 hover:bg-white hover:text-blue-700">
                        Contact me
                    </button>
                </motion.div>

            </div>
            <div  className='md:ml-28 md:-mt-0 -mt-32'>
            <LottieControl className="md:w-3/4 md:h-2/3" lottie_image={animationData} />

            </div>
        </div>
    )
}