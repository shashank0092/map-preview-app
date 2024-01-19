import { useState } from "react"
import LoginForm from "./components/LoginFom"
import BGMAP from "../../assets/BackgroundMap.jpg"


const LoginPage = () => {

    const [userDetails, setUserDetails] = useState({ username: "", password: "" })
    return (
        <>




            <div style={{backgroundImage:`url(${BGMAP})`}} >
                <LoginForm userDetails={userDetails} setUserDetails={setUserDetails} />

            </div>


        </>
    )
}

export default LoginPage