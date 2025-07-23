'use client'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const Navbar = () => {
    const router = useRouter()
    const pathName = usePathname()
    // can check here !!
    const [data, setData] = useState("");

    const getUserDetails = async () => {
        const res = await axios.get('/api/me');
        console.log(res.data);
        setData(res.data.data.name);
    }

    const navLinks = [
        { name: "Home", path: `/profile/${data}` },
        { name: "Restraunts", path: `/restaurant/${data}` },
        { name: "Basket", path: `/basket/${data}` },
        { name: "Tracker", path: `/tracker/${data}` },
    ];

    const logout = async () => {
        try {
            await axios.get("/api/auth/logout");
            setData("");
            router.push('/login');
        } catch (err: any) {
            console.log(err.message);
        }
    };

    useEffect(() => {
        getUserDetails();
        if (!data) {
            router.push('/login')
        }
    }, []);

    return (
        <div className='flex flex-row justify-center items-center-safe mt-7'>
            <div className='text-black text-center m-auto'>
                <h1 className='text-5xl font-bold'>Orders<span className='bg-[#FC8A06]'>.In</span></h1>
            </div>

            <div className='h-15 flex flex-row justify-around items-center m-auto'>
                {data ? (
                    navLinks.map((link) => {
                        let isActive = pathName === link.path;
                        return (
                            <Link
                                key={link.name}
                                href={link.path}
                                className={`flex flex-col justify-center items-center h-12 w-30 m-7 transition-colors ${isActive
                                    ? 'bg-[#FC8A06] text-white rounded-4xl font-semibold'
                                    : 'bg-white text-black font-semibold'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })
                ) : null}
            </div>

            <div className='flex justify-center items-center rounded-4xl text-center h-15 w-40 bg-black m-auto'>
                <h1 className='border-amber-200 text-white' onClick={logout}>
                    Logout
                </h1>
            </div>
        </div>
    );
}

export default Navbar;
