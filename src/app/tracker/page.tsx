'use client'
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import axios from "axios";

export default function Profile() {
    const router = useRouter();
    const pathname = usePathname();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (pathname !== "/tracker") return;

        const getUserDetails = async () => {
            try {
                const res = await axios.get("/api/me");
                const name = res.data?.data?.name;
                if (name) {
                    router.replace(`/tracker/${name}`);
                } else {
                    setLoading(false);
                }
            } catch {
                setLoading(false);
            }
        };

        getUserDetails();
    }, [pathname, router]);

    if (loading) {
        return <div className="text-5xl text-center font-bold">Loading your Profile...</div>;
    }

    return <div>User not found.</div>;
}