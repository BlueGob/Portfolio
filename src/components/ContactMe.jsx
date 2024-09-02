import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaMedium } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
export default function ContactMe() {
    let size = 40;
    return (

        <div className="pt-40 md:pl-20 md:pr-10  pr-5">
            <div className="text-white md:text-6xl text-5xl pl-5 md:pl-0">My Contact</div>
            <div className="grid md:grid-cols-2 grid-col-1 pt-20 pb-20 md:text-left text-center">
                <div className="order-2 md:order-1">
                    <div className="text-white md:text-3xl text-2xl justify-between pb-10 ">
                        Software Engineer | ML/DL developer | Problem solving
                    </div>
                    <div className="text-white text-xl font-thin pb-10">
                      <IoLocationOutline className="inline-block"/>  Tunisia, Tunis
                    </div>
                    <div className="text-white">
                        <a href="https://github.com/BlueGob" target="_blank"> <BsGithub  className="inline-block mr-2 hover:shadow-lg hover:shadow-blue-700 hover:scale-110 transition-transform duration-300" size={size} /></a>
                        <a href= "https://www.linkedin.com/in/moslem-gannoun-164561192/" target="_blank"><FaLinkedin className="inline-block mr-2 hover:shadow-lg hover:shadow-blue-700 hover:scale-110 transition-transform duration-300" color="#2563eb" size={size} /> </a>
                        <a href="mailto:moslemgannoun@gmail.com" target="_blank"><SiGmail className="inline-block mr-2 hover:shadow-lg hover:shadow-blue-700 hover:scale-110 transition-transform duration-300" color="#dc2626" size={size} /></a>
                        <a href="https://medium.com/@moslemgannoun"target="_blank"><FaMedium className="inline-block mr-2 hover:shadow-lg hover:shadow-blue-700 hover:scale-110 transition-transform duration-300" color="white" size={size} /></a>
                        <a href="https://www.hackerrank.com/profile/moslemgannoun"target="_blank"><FaHackerrank className="inline-block mr-2 hover:shadow-lg hover:shadow-blue-700 hover:scale-110 transition-transform duration-300" color="green" size={size} /></a>
                    </div>
                </div>
                <div className="w-60 h-60 md:w-80 md:h-80 md:mr-32 md:justify-self-end justify-self-center mb-12 md:-mt-28 order-1 md:order-2">
                    <img src="my_pic.jpg" className=" border border-blue-700 rounded-full" />
                </div>
            </div>
        </div>
    )
}