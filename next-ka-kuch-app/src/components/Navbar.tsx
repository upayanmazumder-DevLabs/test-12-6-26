import Link from 'next/link';

export default function Navbar() {

    return (
        <nav className="w-full bg-gray-800 p-4">
            <div className="container mx-auto flex items-center justify-between">
                <h1 className="text-white text-2xl font-bold">Next Ka Kuch App</h1>
                <div className="space-x-4">
                    <Link href="/" className="text-gray-300 hover:text-white">
                        Home
                    </Link>
                    <Link href="/random" className="text-gray-300 hover:text-white">
                        Random
                    </Link>
                </div>
            </div>
        </nav>
    )
}