import { FaRegStar } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";
import { GoRepo } from "react-icons/go";
export default function Projects() {
    return (
        <div className="lg:pl-20 pt-80 pr-10">
            <div className="text-white text-6xl">Projects</div>
            <div className="grid lg:grid-cols-4 gap-y-10 lg:gap-10 pt-20 sm:grid-cols-1 ">
                
                <a href="https://github.com/BlueGob/LL1" >
                    <div className="space-y-3 rounded-lg hover:bg-blue-700 shadow-md shadow-slate-800 p-2 transition duration-300 ease-in-out hover:delay-100">
                        <div className="text-white text-3xl"><span className="inline-block mr-1"><GoRepo size={25}/></span>LL1</div>
                        <div className="text-white text-xl font-thin"> LL1 parser / analyseur syntaxique descendant LL1 </div>
                        <div className="flex flex-row space-x-5 text-white">
                            <div><span class="inline-block w-3 h-3 bg-zinc-800 rounded-full mr-1"></span>C</div>
                            <div> <span className="inline-block mr-1"><FaRegStar /> </span>5</div>
                            <div> <span className="inline-block mr-1"><FaCodeFork /> </span>2</div>
                        </div>
                    </div>
                </a>

                <a href="https://github.com/BlueGob/uml-generator">
                    <div className="space-y-3 rounded-lg hover:bg-blue-700 shadow-md shadow-slate-800 p-2 transition duration-300 ease-in-out hover:delay-100">
                        <div className="text-white text-3xl"><span className="inline-block mr-1"><GoRepo size={25}/></span>UML Generator</div>
                        <div className="text-white text-xl font-thin"> A simple web app to generate uml diagrams with some input fields and checkboxes  </div>
                        <div className="flex flex-row space-x-5 text-white">
                            <div><span class="inline-block w-3 h-3 bg-blue-900 rounded-full mr-1"></span>Python</div>
                            <div> <span className="inline-block mr-1"><FaRegStar /> </span>4</div>
                            <div> <span className="inline-block mr-1"><FaCodeFork /> </span>1</div>
                        </div>
                    </div>
                </a>

                <a href="https://github.com/Capital2/GPT-Scanner">
                    <div className="space-y-3 rounded-lg hover:bg-blue-700 h-36 shadow-md shadow-slate-800 p-2 transition duration-300 ease-in-out hover:delay-100">
                        <div className="text-white text-3xl"><span className="inline-block mr-1"><GoRepo size={25}/></span>Gpt Scanner</div>
                        <div className="text-white text-xl font-thin"> AI detector APIs plus some bonuses </div>
                        <div className="flex flex-row space-x-5 text-white">
                            <div><span class="inline-block w-3 h-3 bg-blue-900 rounded-full mr-1"></span>Python</div>
                            <div> <span className="inline-block mr-1"><FaRegStar /> </span>16</div>
                            <div> <span className="inline-block mr-1"><FaCodeFork /> </span>7</div>
                        </div>
                    </div>
                </a>

                <a href="https://github.com/BlueGob/streamlit-speed-dial">
                    <div className="space-y-3 rounded-lg hover:bg-blue-700 shadow-md shadow-slate-800 p-2 transition duration-300 ease-in-out hover:delay-100">
                        <div className="text-white text-3xl"><span className="inline-block mr-1"><GoRepo size={25}/></span>streamlit-speed-dial</div>
                        <div className="text-white text-xl font-thin"> A simple Speed Dial component in streamlit to display actions </div>
                        <div className="flex flex-row space-x-5 text-white">
                            <div><span class="inline-block w-3 h-3 bg-blue-900 rounded-full mr-1"></span>Python</div>
                            <div> <span className="inline-block mr-1"><FaRegStar /> </span>2</div>
                            <div> <span className="inline-block mr-1"><FaCodeFork /> </span>0</div>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/BlueGob/cuby">
                    <div className="space-y-3 rounded-lg hover:bg-blue-700 shadow-md shadow-slate-800 p-2 transition duration-300 ease-in-out hover:delay-100">
                        <div className="text-white text-3xl"><span className="inline-block mr-1"><GoRepo size={25}/></span>Cuby</div>
                        <div className="text-white text-xl font-thin"> An algorithm for cpu scheduling /ordonnanceur des processus  </div>
                        <div className="flex flex-row space-x-5 text-white">
                        <div><span class="inline-block w-3 h-3 bg-zinc-800 rounded-full mr-1"></span>C</div>
                        <div> <span className="inline-block mr-1"><FaRegStar /> </span>0</div>
                            <div> <span className="inline-block mr-1"><FaCodeFork /> </span>1</div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}