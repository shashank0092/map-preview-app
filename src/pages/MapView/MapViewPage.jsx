import Navbar from "../../layout/Navbar"
import BGMAP from "../../assets/BackgroundMap.jpg"
import { useState } from "react"


const MapViewPage = () => {

    const [density, setDensity] = useState(true)
    return (
        <>
            <div style={{ backgroundImage: `url(${BGMAP})` }} >
                <div>
                    <Navbar />
                </div>
                <div className="flex flex-col justify-center ml-20 mr-20 gap-14 xsm:ml-0 xsm:mr-0"  >
                    <div className="mt-10 flex flex-col gap-5" id="location" >
                        <div className="flex items-center justify-between" >
                            <div>
                                <p className="font-bold text-5xl xsm:text-base" >Ride Location</p>
                            </div>
                            <div className="flex gap-5" >
                                <button className="bg-gray-300 p-5 rounded-full px-12 xsm:px-5" > <a href="#location"><p className="font-bold text-white xsm:font-thin" >Location</p></a> </button>
                                <button className="bg-yellow-300 p-5 rounded-full px-12 xsm:px-5" > <a href="#density "> <p className="font-bold text-white"> Density </p> </a> </button>
                                <button className="bg-green-300 p-5 rounded-full px-12 xsm:px-5" > <a href="#path"> <p className="font-bold text-white">Path</p> </a> </button>

                            </div>
                        </div>
                        <div>
                            <iframe width="100%" height="500px" src="https://studio.foursquare.com/public/8a336ab1-1d0f-49f5-82e2-23a3d327ff14/embed" frameborder="0" className="rounded-xl" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className="mt-10 flex flex-col gap-5" id="density" >
                        <div className="flex items-center justify-between" >
                            <div>
                                <p className="font-bold text-5xl " >{density == true ? (<> Ride Starting Density </>) : (<> Ride Ending Density </>)}</p>
                            </div>
                            <div className="flex gap-5" >
                                <button className="bg-black p-5 rounded-full px-12" onClick={()=>setDensity(!density)} > <a href="#location"><p className="font-bold text-white" >{density == true ? (<>Ending</>) : (<>Starting</>)} </p></a> </button>
                                <button className="bg-gray-300 p-5 rounded-full px-12" > <a href="#location"><p className="font-bold text-white" >Location</p></a> </button>
                                <button className="bg-yellow-300 p-5 rounded-full px-12" > <a href="#density "> <p className="font-bold text-white"> Density </p> </a> </button>
                                <button className="bg-green-300 p-5 rounded-full px-12" > <a href="#path"> <p className="font-bold text-white">Path</p> </a> </button>

                            </div>
                        </div>
                        <div>
                            {
                                density == true ?
                                    (
                                        <>
                                            <iframe width="100%" height="500px" src="https://studio.foursquare.com/public/2c016bd8-5e82-4ee1-8b00-05f76c06bae2/embed" frameborder="0" className="rounded-xl" allowfullscreen></iframe>
                                        </>
                                    ) :
                                    (
                                        <>
                                            <iframe width="100%" height="500px" src="https://studio.foursquare.com/public/9d981d16-66a4-4e21-94f9-acb6d4b00537/embed" frameborder="0" className="rounded-xl" allowfullscreen></iframe>
                                        </>
                                    )
                            }
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