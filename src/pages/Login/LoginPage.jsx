import { useState } from "react"
import LoginForm from "./components/LoginFom"



const LoginPage = () => {

    const [userDetails, setUserDetails] = useState({ username: "", password: "" })
    return (
        <>




            <LoginForm userDetails={userDetails} setUserDetails={setUserDetails} />



        </>
    )
}

export default LoginPage