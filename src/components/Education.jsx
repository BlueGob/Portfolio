export default function Education() {
    return (
        <div>
            <div className="lg:pl-20 md:pr-20  text-white">
                <div className="md:text-6xl text-5xl pl-5 md:pl-0">Education</div>

                <div className="flex flex-col items-center md:flex-row gap-y-10 lg:gap-10 pt-20 ">
                    <div>
                        <img src="isi.png" alt="Institut Superieure d'informatique" className=" object-cover" />
                    </div>
                    <div className="flex flex-col md:items-start items-center space-y-3  text-center">
                        <div className="md:text-3xl text-2xl">Institut Supérieur d'Informatique</div>
                        <div className="text-xl font-extralight ">2021 - 2024</div>
                        <div className="text-2xl font-thin  ">National Engineering Degree</div>
                        <div className="text-2xl font-thin "><span className="underline">Specialization:</span> Software Development Engineering</div>
                    </div>
                </div>
                <hr className="md:w-3/4 " />

                <div className="flex flex-col items-center md:flex-row gap-y-10 lg:gap-10 pt-20 ">
                    <div>
                        <img src="isi.png" alt="Institut Superieure d'informatique" className="object-cover" />
                    </div>
                    <div className="flex flex-col md:items-start items-center space-y-3 text-center">
                        <div className="md:text-3xl text-2xl">Institut Supérieur d'Informatique</div>
                        <div className="text-xl font-extralight">2018 - 2021</div>
                        <div className="text-2xl font-thin p-2 md:p-0">National Applied Bachelor's Degree in Computer Science</div>
                        <div className="text-2xl font-thin "><span className="underline">Specialization:</span> Computer Systems and Software</div>
                    </div>
                </div>

                <hr className="md:w-3/4 " />
            </div>

        </div>
    );
}
