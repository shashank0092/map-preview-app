import {BrowserRouter,Routes,Route} from "react-router-dom"
import LoginPage from "./pages/Login/LoginPage"
import MapViewPage from "./pages/MapView/MapViewPage"
import ListViewPage from "./pages/ListView/ListviewPage"
import ViewOption from "./pages/ViewOption/ViewOption"


const App=()=>{
  return(
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>} />        
        <Route path="/ListView" element={<ListViewPage/>} />        
        <Route path="/MapView" element={<MapViewPage/>} />        
        <Route path="/ViewOption" element={<ViewOption/>} />        
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App