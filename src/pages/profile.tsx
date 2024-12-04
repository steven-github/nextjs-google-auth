import Image from "next/image";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export default function ProfilePage() {
    const { data: session, status } = useSession();
    const router = useRouter();

    // Redirect to login if not authenticated
    if (status === "loading") {
        return <p>Loading...</p>;
    }

    if (!session) {
        router.push("/login");
        return null;
    }

    return (
        <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
            <div className='bg-white p-6 rounded shadow-lg w-full max-w-md'>
                <div className='text-center'>
                    <Image
                        src={session?.user?.image ? session?.user?.image : "https://via.placeholder.com/150"}
                        alt={session?.user?.name || "Profile Picture"}
                        className='w-[64px] h-[64px] rounded-full mx-auto'
                        width={64}
                        height={64}
                    />
                    <h2 className='text-2xl font-semibold'>{session?.user?.name}</h2>
                    <p className='text-gray-600'>{session?.user?.email}</p>
                </div>

                <div className='mt-6 text-center'>
                    <button onClick={() => router.push("/")} className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>
                        Go to Home
                    </button>
                </div>
            </div>
        </div>
    );
}
