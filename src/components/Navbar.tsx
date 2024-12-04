import { signIn, signOut, useSession } from "next-auth/react";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Navbar() {
    const { data: session } = useSession();

    useEffect(() => {
        console.log("session", session);
    }, [session]);

    return (
        <nav className='bg-gray-800 text-white absolute top-0 left-0 right-0'>
            <div className='container mx-auto px-4 flex justify-between items-center py-4'>
                {/* Logo or Brand Name */}
                <Link href='/' className='text-lg font-bold hover:text-gray-300'>
                    NextAuth App
                </Link>

                {/* Navigation Links */}
                <div className='flex space-x-4'>
                    <Link href='/' className='hover:text-gray-300'>
                        Home
                    </Link>
                    {/* <Link href='/about' className='hover:text-gray-300'>
                        About
                    </Link> */}
                    {session && (
                        <Link href='/profile' className='hover:text-gray-300'>
                            Profile
                        </Link>
                    )}
                </div>

                {/* Authentication Buttons */}
                <div>
                    {!session ? (
                        <button onClick={() => signIn("google")} className='bg-blue-500 px-4 py-2 rounded hover:bg-blue-600'>
                            Sign In
                        </button>
                    ) : (
                        <div className='flex items-center space-x-4'>
                            {/* <span className='mr-2'>{session?.user?.name}</span> */}
                            <Image
                                src={session?.user?.image ? session?.user?.image : ""}
                                alt={session?.user?.name || "Profile Picture"}
                                className='w-8 h-8 rounded-full'
                                width={32}
                                height={32}
                            />
                            <button onClick={() => signOut()} className='bg-red-500 px-4 py-2 rounded hover:bg-red-600'>
                                Sign Out
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
