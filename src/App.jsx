import {BrowserRouter,Routes,Route} from "react-router-dom"
import LoginPage from "./pages/Login/LoginPage"
import MapViewPage from "./pages/MapView/MapViewPage"
import ListViewPage from "./pages/ListView/ListviewPage"

const App=()=>{
  return(
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>} />        
        <Route path="/ListView" element={<ListViewPage/>} />        
        <Route path="/MapView" element={<MapViewPage/>} />        
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App