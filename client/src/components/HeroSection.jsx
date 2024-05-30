import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-3xl sm:text-6xl lg:text-7xl text-center tracking-wide ">
            Virtual Build Tools
            <span className="bg-gradient-to-r from-orange-500 to-red-700 text-transparent bg-clip-text"> {" "} for developer</span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
            Empower your creativity and bring your VR app ideas to life with our intuitive development tools. Get started today and turn your imagination into immersive reality!.
        </p>
        <div className="flex justify-center my-10 gap-14">
            <a href="#"  className="bg-gradient-to-r from-sky-500 to-sky-900 p-2 rounded-md hover:bg-gradient-to-r hover:from-red-500 hover:to-red-800 duration-200 transition-all shrink-0">Start for free</a>
            <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 p-2 hover:bg-gradient-to-r hover:from-stone-500 hover:to-stone-800 rounded-md shrink-0" >Documentation</a>
        </div>
        <div className="flex mt-10 justify-center">
            <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4">
                <source src={video1} type="video/mp4"/>
                Your brower does not support the video tag.
            </video>
            <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4">
                <source src={video2} type="video/mp4"/>
                Your brower does not support the video tag.
            </video>
        </div>
    </div>
  )
}
