import { signIn, signOut, useSession } from "next-auth/react";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
    const { data: session } = useSession();

    return (
        <div className='flex flex-col min-h-screen items-center justify-between bg-gray-100 text-gray-800'>
            <main className='flex flex-col items-center justify-center flex-grow'>
                <Image
                    src='https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg'
                    alt='Google'
                    className='w-40 mb-4'
                    width={40}
                    height={40}
                />
                <p className='text-lg mb-6 text-gray-700'>
                    Experience seamless authentication and a modern web app design with <b>NextAuth.js</b> and <b>Tailwind CSS</b>.
                </p>
                {!session ? (
                    <button
                        onClick={() => signIn("google")}
                        className='flex items-center justify-center w-full max-w-xs mx-auto bg-white border border-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-100 hover:shadow-lg transition duration-200'
                    >
                        <Image
                            src='https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg'
                            alt='Google logo'
                            className='w-5 h-5 mr-2'
                            width={20}
                            height={20}
                        />
                        Sign in with Google
                    </button>
                ) : (
                    <div className='flex space-x-4 justify-center'>
                        <Link href='/profile' className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>
                            Go to Profile
                        </Link>
                        <button onClick={() => signOut()} className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600'>
                            Sign Out
                        </button>
                    </div>
                )}
            </main>
        </div>
    );
}
