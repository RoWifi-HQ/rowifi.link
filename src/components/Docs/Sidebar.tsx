import Link from "next/link";
import ActiveLink from "../Miscellanous/ActiveLink";

export default function Sidebar() {
    return (
        <div className="min-h-full h-full flex flex-col py-4 items-center space-y-4 overflow-y-auto scrollbar-w-2 scrollbar-thumb-rounded-md scrollbar-thumb-button-dark text-center md:text-left">
            <Link href="/docs" passHref>
                <ActiveLink className="w-2/3 flex justify-center md:justify-start items-center text-gray-300 mx-auto" activeClassName="!text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span className="ml-4 font-medium">Home</span>
                </ActiveLink>
            </Link>
            <Link href="/docs/getting-started" passHref>
                <ActiveLink className="w-2/3 flex justify-center md:justify-start items-center text-gray-300" activeClassName="!text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="font-medium ml-4">Getting Started</span>
                </ActiveLink>
            </Link>
            <Link href="/docs/verification" passHref>
                <ActiveLink className="w-2/3 flex justify-center md:justify-start items-center text-gray-300" activeClassName="!text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                    <span className="font-medium ml-4">Verification</span>
                </ActiveLink>
            </Link>
            <span className="uppercase tracking-widest text-gray-400 opacity-80 text-sm pt-6 w-2/3">Binds</span>
            <Link href="/docs/rankbinds" passHref>
                <ActiveLink className="w-2/3 flex justify-center md:justify-start items-center text-gray-300" activeClassName="!text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="font-medium ml-4">Rankbinds</span>
                </ActiveLink>
            </Link>
            <Link href="/docs/groupbinds" passHref>
                <ActiveLink className="w-2/3 flex justify-center md:justify-start items-center text-gray-300" activeClassName="!text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="font-medium ml-4">Groupbinds</span>
                </ActiveLink>
            </Link>
            <Link href="/docs/custombinds" passHref>
                <ActiveLink className="w-2/3 flex justify-center md:justify-start items-center text-gray-300" activeClassName="!text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                    <span className="font-medium ml-4">Custombinds</span>
                </ActiveLink>
            </Link>
            <Link href="/docs/assetbinds" passHref>
                <ActiveLink className="w-2/3 flex justify-center md:justify-start items-center text-gray-300" activeClassName="!text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="font-medium ml-4">Assetbinds</span>
                </ActiveLink>
            </Link>
            <span className="uppercase tracking-widest text-gray-400 opacity-80 text-sm pt-6 w-2/3">Concepts</span>
            <Link href="/docs/priority" passHref>
                <ActiveLink className="w-2/3 flex justify-center md:justify-start items-center text-gray-300" activeClassName="!text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                    </svg>
                    <span className="font-medium ml-4">Priority</span>
                </ActiveLink>
            </Link>
            <Link href="/docs/template" passHref>
                <ActiveLink className="w-2/3 flex justify-center md:justify-start items-center text-gray-300" activeClassName="!text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                    <span className="font-medium ml-4">Template</span>
                </ActiveLink>
            </Link>
            <span className="uppercase tracking-widest text-gray-400 opacity-80 text-sm pt-6 w-2/3">Other</span>
            <Link href="/docs/analytics" passHref>
                <ActiveLink className="w-2/3 flex justify-center md:justify-start items-center text-gray-300" activeClassName="!text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                    <span className="font-medium ml-4">Analytics</span>
                </ActiveLink>
            </Link>
            <Link href="/docs/backups" passHref>
                <ActiveLink className="w-2/3 flex justify-center md:justify-start items-center text-gray-300" activeClassName="!text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                    <span className="font-medium ml-4">Backups</span>
                </ActiveLink>
            </Link>
            <Link href="/docs/events" passHref>
                <ActiveLink className="w-2/3 flex justify-center md:justify-start items-center text-gray-300" activeClassName="!text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                    <span className="font-medium ml-4">Events</span>
                </ActiveLink>
            </Link>
            <Link href="/docs/blacklists" passHref>
                <ActiveLink className="w-2/3 flex justify-center md:justify-start items-center text-gray-300" activeClassName="!text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6" />
                    </svg>
                    <span className="font-medium ml-4">Blacklists</span>
                </ActiveLink>
            </Link>
            <Link href="/docs/audit-logs" passHref>
                <ActiveLink className="w-2/3 flex justify-center md:justify-start items-center text-gray-300" activeClassName="!text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                    </svg>
                    <span className="font-medium ml-4">Audit Logs</span>
                </ActiveLink>
            </Link>
            <Link href="/docs/settings" passHref>
                <ActiveLink className="w-2/3 flex justify-center md:justify-start items-center text-gray-300" activeClassName="!text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="font-medium ml-4">Settings</span>
                </ActiveLink>
            </Link>
            <Link href="/docs/functional-roles" passHref>
                <ActiveLink className="w-2/3 flex justify-center md:justify-start items-center text-gray-300" activeClassName="!text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                    <span className="font-medium ml-4">Functional Roles</span>
                </ActiveLink>
            </Link>
        </div>
    );
}