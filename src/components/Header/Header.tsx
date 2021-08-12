import Image from 'next/image';
import Link from 'next/link';
import { ArrowSmRightIcon } from '@heroicons/react/outline';

export default function Header() {
    return (
        <header className="flex items-center py-2 bg-dashboard-dark">
            <div className="container mx-auto flex justify-around">
                <div className="flex items-center">
                    <Image src="/rowifi.png" alt="RoWifi Logo" height={50} width={50} />
                    <span className="text-xl ml-2 font-semibold">RoWifi</span>
                </div>
                <div className="flex items-center space-x-8 text-gray-300">
                    <Link href="/#features">
                        <a className="hover:text-link-dark">Features</a>
                    </Link>
                    <a className="hover:text-link-dark" href="https://www.patreon.com/rowifi" target="_blank" rel="noreferrer">Premium</a>
                    <Link href="/docs">
                        <a className="hover:text-link-dark">Docs</a>
                    </Link>
                    <a className="hover:text-link-dark" href="https://discord.gg/h4BGGyR" target="_blank" rel="noreferrer">Support</a>
                    <button disabled className="bg-button-dark px-4 py-1.5 rounded-xl hover:bg-hover-dark cursor-not-allowed inline-flex items-center">
                        Dashboard
                        <ArrowSmRightIcon className="w-5 h-5 ml-1" />
                    </button>
                </div>
            </div>
        </header>
    );
}