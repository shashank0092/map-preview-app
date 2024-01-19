import { Link, To } from "react-router-dom"
import BGMAP from "../../assets/bgmap1.jpeg"
const ViewOption=()=>{
    return(
        <>
           <div style={{backgroundImage:`url(${BGMAP})`}}>
           <div className="flex h-[100vh] flex-col justify-center items-center gap-5"  >
                <div>
                    <p className="text-5xl font-bold text-white " >Choose Your View Options</p>
                </div>
                <div className="flex flex-col gap-5" > 
                    <Link to="/ListView" >
                    <button className="bg-black text-white p-5 px-20 rounded-xl" >List View</button>
                    </Link >
                    <Link to="/MapView" >
                    <button className="bg-red-500 text-white p-5 px-20 rounded-xl" >Map View</button>
                    </Link>
                </div>
            </div>
           </div>
        </>
    )
}

export default ViewOption