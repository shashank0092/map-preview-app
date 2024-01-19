import Navbar from "../../layout/Navbar"
import ListViewHeader from "./components/ListViewHeader"
import TableView from "./components/TableView"
import BGMAP from "../../assets/BackgroundMap.jpg"

const ListViewPage=()=>{
    return(
        <>
          <div style={{backgroundImage:`url(${BGMAP})`}} >
            <Navbar/>
            <TableView/>
          </div>
        </>
    )
}

export default ListViewPage