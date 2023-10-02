import { useContext } from "react";
import { AuthContext } from "./AuthProvide/AuthProvider";


const Registration = () => {
    const {createUser} = useContext(AuthContext);
    
    const handleSignUp=e=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(name,email,password);
        createUser(email, password)
        .then(res=>{
           const newUser = res.user ;
           console.log(newUser)

        })
        .catch(error=>{
            console.log(error)
        })

    }
    return (
        <div>
           
<div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
               <form onSubmit={handleSignUp}>
               <div className="bg-gradient-to-tr from-pink-200 to-pink-100 px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="name"
                        placeholder="Full Name" />

                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />
                    

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-gradient-to-tr from-pink-600 to-pink-400 text-white hover:bg-green-dark focus:outline-none my-1"
                    >Create Account</button>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>
               </form>

                <div className="text-grey-dark mt-6">
                    Already have an account? 
                    <a className="no-underline bg-gradient-to-tr from-pink-600 to-pink-400 rounded-md px-2 py-1 ml-2 text-center border-b border-blue text-blue" href="../signin/">
                        Log in
                    </a>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Registration;