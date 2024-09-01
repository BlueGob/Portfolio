import './wave.css'
export default function Hero(){
    return(
        <div className="border-b border-neutral-900 pb-4 lg:mb-35 h-svh">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start text-white">
                        <h1 className="pt-20 lg:pl-20 tracking-tighter lg:mt-16 lg:text-7xl ">
                            Welcome, I'm Moslem <span class="wave-emoji">👋</span>
                        </h1>
                        <p className="lg:pl-20 pt-10 text-3xl font-light leading-relaxed">
                            I’m a software engineer with a passion for machine learning, deep learning, and data science.
                            I have a strong grasp of Python, C++, and React.js,
                            and I love building efficient, user-friendly solutions that make a difference.                        
                        </p>
                    </div>
                    <div className="pl-20 pt-20 flex justify-start space-x-10 text-white items-center">
                            <button className="bg-blue-700 text-white  px-6 py-4 w-1/5 rounded-full text-xl transition-colors duration-800 hover:bg-white hover:text-blue-700">
                                My Resume
                            </button>
                            <button className="bg-blue-700 text-white px-6 py-4 w-1/5 rounded-full text-xl transition-colors duration-800 hover:bg-white hover:text-blue-700">
                                Contact me
                            </button>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                </div>
            </div>
            
        </div>
    )
}