import { useFormik } from "formik";
import { Link, To } from "react-router-dom";


const LoginForm = ({ userDetails, setUserDetails }) => {

    const formik = useFormik({

        initialValues: {
            username: "",
            password: ""
        },

        onSubmit: async (values) => {


            await setUserDetails({
                username: values.username,
                password: values.password
            })
            console.log(userDetails?.username, "this is username")
            console.log(userDetails?.password, "this is passwords")


        }
    })
    return (
        <>

            <div className="flex h-[100vh] justify-center items-center  " >
                <div className="flex flex-col gap-10 " >
                    <div>
                        <p className="text-7xl font-bold" > Welcome  </p>
                    </div>
                    <div>
                        <form onSubmit={(e) => formik.handleSubmit(e)} className="flex flex-col gap-5 items-center"  >
                            <div>

                                <div>
                                    <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        placeholder="Enter Username Here"
                                        onChange={formik.handleChange}
                                        value={formik.values.username}
                                        className="border border-black py-5 px-20 rounded-full"
                                    />
                                </div>
                            </div>

                            <div>

                                <div>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        placeholder="Enter Your Password Here"
                                        onChange={formik.handleChange}
                                        value={formik.values.password}
                                        className="border border-black py-5 px-20 rounded-full"
                                    />
                                </div>
                            </div>

                            <div>
                                <Link to={"/ViewOption"} ><button type="submit" className="bg-green-400 p-5 px-20 rounded-2xl text-white font-bold text-xl" >Submit</button> </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginForm;