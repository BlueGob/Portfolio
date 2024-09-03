import { motion } from 'framer-motion'

export default function Education({id}) {
    return (
            <div id={id} className="lg:pl-20 md:pr-20 pt-60 text-white">
                <motion.div viewport={{ once: true }} initial={{ y:100,opacity:0}} transition={{ duration:0.5}} whileInView={{ opacity: 1,y:0 }} className="md:text-6xl text-5xl pl-5 md:pl-0">Education</motion.div>

                <motion.div viewport={{ once: true }} initial={{ x:-100,opacity:0}} transition={{ duration:0.5,delay:0.2}} whileInView={{ opacity: 1,x:0 }} className="flex flex-col items-center md:flex-row gap-y-10 lg:gap-10 pt-20 ">
                    <div>
                        <img src="isi.png" alt="Institut Superieure d'informatique" className=" object-cover" />
                    </div>
                    <div className="flex flex-col md:items-start items-center space-y-3  text-center">
                        <div className="md:text-3xl text-2xl">Institut Supérieur d'Informatique</div>
                        <div className="text-xl font-extralight ">2021 - 2024</div>
                        <div className="text-2xl font-thin  ">National Engineering Degree</div>
                        <div className="text-2xl font-thin "><span className="underline">Specialization:</span> Software Development Engineering</div>
                    </div>
                </motion.div>
                <motion.hr viewport={{ once: true }} initial={{ x:-100,opacity:0}} transition={{ duration:0.5,delay:0.3}} whileInView={{ opacity: 1,x:0 }} className="md:w-3/4 " />

                <motion.div viewport={{ once: true }} initial={{ x:-100,opacity:0}} transition={{ duration:0.5,delay:0.4}} whileInView={{ opacity: 1,x:0 }} className="flex flex-col items-center md:flex-row gap-y-10 lg:gap-10 pt-20 ">
                    <div>
                        <img src="isi.png" alt="Institut Superieure d'informatique" className="object-cover" />
                    </div>
                    <div className="flex flex-col md:items-start items-center space-y-3 text-center">
                        <div className="md:text-3xl text-2xl">Institut Supérieur d'Informatique</div>
                        <div className="text-xl font-extralight">2018 - 2021</div>
                        <div className="text-2xl font-thin p-2 md:p-0">National Applied Bachelor's Degree in Computer Science</div>
                        <div className="text-2xl font-thin "><span className="underline">Specialization:</span> Computer Systems and Software</div>
                    </div>
                </motion.div>

                <motion.hr viewport={{ once: true }} initial={{ x:-100,opacity:0}} transition={{ duration:0.5,delay:0.5}} whileInView={{ opacity: 1,x:0 }} className="md:w-3/4 " />
            </div>
    );
}
