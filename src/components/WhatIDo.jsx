import LottieControl from "./LottieAnimation";
import * as animationData from '../assets/coding.json'
import { motion } from 'framer-motion'

export default function WhatIdo({ id }) {
    return (
        <div id={id} className="md:pl-20 pl-5 md:pr-20 text-white">
            <motion.div viewport={{ once: true }} initial={{ y:100,opacity:0}} transition={{ duration:0.5}} whileInView={{ opacity: 1,y:0 }} className="text-5xl md:text-6xl"> What I do</motion.div>
            <div className="grid md:grid-cols-2 grid-cols-1">
                <div className="md:mt-20 mt-16">
                    <LottieControl className="w-3/4 h-3/4" lottie_image={animationData} />
                </div>
                <div>
                    <motion.p viewport={{ once: true }} initial={{ x: 200, opacity: 0 }} transition={{ duration: 0.5 }} whileInView={{ opacity: 1, x: 0 }} className="md:text-2xl text-xl mb-16 font-light md:mt-20 mt-10">I'm Software engineer Who has experience in Machine Learning, Deep Learning and automation.
                        I create multiple projects using the following stack.</motion.p>
                    <motion.div viewport={{ once: true }} initial={{ x: 200, opacity: 0 }} transition={{ duration: 0.5 }} whileInView={{ opacity: 1, x: 0 }} className="flex flex-wrap space-x-2">
                        <img src="python.png" className="w-20 h-20" />
                        <img src="sklearn.png" className="w-24 h-16" />
                        <img src="tensorflow.png" className="w-16 h-16" />
                        <img src="pandas.png" className="w-16 h-16" />
                        <img src="fastapi.png" className="w-16 h-16" />
                        <img src="mysql.png" className="w-16 h-16" />
                        <img src="cpp.png" className="w-20 h-20" />
                        <img src="react.png" className="w-16 h-16" />
                        <img src="tailwind.png" className="w-20 h-20" />
                        <img src="docker.png" className="w-24 h-24" />
                    </motion.div>
                    <motion.ul viewport={{ once: true }} initial={{ x: 200, opacity: 0 }} transition={{ duration: 0.5 }} whileInView={{ opacity: 1, x: 0 }} className="mt-16 text-xl space-y-3 font-thin">
                        <li>🚀 I Design and implement predictive models using python </li>
                        <li>🚀 I Create Neural Network based solution for image classification and prediction</li>
                        <li>🚀 I Create frontend web application with react</li>
                        <li>🚀 I create Backend api that implement predictive models using python fastAPI</li>
                        <li>🚀 I use docker for deployment</li>
                    </motion.ul>
                </div>
            </div>

        </div>
    );
}