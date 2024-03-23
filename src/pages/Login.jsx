import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../assets/google.png'
import github from '../assets/github.png'
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const { signInUser, googleSignIn, githubSignIn } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    console.log(location);
    console.log(from);
    const handleSignIn = (e) => {
        e.preventDefault();
        setError("");

        signInUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigate(from, { replace: true })
                // console.log(user);
                // window.location.href = "/";
            })
            .catch((error) => {
                setError(error.code);
                console.log(error.code);
            });

    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((userCredential) => {
                const user = userCredential.user;
                navigate(from, { replace: true })
                // console.log(user);
                // window.location.href = "/";
            })
            .catch((error) => {
                setError(error.code);
                console.log(error.code);
            });
    }
    const handleGithubSignIn = () => {
        githubSignIn()
            .then((userCredential) => {
                const user = userCredential.user;
                navigate(from, { replace: true })
                // console.log(user);
                // window.location.href = "/";
            })
            .catch((error) => {
                setError(error.code);
                console.log(error.code);
            });
            
    }
    return (
        <section className="max-w-screen-xl mx-auto">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Login to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSignIn}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                                <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-gray-400 block w-full p-2.5  dark:placeholder-gray-400" placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-gray-400 block w-full p-2.5  dark:placeholder-gray-400" required />
                            </div>
                            <p className='text-red-500'>{error}</p>
                            <button type="submit" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:focus:ring-blue-800 w-full">Create an account</button>
                            <p className="text-sm font-light text-gray-600">
                                Don’t have an account yet? <Link to='/register' className="font-medium text-blue-500 hover:underline dark:text-primary-500" state={{ from }}>Register Here</Link>
                            </p>
                        </form>
                        <div>
                            <div className='flex items-center mb-5'>
                                <hr className='flex-1' />
                                <span className='flex-1 text-center'>Or</span>
                                <hr className='flex-1' />
                            </div>
                            <button onClick={handleGoogleSignIn} className='flex justify-center gap-2 mb-4 w-full border border-gray-300 rounded-lg p-2'>
                                <img src={google} className='w-6' alt="" />
                                <p>Sign in With Google</p>
                            </button>
                            <button onClick={handleGithubSignIn} className='flex justify-center gap-2 w-full border border-gray-300 rounded-lg p-2'>
                                <img src={github} className='w-6' alt="" />
                                <p>Sign in With Github</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;