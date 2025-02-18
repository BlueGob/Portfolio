import { PiHandsClapping } from "react-icons/pi"
import { motion } from 'framer-motion'
;
export default function Blogs({id}) {
    return (
        <div id={id} className="md:pl-20 md:pr-20 pt-60 pr-5 pl-5">
            <motion.div viewport={{ once: true }} initial={{ y:100,opacity:0}} transition={{ duration:0.5}} whileInView={{ opacity: 1,y:0 }}  className="text-white md:text-6xl text-5xl">Blogs</motion.div>
            <div className="grid lg:grid-cols-3 gap-y-10 lg:gap-10 pt-20 sm:grid-cols-1 ">
                
                <motion.a href="https://medium.com/@moslemgannoun/a-comprehensive-guide-to-start-scrapy-middlewares-cf2495ebcc53"  viewport={{ once: true }}  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{  duration: 1 }} >
                    <div className="space-y-3 rounded-lg hover:bg-violet-700 shadow-md shadow-slate-800 p-2 ransition duration-300 ease-in-out hover:delay-100">
                        <div className="text-white text-2xl">A comprehensive guide to start Scrapy middlewares</div>
                        <div className="text-white text-xl font-thin"> Scrapy middlewares</div>
                        <div className="flex flex-row space-x-5 text-white">
                            <div> Feb 3, 2024 </div>
                            <div> <span className="inline-block mr-1"><PiHandsClapping /> </span>53</div>
                        </div>
                    </div>
                </motion.a>
                
                <motion.a href="https://medium.com/@moslemgannoun/lets-scrape-intagram-with-python-1ab4adc5f695"  viewport={{ once: true }}  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{  duration: 1 }}>
                    <div className="space-y-3 rounded-lg hover:bg-violet-700 shadow-md shadow-slate-800 p-2 ransition duration-300 ease-in-out hover:delay-100">
                        <div className="text-white text-2xl">Let’s Scrape Intagram with python  </div>
                        <div className="text-white text-xl font-thin"> Instagram scraping made easier</div>
                        <div className="flex flex-row space-x-5 text-white">
                            <div> Aug 18, 2024 </div>
                            <div> <span className="inline-block mr-1"><PiHandsClapping /> </span>50</div>
                        </div>
                    </div>
                </motion.a>

                <motion.a href="https://medium.com/@moslemgannoun/lets-scrape-intagram-with-python-1ab4adc5f695"  viewport={{ once: true }}  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{  duration: 1 }} >
                    <div className="space-y-3 rounded-lg hover:bg-violet-700 shadow-md shadow-slate-800 p-2 ransition duration-300 ease-in-out hover:delay-100">
                        <div className="text-white text-2xl">Craft your first telegram BOT with python  </div>
                        <div className="text-white text-xl font-thin"> The power of telegram chat bots</div>
                        <div className="flex flex-row space-x-5 text-white">
                            <div> Aug 18, 2024 </div>
                            <div> <span className="inline-block mr-1"><PiHandsClapping /> </span>0</div>
                        </div>
                    </div>
                </motion.a>
            </div>
        </div>
    );
}