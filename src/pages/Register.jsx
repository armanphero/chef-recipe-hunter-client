import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../assets/google.png'
import github from '../assets/github.png'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase';
import { AuthContext } from '../provider/AuthProvider';

const auth = getAuth(app);
const Register = () => {
    const { createUser, updateUsersProfile } = useContext(AuthContext);
    const [displayName, setDisplayName] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || "/";
    // console.log(location);
    console.log(from);

    const handleRegister = (e) => {
        e.preventDefault();
        setError("");
        if (password.length < 6) {
            setError("Password must be at least 6 characters long");
            return;
        }
        else if(!/(?=.*[0-9])/.test(password)) {
            setError("Password must contain at least one number");
            return;
        }
        else if(!/(?=.*[A-Z])/.test(password)) {
            setError("Password must contain at least one uppercase letter");
            return;
        }
        else if(!/(?=.*[a-z])/.test(password)) {
            setError("Password must contain at least one lowercase letter");
            return;
        }
        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                updateUsersProfile(displayName, photoURL);
                navigate(from, { replace: true })

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
                            Create and account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleRegister}>
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Your Name</label>
                                <input type="text" onChange={(e) => setDisplayName(e.target.value)} name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-gray-400 block w-full p-2.5  dark:placeholder-gray-400" placeholder="name" required />
                            </div>
                            <div>
                                <label htmlFor="photo" className="block mb-2 text-sm font-medium text-gray-900 ">Photo URL</label>
                                <input type="text" name="photo" onChange={(e) => setPhotoURL(e.target.value)} id="photo" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-gray-400 block w-full p-2.5  dark:placeholder-gray-400" placeholder="www.photo.com" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                                <input type="email" onChange={(e) => setEmail(e.target.value)} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-gray-400 block w-full p-2.5  dark:placeholder-gray-400" placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                <input type="password" onChange={(e) => setPassword(e.target.value)} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-gray-400 block w-full p-2.5  dark:placeholder-gray-400" required />
                            </div>
                            <p className='text-red-500'>{error}</p>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-light text-gray-600">I accept the <Link className="font-medium text-blue-500 hover:underline" href="#">Terms and Conditions</Link></label>
                                </div>
                            </div>

                            <button type="submit" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:focus:ring-blue-800 w-full">Create an account</button>
                            <p className="text-sm font-light text-gray-600">
                                Already have an account? <Link to='/login' className="font-medium text-blue-500 hover:underline dark:text-primary-500">Login here</Link>
                            </p>
                        </form>
                        <div>
                            <div className='flex items-center mb-5'>
                                <hr className='flex-1' />
                                <span className='flex-1 text-center'>Or</span>
                                <hr className='flex-1' />
                            </div>
                            <button className='flex justify-center gap-2 mb-4 w-full border border-gray-300 rounded-lg p-2'>
                                <img src={google} className='w-6' alt="" />
                                <p>Sign Up With Google</p>
                            </button>
                            <button className='flex justify-center gap-2 w-full border border-gray-300 rounded-lg p-2'>
                                <img src={github} className='w-6' alt="" />
                                <p>Sign Up With Github</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;