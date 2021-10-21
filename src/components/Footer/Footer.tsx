import Image from "next/image";

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
                        <nav className="list-none mt-4 space-y-2">
                            <li className="text-sm text-gray-300 hover:text-link-dark">Features</li>
                            <li className="text-sm text-gray-300 hover:text-link-dark">Invite the Bot</li>
                            <li className="text-sm text-gray-300 hover:text-link-dark">Docs</li>
                            <li className="text-sm text-gray-300 hover:text-link-dark">Developers</li>
                            <li className="text-sm text-gray-300 hover:text-link-dark">Premium</li>
                        </nav>
                    </div>
                    <div>
                        <span>Legal</span>
                        <nav className="list-none mt-4 space-y-2">
                            <li className="text-sm text-gray-300 hover:text-link-dark">Privacy Policy</li>
                            <li className="text-sm text-gray-300 hover:text-link-dark">Terms of Use</li>
                            <li className="text-sm text-gray-300 hover:text-link-dark">Cookie Policy</li>
                        </nav>
                    </div>
                    <div>
                        <span>Social</span>
                        <nav className="list-none mt-4 space-y-2">
                            <li className="text-sm text-gray-300 hover:text-link-dark">
                                <a href="https://twitter.com/rowifibot" target="_blank" rel="noreferrer">Twitter</a>
                            </li>
                            <li className="text-sm text-gray-300 hover:text-link-dark">
                                <a href="https://discord.gg/h4BGGyR" target="_blank" rel="noreferrer">Discord</a>
                            </li>
                            <li className="text-sm text-gray-300 hover:text-link-dark">
                                <a href="https://www.roblox.com/groups/5581309/RoWifi-HQ#!/about" target="_blank" rel="noreferrer">Roblox</a>
                            </li>
                            <li className="text-sm text-gray-300 hover:text-link-dark">
                                <a href="https://github.com/RoWifi-HQ/" target="_blank" rel="noreferrer">Github</a>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
}