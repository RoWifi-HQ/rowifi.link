import Link from "next/link";
import Image from "next/image";
import { ClassAttributes, HTMLAttributes, useState, Fragment } from "react";
import { Dialog, Transition } from '@headlessui/react';
import Search from "./Search";
import Sidebar from "./Sidebar";
import { ArrowSmRightIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import AdBanner from "../Miscellanous/AdBanner";

export default function Layout(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement>) {
    const [open, setOpen] = useState(false);

    return (
        <div className="text-white font-inter min-h-screen h-full relative flex flex-col md:block">
            <header className="flex fixed top-0 inset-x-0 h-16 w-full z-10 items-center py-2 bg-dashboard-dark">
                <Transition.Root show={open} as={Fragment}>
                    <Dialog as="div" className="fixed inset-0 flex z-40 md:hidden" onClose={setOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
                        </Transition.Child>
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <div className="w-[75%] bg-dashboard-dark flex flex-col text-white z-10 overflow-y-auto scrollbar-w-2 scrollbar-thumb-rounded-md scrollbar-thumb-button-dark">
                                <div className="flex items-center mt-2 ml-2">
                                    <Image src="/rowifi.png" alt="RoWifi Logo" height={50} width={50} />
                                    <span className="text-xl ml-2 font-semibold">RoWifi</span>
                                    <button className="py-2 mr-2 ml-auto" onClick={() => setOpen(false)}>
                                        <XIcon className="w-6 h-6" />
                                    </button>
                                </div>
                                <Sidebar />
                            </div>
                        </Transition.Child>
                    </Dialog>
                </Transition.Root>
                <div className="w-full flex md:justify-around px-2 md:px-0">
                    <button type="button" className="md:hidden mr-4" onClick={() => setOpen(true)}>
                        <MenuIcon className="h-6 w-6" />
                    </button>
                    <Link href="/">
                        <a className="flex items-center">
                            <Image src="/rowifi.png" alt="RoWifi Logo" height={50} width={50} />
                            <span className="text-xl ml-2 font-semibold">RoWifi</span>
                            <span className="uppercase tracking-widest text-xs ml-3 text-blue-600 bg-blue-600 bg-opacity-40 px-2 py-1 rounded-lg md:block hidden">Docs</span>
                        </a>
                    </Link>
                    <Search className="hidden md:block my-auto" />
                    <div className="flex items-center space-x-8 text-gray-300 ml-auto md:ml-0 mr-2 md:mr-0">
                        <button disabled className="bg-button-dark px-4 py-1.5 rounded-xl hover:bg-hover-dark cursor-not-allowed inline-flex items-center">
                            Dashboard
                            <ArrowSmRightIcon className="w-5 h-5 ml-1" />
                        </button>
                    </div>
                </div>
            </header>
            <div className="w-[26%] xl:w-1/6 lg:w-[7/30] fixed inset-y-0 pt-16 hidden md:block bg-[#212121]">
                <Sidebar />
            </div>
            <div className="bg-dashboard-dark top-16 z-10 fixed w-full flex md:hidden">
                <Search className="w-full" />
            </div>
            <div className="prose lg:prose-lg max-w-none w-full md:pl-64 lg:pl-72 pt-36 md:pt-24">
                <AdBanner />
                <div className="px-8 pb-8 pt-12 xl:px-48">
                    <main {...props} />
                </div>
            </div>
        </div>
    );
}