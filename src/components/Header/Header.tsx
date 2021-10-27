import Image from 'next/image';
import Link from 'next/link';
import { ArrowSmRightIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="flex items-center py-2 bg-dashboard-dark">
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
                        <div className="w-[75%] bg-dashboard-dark flex flex-col text-white z-10">
                            <div className="flex items-center mt-2 ml-2">
                                <Image src="/rowifi.png" alt="RoWifi Logo" height={50} width={50} />
                                <span className="text-xl ml-2 font-semibold">RoWifi</span>
                                <button className="py-2 mr-2 ml-auto" onClick={() => setOpen(false)}>
                                    <XIcon className="w-6 h-6" />
                                </button>
                            </div>
                            <div className="flex flex-col text-center px-2">
                                <Link href="/#features">
                                    <a className="hover:text-link-dark py-2 text-lg font-semibold" onClick={() => setOpen(false)}>Features</a>
                                </Link>
                                <a className="hover:text-link-dark py-2 text-lg font-semibold" href="https://www.patreon.com/rowifi" target="_blank" rel="noreferrer">Premium</a>
                                <Link href="/docs">
                                    <a className="hover:text-link-dark py-2 text-lg font-semibold">Docs</a>
                                </Link>
                                <a className="hover:text-link-dark py-2 text-lg font-semibold" href="https://discord.gg/h4BGGyR" target="_blank" rel="noreferrer">Support</a>
                                <button disabled className="hover:text-link-dark py-2 text-lg font-semibold inline-flex items-center justify-center cursor-not-allowed">
                                    Dashboard
                                    <ArrowSmRightIcon className="w-5 h-5 ml-1" />
                                </button>
                            </div>
                        </div>
                    </Transition.Child>
                </Dialog>
            </Transition.Root>

            <div className="container mx-auto flex md:justify-around">
                <Link href="/">
                    <a className="flex items-center ml-4 md:ml-0">
                        <Image src="/rowifi.png" alt="RoWifi Logo" height={50} width={50} />
                        <span className="text-xl ml-2 font-semibold">RoWifi</span>
                    </a>
                </Link>
                <div className="hidden md:flex items-center space-x-8 text-gray-300">
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
                <button type="button" className="md:hidden ml-auto mr-4" onClick={() => setOpen(true)}>
                    <MenuIcon className="h-6 w-6" />
                </button>
            </div>
        </header>
    );
}