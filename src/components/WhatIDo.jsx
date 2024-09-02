import LottieControl from "./LottieAnimation";

export default function WhatIdo(){
    let lottie =  new LottieControl()
    return(
        <div className="md:pl-20 pl-5 md:pr-20 text-white">
            <div className="text-5xl md:text-6xl"> What I do</div>
            <div className="grid md:grid-cols-2 grid-cols-1">
                <div className="md:-ml-36">
                    {lottie.render()}
                </div>
                <div>
                    <p className="md:text-2xl mb-6  pt-20">I'm Software engineer Who has experience in Machine Learning, Deep Learning and automation.
                    I create multiple projects using the following stack.</p>
                    <img src="python.png" className="w-20 h-20 inline-block mr-2"/>
                    <img src="sklearn.png" className="w-24 h-13 inline-block  mr-2"/>
                    <img src="tensorflow.png" className="w-16 h-16 inline-block mr-2"/>
                    <img src="pandas.png" className="w-16 h-16 inline-block mr-2"/>
                    <img src="fastapi.png" className="w-16 h-16 inline-block mr-2"/>
                    <img src="mysql.png" className="w-16 h-16 inline-block mr-2"/>
                    <img src="cpp.png" className="w-20 h-20 inline-block mr-2"/>
                    <img src="react.png" className="w-16 h-16 inline-block mr-2"/>
                    <img src="tailwind.png" className="w-20 h-20 inline-block mr-2"/>
                    <img src="docker.png" className="w-24 h-24 inline-block mr-2"/>

                    <ul className="mt-6 text-xl space-y-3">
                        <li>🚀 I Design and implement predictive models using python </li>
                        <li>🚀 I Create Neural Network based solution for image classification and prediction</li>
                        <li>🚀 I Create frontend web application with react</li>
                        <li>🚀 I create Backend api that implement predictive models using python fastAPI</li>
                        <li>🚀 I use docker for deplyment</li>
                    </ul>
                </div>
            </div>

        </div>
    );
}