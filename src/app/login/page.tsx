"use client";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast, {Toaster} from "react-hot-toast";

export default function Login(){

    // may be some change can be made here to project demands
    const router = useRouter();
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const [buttonDisabled, setButtondisabled] = useState(true);


    const login = async () => {
        try {

            const response = await axios.post("api/auth/login", user);
            console.log("Login data", response.data.message)
            router.push("/profile")
        }catch (err: any){
            if (err.response && err.response.data && err.response.data.error) {
                toast.error("Incorrect Email or Password");
            } else {
                toast.error("Login failed");
            }
        }
    };
    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0){
            setButtondisabled(false)
        }else {
            setButtondisabled(true);
        }
    }, [user])
    return (
        <div className="flex justify-center items-center h-213">
            <div className=" w-100 flex flex-col justify-center items-center border-2 h-100 rounded-xl">
                <h1 className="text-3xl">Login</h1>
                <label htmlFor="email">Email</label>
                <input className="border h-14 w-80 rounded-xl text-center" type="text" name="" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} id="" />

                <label htmlFor="password">Password</label>
                <input className="border h-14 w-80 rounded-xl text-center" type="text" name="" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} id="" />
                <button className={` rounded-2xl h-10 w-25 my-4 ${buttonDisabled? "bg-amber-700": "bg-[#FC8A06]"}`} onClick={login}>Login</button>
                <h2>Don't have an account? click here <span className="font-bold"><Link href="/signup">signup</Link></span></h2>       
                < Toaster/>
            </div>
        </div>
    )
}