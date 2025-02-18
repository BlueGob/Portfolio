import { motion } from 'framer-motion'

export default function WorkExperience({ id }) {
    return (
        <div id={id} className="lg:pl-20 p-5 pt-60 md:pr-20 pr-5">
            <motion.div className="md:text-6xl text-5xl pl-5 md:pl-0 text-white">Work Experience</motion.div>
            <div className="grid md:grid-cols-3 gap-y-10 md:gap-10 pt-20 grid-cols-1">

                <motion.div  viewport={{ once: true }}  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{  duration: 1 }}  className="shadow-lg rounded-lg overflow-hidden relative border border-gray-300 transform transition-transform duration-500 hover:scale-105">
                    <img className=" h-44 object-cover  w-full" src="bfi.jpg" />
                    <div className="flex flex-col justify-center items-center text-white pt-5 space-y-5">
                        <h2 className="text-3xl">End of Study Project</h2>
                        <h2 className="text-2xl font-thin">Software Engineer</h2>
                        <div className="text-xl font-extralight ">February 2024 - June 2024</div>
                        <p className="text-white font-thin text-xl pl-3 pb-5 text-center ">
                            Design and Development of a System for Handwriting
                            Recognition on Bank Checks using Python, Keras, opencv
                        </p>
                    </div>
                </motion.div>

                <motion.div viewport={{ once: true }}  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{  duration: 1 }} className="shadow-lg rounded-lg overflow-hidden relative border border-gray-300 transform transition-transform duration-500 hover:scale-105">
                    <img className=" h-44 object-cover  w-full" src="bfi.jpg" />

                    <div className="flex flex-col justify-center items-center text-white pt-5 space-y-5">
                        <h2 className="text-3xl">Summer Internship</h2>
                        <h2 className="text-2xl font-thin">Software Engineer</h2>
                        <div className="text-xl font-extralight ">Julley 2023 - Auguest 2023</div>

                        <p className="text-white font-thin text-xl text-center pl-3 pb-5 ">
                            Design and Development of a Named Entity Similarity Estimation Engine using Python, sk-learn
                        </p>
                    </div>
                </motion.div>

                <motion.div  viewport={{ once: true }}  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{  duration: 1 }}className="shadow-lg rounded-lg overflow-hidden relative border border-gray-300 transform transition-transform duration-500 hover:scale-105">
                    <img className=" h-44 object-cover  w-full" src="yasmine.png" />

                    <div className="flex flex-col justify-center items-center text-white pt-5 space-y-5">
                        <h2 className="text-3xl">End of Study Internship</h2>
                        <h2 className="text-2xl font-thin">Computer Science</h2>
                        <div className="text-xl font-extralight ">Julley 2023 - Auguest 2023</div>

                        <p className="text-white font-thin text-xl text-center pl-3 pb-5 ">
                            Design and Development of a Mobile Real Estate
                            Prospecting Application using: Flutter, SQL Server, .NET
                        </p>
                    </div>

                </motion.div>
            </div>
        </div>
    );

}