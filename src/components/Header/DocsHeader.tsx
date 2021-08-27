import Image from 'next/image';
import Link from 'next/link';
import { ArrowSmRightIcon } from '@heroicons/react/outline';

export default function DocsHeader() {
    return (
        <header className="flex items-center py-2 bg-dashboard-dark">
            <div className="container mx-auto flex md:justify-around px-2 md:px-0">
                <Link href="/">
                    <a className="flex items-center">
                        <Image src="/rowifi.png" alt="RoWifi Logo" height={50} width={50} />
                        <span className="text-xl ml-2 font-semibold md:block hidden">RoWifi</span>
                        <span className="uppercase tracking-widest text-xs ml-3 text-blue-600 bg-blue-600 bg-opacity-40 px-2 py-1 rounded-lg md:block hidden">Docs</span>
                    </a>
                </Link>
                <div className="flex items-center space-x-8 text-gray-300 ml-auto md:ml-0 mr-2 md:mr-0">
                    <button disabled className="bg-button-dark px-4 py-1.5 rounded-xl hover:bg-hover-dark cursor-not-allowed inline-flex items-center">
                        Dashboard
                        <ArrowSmRightIcon className="w-5 h-5 ml-1" />
                    </button>
                </div>
            </div>
        </header>
    );
}