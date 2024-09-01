export default function Education() {
    return (
        <div className="flex flex-col items-start pl-20 text-white">
             <div className="text-white text-6xl pb-12 ">Education</div>
            <div className="flex items-center space-x-8 ">  
                <div>
                    <img src="isi.png" alt="Institut Superieure d'informatique" className=" object-cover" />
                </div>
                <div className="flex flex-col space-y-2">
                    <div className="text-3xl ">Institut Supérieur d'Informatique</div>
                    <div className="text-xl font-extralight ">2021 - 2024</div>
                    <h2 className="text-2xl font-thin  ">National Engineering Degree</h2>
                    <h2 className="text-2xl font-thin"><span className="underline">Specialization:</span> Software Development Engineering</h2>
                </div>
                
            </div>
            <hr className="w-3/4 "/>
            <div className="flex items-center space-x-8">
                <div>
                    <img src="isi.png" alt="Institut Superieure d'informatique" className=" object-cover" />
                </div>
                <div className="flex flex-col space-y-2">
                    <div className="text-3xl ">Institut Supérieur d'Informatique</div>
                    <div className="text-xl font-extralight ">2018 - 2021</div>

                    <h2 className="text-2xl font-thin  ">National Applied Bachelor's Degree in Computer Science</h2>
                    <h2 className="text-2xl font-thin"><span className="underline">Specialization:</span> Computer Systems and Software</h2>
                </div>
            </div>
            <hr className="w-3/4 "/>

        </div>
    );
}
