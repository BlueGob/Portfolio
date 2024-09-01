export default function WorkExperience() {
    return (
        <div className="lg:pl-20 pt-80 pr-10">
            <div className="text-white text-6xl">Work Experience</div>
            <div className="grid lg:grid-cols-3 gap-y-10 lg:gap-10 pt-20 sm:grid-cols-1">

                <div className="shadow-lg rounded-lg overflow-hidden relative border border-gray-300 transform transition-transform duration-500 hover:scale-105">
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
                </div>

                <div className="shadow-lg rounded-lg overflow-hidden relative  border border-gray-300 transform transition-transform duration-500 hover:scale-105">
                    <img className=" h-44 object-cover  w-full" src="bfi.jpg" />

                    <div className="flex flex-col justify-center items-center text-white pt-5 space-y-5">
                        <h2 className="text-3xl">Summer Internship</h2>
                        <h2 className="text-2xl font-thin">Software Engineer</h2>
                        <div className="text-xl font-extralight ">Julley 2023 - Auguest 2023</div>

                        <p className="text-white font-thin text-xl text-center pl-3 pb-5 ">
                            Design and Development of a Named Entity Similarity Estimation Engine using Python, sk-learn
                        </p>
                    </div>
                </div>

                <div className="shadow-lg rounded-lg overflow-hidden relative  border border-gray-300 transform transition-transform duration-500 hover:scale-105">
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

                </div>
            </div>
        </div>
    );

}