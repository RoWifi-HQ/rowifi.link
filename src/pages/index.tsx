import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowSmRightIcon } from '@heroicons/react/outline';

import { Header } from '../components/Header';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col font-inter text-white">
      <Header />
      <main>
        <div className="flex flex-col py-20 max-w-4xl mx-auto space-y-5">
          <span className="text-8xl text-center font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">The 2nd Gen</span>
          <span className="text-8xl text-center font-extrabold">Roblox-Discord</span>
          <span className="text-8xl text-center font-extrabold">Verification Bot</span>
          <div className="py-12 mx-auto space-x-10">
            <a
              href="https://discord.com/oauth2/authorize?client_id=508968886998269962&scope=bot%20applications.commands&permissions=402738240"
              target="_blank"
              rel="noreferrer"
              className="bg-blue-600 px-8 py-3 rounded-md hover:bg-blue-800 border border-blue-600 hover:border-blue-800"
            >
              Add the Bot
            </a>
            <Link href="/docs">
              <a className="bg-transparent border border-gray-600 text-gray-500 inline-flex items-center px-8 py-3 rounded-md hover:text-white hover:border-white">
                Learn More
                <ArrowSmRightIcon className="w-5 h-5 ml-1" />
              </a>
            </Link>
          </div>
        </div>

        <section className="flex flex-col">
          <span id="features" className="mx-auto text-6xl">Features</span>
          <div className="py-24 flex flex-row w-full justify-evenly">
            <div className="my-auto flex flex-col max-w-md">
              <span className="text-2xl font-bold">Highly Customizable Bind System</span>
              <span className="mt-4 text-gray-300">Create integrations between Roblox groups & Discord servers with our powerful bind engine. You can even our Lua-like language to mix and match different bind types.</span>
            </div>
            <Image src="/rowifi.png" alt="RoWifi Logo" width={300} height={300} />
          </div>
        </section>
      </main>
    </div >
  );
};

export default Home;
