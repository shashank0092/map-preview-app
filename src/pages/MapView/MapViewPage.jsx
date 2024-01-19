import Navbar from "../../layout/Navbar"
import BGMAP from "../../assets/BackgroundMap.jpg"

const MapViewPage = () => {
    return (
        <>
            <div style={{ backgroundImage: `url(${BGMAP})` }} >
                <div>
                    <Navbar />
                </div>
                <div className="flex flex-col justify-center ml-20 mr-20 gap-14 "  >
                    <div className="mt-10 flex flex-col gap-5" id="location" >
                        <div className="flex items-center justify-between" >
                            <div>
                                <p className="font-bold text-5xl " >Ride Location</p>
                            </div>
                            <div className="flex gap-5" >
                                <button className="bg-gray-300 p-5 rounded-full px-12" > <a href="#location"><p className="font-bold text-white" >Location</p></a> </button>
                                <button className="bg-yellow-300 p-5 rounded-full px-12" > <a href="#density "> <p className="font-bold text-white"> Density </p> </a> </button>
                                <button className="bg-green-300 p-5 rounded-full px-12" > <a href="#path"> <p className="font-bold text-white">Path</p> </a> </button>

                            </div>
                        </div>
                        <div>
                            <iframe width="100%" height="500px" src="https://studio.foursquare.com/public/4737e0b4-b865-41ed-8848-a8e6c39c47ed/embed" frameborder="0" className="rounded-xl" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className="mt-10 flex flex-col gap-5" id="density" >
                        <div className="flex items-center justify-between" >
                            <div>
                                <p className="font-bold text-5xl " >Ride Density</p>
                            </div>
                            <div className="flex gap-5" >
                                <button className="bg-gray-300 p-5 rounded-full px-12" > <a href="#location"><p className="font-bold text-white" >Location</p></a> </button>
                                <button className="bg-yellow-300 p-5 rounded-full px-12" > <a href="#density "> <p className="font-bold text-white"> Density </p> </a> </button>
                                <button className="bg-green-300 p-5 rounded-full px-12" > <a href="#path"> <p className="font-bold text-white">Path</p> </a> </button>

                            </div>
                        </div>
                        <div>
                            <iframe width="100%" height="500px" src="https://studio.foursquare.com/public/4737e0b4-b865-41ed-8848-a8e6c39c47ed/embed" frameborder="0" className="rounded-xl" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className="mb-10 flex flex-col gap-5 mt-20" id="path" >
                        <div className="flex items-center justify-between" >
                            <div>
                                <p className="font-bold text-5xl " >Ride Path</p>
                            </div>
                            <div className="flex gap-5" >
                                <button className="bg-gray-300 p-5 rounded-full px-12" > <a href="#location"><p className="font-bold text-white" >Location</p></a> </button>
                                <button className="bg-yellow-300 p-5 rounded-full px-12" > <a href="#density "> <p className="font-bold text-white"> Density </p> </a> </button>
                                <button className="bg-green-300 p-5 rounded-full px-12" > <a href="#path"> <p className="font-bold text-white">Path</p> </a> </button>

                            </div>
                        </div>
                        <div>
                            <iframe width="100%" height="500px" src="https://studio.foursquare.com/public/4737e0b4-b865-41ed-8848-a8e6c39c47ed/embed" frameborder="0" className="rounded-xl" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MapViewPage