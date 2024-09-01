export default function Projects(){
    return(
        <div className="pl-20 pt-80">
            <div className="text-white text-6xl">Projects</div>
            <div className="flex flex-row pt-20 space-x-5  pr-10">
                
                <div className="flex flex-col lg:w-1/4 space-y-5 ">
                    <div className="text-white text-3xl">LL1</div>
                    <div className="text-white text-xl font-thin"> LL1 parser / analyseur syntaxique descendant LL1 </div>
                    <div className="flex flex-row space-x-5 text-white">
                        <div><span className="dot bg-red-600"></span>language used</div>
                        <div>Starts</div>
                        <div>Forks</div>
                    </div>
                </div>

                <div className="flex flex-col lg:w-1/4">
                    <div className="text-white text-3xl">project Title</div>
                    <div className="text-white text-xl font-thin">Discription of the project i did should be quite long i guess</div>
                    <div className="flex flex-row text-white">
                        <div>language used</div>
                        <div>Starts</div>
                        <div>Forks</div>
                    </div>
                </div>

                <div className="flex flex-col lg:w-1/4">
                    <div className="text-white text-3xl">project Title</div>
                    <div className="text-white text-xl font-thin">Discription of the project i did should be quite long i guess</div>
                    <div className="flex flex-row text-white">
                        <div>language used</div>
                        <div>Starts</div>
                        <div>Forks</div>
                    </div>
                </div>

                <div className="flex flex-col lg:w-1/4">
                    <div className="text-white text-3xl">project Title</div>
                    <div className="text-white text-xl font-thin">Discription of the project i did should be quite long i guess</div>
                    <div className="flex flex-row text-white">
                        <div>language used</div>
                        <div>Starts</div>
                        <div>Forks</div>
                    </div>
                </div>

                {/* <div className="flex flex-col lg:w-1/5">
                    <div className="text-white text-3xl">project Title</div>
                    <div className="text-white text-xl">Discription of the project i did should be quite long i guess</div>
                    <div className="flex flex-row text-white">
                        <div>language used</div>
                        <div>Starts</div>
                        <div>Forks</div>
                    </div>
                </div> */}
                
            </div>
        </div>
    );
}