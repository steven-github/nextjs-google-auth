import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginPage() {
    const { data: session } = useSession();

    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-100'>
            <div className='p-6 bg-white rounded shadow-md'>
                {session ? (
                    <>
                        <h1 className='text-lg font-semibold mb-4'>Welcome, {session?.user?.name}!</h1>
                        <p className='mb-4'>You are logged in with {session?.user?.email}</p>
                        <button onClick={() => signOut()} className='px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600'>
                            Sign Out
                        </button>
                    </>
                ) : (
                    <>
                        <h1 className='text-lg font-semibold mb-4'>Login</h1>
                        <button onClick={() => signIn("google")} className='px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600'>
                            Sign in with Google
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}
