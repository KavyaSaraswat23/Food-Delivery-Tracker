"use client";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function Signup(){
    const router = useRouter();
    
    const [buttonDisabled, setButtondisabled] = useState(true);
    const [loading, setLoading] = useState(false);

    const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        password: "",
    })

    const handleAddressClick = () => {
        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser");
            return;
        }

    navigator.geolocation.getCurrentPosition(
        async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        setLocation([lat, lon]);

        try {
            const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
            );
            const data = await res.json();
            setUser((prev) => ({...prev, address: data.display_name,}));
        } catch(err) {
            console.error("Reverse geocoding failed", err);
            alert("Failed to get address");
        }},
        (error) => {
        console.error("Geolocation error:", error);
        alert("Please allow location access");
            }
    );
    };

    useEffect(() => {
        if (user.email.length > 0 && user.phone.length == 10 && user.password.length > 0 && user.name.length > 0){
            setButtondisabled(false)
        }else {
            setButtondisabled(true);
        }
    }, [user])

    const signup = async () => {
        try {
            setLoading(true)
            const response = await axios.post("/api/auth/signup", user);
            console.log("signup done !!", response.data.message);
            router.push("/login")
        } catch(err: any){
            console.log(err.message)
            toast.error("User already exist")
        }finally{
            setLoading(false)
        }
    }

    return (
        <div className="flex justify-center items-center h-213 border">
            <div className=" w-100 flex flex-col justify-center items-center border h-100 rounded-2xl">
                <h1 className="text-2xl">{loading ? "Wait": "Signup"}</h1>
                <label htmlFor="username">Name</label>
                <input className="border" type="text" name="" value={user.name} onChange={(e) => setUser({...user, name: e.target.value})} id="" />
                <label htmlFor="email">Email</label>
                <input className="border" type="text" name="" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} id="" />
                <label htmlFor="phone">Phone Number</label>
                <input className="border" type="text" min={10} maxLength={10} name="" value={user.phone} onChange={(e) => setUser({...user, phone: e.target.value})} id="" />
                <label htmlFor="address" >Address</label>
                <input className="border" type="text" name="" value={user.address} onClick={handleAddressClick} onChange={(e) => setUser({...user, address: e.target.value})} id=""/>
                <label htmlFor="password">Password</label>
                <input className="border" type="text" name="" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} id="" />
                <button className={`rounded-2xl h-10 w-25 ${buttonDisabled ? "bg-amber-700": "bg-[#FC8A06]"}`} onClick={signup}>Signup</button>
                <h2>Have an account? click here <span className="font-bold"><Link href="/login">login</Link></span></h2>
                
            </div>
            <Toaster />
        </div>
    )
}