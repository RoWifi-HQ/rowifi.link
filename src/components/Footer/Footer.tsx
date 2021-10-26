import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-dashboard-dark">
            <div className="container mx-auto flex flex-col md:flex-row px-16 py-16 text-center md:text-left">
                <div className="flex flex-col items-center md:items-start">
                    <div className="flex flex-row items-center">
                        <Image src="/rowifi.png" alt="RoWifi Logo" height={50} width={50} />
                        <span className="text-xl font-semibold ml-3">RoWifi</span>
                    </div>
                    <span className="text-sm text-gray-300 mt-4">© 2021 RoWifi — @AsianIntel</span>
                </div>
                <div className="flex flex-col md:flex-row md:ml-auto md:space-x-16 space-y-8 md:space-y-0 text-center md:text-left mt-8 md:mt-0">
                    <div>
                        <span>Product</span>
                        <nav className="mt-4 space-y-2 flex flex-col">
                            <Link href="/#features">
                                <a className="text-sm text-gray-300 hover:text-link-dark">Features</a>
                            </Link>
                            <Link href="/invite">
                                <a className="text-sm text-gray-300 hover:text-link-dark">Invite the Bot</a>
                            </Link>
                            <Link href="/docs">
                                <a className="text-sm text-gray-300 hover:text-link-dark">Docs</a>
                            </Link>
                            <a href="https://patreon.com/rowifi" target="_blank" rel="noreferrer" className="text-sm text-gray-300 hover:text-link-dark">Premium</a>
                        </nav>
                    </div>
                    <div>
                        <span>Legal</span>
                        <nav className="mt-4 space-y-2 flex flex-col">
                            <Link href="/legal/terms-of-service">
                                <a className="text-sm text-gray-300 hover:text-link-dark">Terms of Service</a>
                            </Link>
                            <Link href="/legal/privacy-policy">
                                <a className="text-sm text-gray-300 hover:text-link-dark">Privacy Policy</a>
                            </Link>
                            <Link href="/legal/cookie-policy">
                                <a className="text-sm text-gray-300 hover:text-link-dark">Cookie Policy</a>
                            </Link>
                        </nav>
                    </div>
                    <div>
                        <span>Social</span>
                        <nav className="mt-4 space-y-2 flex flex-col">
                            <div className="text-sm text-gray-300 hover:text-link-dark">
                                <a href="https://twitter.com/rowifibot" target="_blank" rel="noreferrer">Twitter</a>
                            </div>
                            <div className="text-sm text-gray-300 hover:text-link-dark">
                                <a href="https://discord.gg/h4BGGyR" target="_blank" rel="noreferrer">Discord</a>
                            </div>
                            <div className="text-sm text-gray-300 hover:text-link-dark">
                                <a href="https://www.roblox.com/groups/5581309/RoWifi-HQ#!/about" target="_blank" rel="noreferrer">Roblox</a>
                            </div>
                            <div className="text-sm text-gray-300 hover:text-link-dark">
                                <a href="https://github.com/RoWifi-HQ/" target="_blank" rel="noreferrer">Github</a>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
}