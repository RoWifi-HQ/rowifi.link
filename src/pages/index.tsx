import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowSmRightIcon } from '@heroicons/react/outline';
import { ChartPieIcon, ShieldCheckIcon, ClipboardListIcon, CloudIcon } from '@heroicons/react/solid';

import { Header } from '../components/Header';
import { FadeIn } from '../components/Miscellanous';
import { Footer } from '../components/Footer';
import AdBanner from '../components/Miscellanous/AdBanner';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col font-inter text-white">
      <Header />
      <main className="px-1">
        <div className="flex flex-col py-20 max-w-4xl mx-auto space-y-5">
          <span className="md:text-8xl text-4xl text-center font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">The 2nd Gen</span>
          <span className="md:text-8xl text-4xl text-center font-extrabold">Roblox-Discord</span>
          <span className="md:text-8xl text-4xl text-center font-extrabold">Verification Bot</span>
          <div className="py-12 mx-auto flex flex-col md:flex-row md:space-x-10  space-y-4 md:space-y-0">
            <a
              href="https://discord.com/oauth2/authorize?client_id=508968886998269962&scope=bot%20applications.commands&permissions=402738240"
              target="_blank"
              rel="noreferrer"
              className="bg-blue-600 px-8 py-3 rounded-md text-center hover:bg-blue-800 border border-blue-600 hover:border-blue-800"
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
        <AdBanner />
        <section className="flex flex-col">
          <span id="features" className="mx-auto md:text-6xl text-3xl">Features</span>
          <FadeIn>
            <div className="py-24 flex md:flex-row flex-col w-full text-center md:text-left justify-evenly">
              <div className="my-auto flex flex-col max-w-md mx-auto md:mx-0">
                <span className="text-2xl font-bold">Highly Customizable Bind System</span>
                <span className="mt-4 text-gray-300 leading-tight">Create integrations between Roblox groups & Discord servers with our powerful bind engine. You can even use our Lua-like language to mix and match different bind types.</span>
              </div>
              <div>
                <Image src="/rowifi.png" alt="RoWifi Logo" width={300} height={300} />
              </div>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="py-24 flex flex-col w-full text-center md:text-left justify-evenly md:flex-row-reverse">
              <div className="my-auto flex flex-col max-w-md mx-auto md:mx-0">
                <span className="text-2xl font-bold">Link Multiple Accounts</span>
                <span className="mt-4 text-gray-300 leading-tight">Switch seamlessly between any Roblox accounts you own. No need to worry about having only one account across all Discord servers you are a part of.</span>
              </div>
              <div>
                <Image src="/rowifi.png" alt="RoWifi Logo" width={300} height={300} />
              </div>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="py-24 flex md:flex-row flex-col w-full text-center md:text-left justify-evenly">
              <div className="my-auto flex flex-col max-w-md mx-auto md:mx-0">
                <span className="text-2xl font-bold">Smart Functional Roles</span>
                <span className="mt-4 text-gray-300 leading-tight">We understand you are wary about giving management permissions to members in your community. Create the named roles we support and let your members have these roles. Leave the worry to us!</span>
              </div>
              <div>
                <Image src="/rowifi.png" alt="RoWifi Logo" width={300} height={300} />
              </div>
            </div>
          </FadeIn>
        </section>

        <section className="bg-dashboard-dark flex py-6 flex-col">
          <span className="md:text-3xl text-xl text-center lg:text-left mx-auto">The Best Roblox Bot for Discord with even more systems</span>
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

        <section className="flex flex-wrap justify-evenly py-24 space-y-8 md:space-y-0">
          <div className="flex flex-col items-center max-w-xs space-y-4">
            <ChartPieIcon className="w-10 h-10 text-blue-700" />
            <span className="text-xl font-semibold">Analytics</span>
            <span className="text-sm text-center text-gray-300">View how your Roblox group has been growing & meeting milestones on beautiful graphs.</span>
          </div>
          <div className="flex flex-col items-center max-w-xs space-y-4">
            <ShieldCheckIcon className="w-10 h-10 text-blue-700" />
            <span className="text-xl font-semibold">Deny Lists</span>
            <span className="text-sm text-center text-gray-300">Keep your server safe by denying access to certain users or certain groups.</span>
          </div>
          <div className="flex flex-col items-center max-w-xs space-y-4">
            <ClipboardListIcon className="w-10 h-10 text-blue-700" />
            <span className="text-xl font-semibold">Event Logger</span>
            <span className="text-sm text-center text-gray-300">Track what & how many events your members have been hosting.</span>
          </div>
          <div className="flex flex-col items-center max-w-xs space-y-4">
            <CloudIcon className="w-10 h-10 text-blue-700" />
            <span className="text-xl font-semibold">Backups</span>
            <span className="text-sm text-center text-gray-300">Create a backup of all your binds & server configuration and restore it in any server you own.</span>
          </div>
        </section>
      </main>

      <Footer />
    </div >
  );
};

export default Home;
