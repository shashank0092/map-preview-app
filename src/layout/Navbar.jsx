import { Link, useLocation,To } from "react-router-dom"
import LOGO from "../assets/Logo.png"

const Navbar=()=>{
    const location=useLocation()
    console.log(location.pathname,"this is route location")
    return(
        <>
            <div className="flex items-center justify-between bg-black " >
                <div className="h-1/2 w-1/6">
                    <p>
                        <img src={LOGO} alt="" className="h-1/2 w-1/2" />
                    </p>
                </div>
                <div className="flex gap-5 mr-5" >
                    <div>
                    <p className="text-white hover:cursor-pointer hover:underline decoration-white" > {location.pathname=="/ListView"?(<Link to={"/MapView"} >MapView</Link>):(<Link to={"/ListView"} >ListView</Link>) } </p>
                    </div>
                    <div className="hover:cursor-pointer hover:underline decoration-white" >
                        <p className="text-white">About Us</p>
                    </div>
                    <div className="hover:cursor-pointer hover:underline decoration-white" >
                       <p className="text-white">Contact Us</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;