import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">VirtualR build tools 
                <span className="bg-linear-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent"> for developers</span>
            </h1>
            <p className="text-neutral-500 mt-10 text-center max-w-4xl"> Empower developers to build immersive virtual reality experiences with ease.</p>
            <div className="flex justify-center my-10">
                <a href="#" className="bg-linear-to-r from-orange-500 to-orange-800 py-3 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
                    Get Started
                </a>
                <a href="#" className="py-3 px-4 mx-3 rounded-md border transition duration-300 ease-in-out transform hover:scale-105">
                    Documentation
                </a>
            </div>
            <div className="flex mt-10 justify-center">
                <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my4">
                    <source src={video1} type="video/mp4"/>
                </video>
                <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my4">
                    <source src={video2} type="video/mp4"/>
                </video>
            </div>
        </div>
    )
}

export default HeroSection;