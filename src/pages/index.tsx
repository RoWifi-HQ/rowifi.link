import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowSmRightIcon } from '@heroicons/react/outline';
import { ChartPieIcon, ShieldCheckIcon, ClipboardListIcon, CloudIcon } from '@heroicons/react/solid';

import { Header } from '../components/Header';
import { FadeIn } from '../components/Miscellanous';
import { Footer } from '../components/Footer';

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
          <FadeIn>
            <div className="py-24 flex flex-row w-full justify-evenly">
              <div className="my-auto flex flex-col max-w-md">
                <span className="text-2xl font-bold">Highly Customizable Bind System</span>
                <span className="mt-4 text-gray-300 leading-tight">Create integrations between Roblox groups & Discord servers with our powerful bind engine. You can even our Lua-like language to mix and match different bind types.</span>
              </div>
              <Image src="/rowifi.png" alt="RoWifi Logo" width={300} height={300} />
            </div>
          </FadeIn>
          <FadeIn>
            <div className="py-24 flex flex-row w-full justify-evenly">
              <Image src="/rowifi.png" alt="RoWifi Logo" width={300} height={300} />
              <div className="my-auto flex flex-col max-w-md">
                <span className="text-2xl font-bold">Link Multiple Accounts</span>
                <span className="mt-4 text-gray-300 leading-tight">Switch seamlessly between any Roblox accounts you own. No need to worry about having only one account across all Discord you are a part of.</span>
              </div>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="py-24 flex flex-row w-full justify-evenly">
              <div className="my-auto flex flex-col max-w-md">
                <span className="text-2xl font-bold">Smart Functional Roles</span>
                <span className="mt-4 text-gray-300 leading-tight">We understand you are wary about giving management permissions to members in your community. Create the named roles we support and let your members have these roles. Leave the worry to us!</span>
              </div>
              <Image src="/rowifi.png" alt="RoWifi Logo" width={300} height={300} />
            </div>
          </FadeIn>
        </section>

        <section className="bg-dashboard-dark flex py-6 flex-col">
          <span className="text-3xl mx-auto">The Best Roblox Bot for Discord with even more systems</span>
          <div className="flex justify-center mt-6">
            <a
              href="https://discord.com/oauth2/authorize?client_id=508968886998269962&scope=bot%20applications.commands&permissions=402738240"
              target="_blank"
              rel="noreferrer"
              className="bg-blue-600 px-8 py-2 rounded-md hover:bg-blue-800 border border-blue-600 hover:border-blue-800"
            >
              Invite to your Server
            </a>
          </div>
        </section>

        <section className="flex justify-evenly py-24">
          <div className="flex flex-col items-center max-w-xs space-y-4">
            <ChartPieIcon className="w-10 h-10 text-blue-700" />
            <span className="text-xl font-semibold">Analytics</span>
            <span className="text-sm text-gray-300">View how your Roblox group has been growing & meeting milestones on a beautiful line chart.</span>
          </div>
          <div className="flex flex-col items-center max-w-xs space-y-4">
            <ShieldCheckIcon className="w-10 h-10 text-blue-700" />
            <span className="text-xl font-semibold">Deny Lists</span>
            <span className="text-sm text-gray-300">Keep your server safe by denying access to access to certain users or certain groups.</span>
          </div>
          <div className="flex flex-col items-center max-w-xs space-y-4">
            <ClipboardListIcon className="w-10 h-10 text-blue-700" />
            <span className="text-xl font-semibold">Event Logger</span>
            <span className="text-sm text-gray-300">Track what & how many events your members have been hosting.</span>
          </div>
          <div className="flex flex-col items-center max-w-xs space-y-4">
            <CloudIcon className="w-10 h-10 text-blue-700" />
            <span className="text-xl font-semibold">Backups</span>
            <span className="text-sm text-gray-300">Create a backup of all your binds & server configuration and restore it in any server you own.</span>
          </div>
        </section>
      </main>

      <Footer />
    </div >
  );
};

export default Home;
