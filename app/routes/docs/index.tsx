import Image from "remix-image";
import { ExternalLinkIcon, CheckIcon, XIcon } from "@heroicons/react/outline";
import { Layout as DocsLayout } from "../../components/Docs";
import { changelogDate } from "../../utilities/date";

export default function DocsHome() {
  return (
    <>
      <h1>What is RoWifi?</h1>
      <p>
        RoWifi is a Roblox-Discord Verification Bot offering a seamless
        integration between your Roblox group and your Discord server.
        RoWifi&apos;s powerful bind system lets you quickly sync your Roblox
        ranks and Discord roles. Under the hood, RoWifi uses Rust &amp; AWS to
        allow it to deliver instant responses for tens of thousands of commands
        from thousands of servers.
      </p>
      <a
        href="https://discord.com/oauth2/authorize?client_id=508968886998269962&scope=bot%20applications.commands&permissions=402738240"
        target="_blank"
        rel="noreferrer"
      >
        <div className="inline-flex mx-auto items-center bg-[#212121] hover:bg-hover-dark rounded-lg space-x-3 pl-4 pr-6 cursor-pointer">
          <Image src="/rowifi.png" alt="RoWifi Logo" height={75} width={75} />
          <span className="text-white">
            Power up your server today for free
          </span>
          <ExternalLinkIcon className="w-5 h-5 text-white" />
        </div>
      </a>
      <h2>What&apos;s new?</h2>
      <div className="py-2 flex flex-col">
        <span className="text-xl font-semibold">Version 3.1.2</span>
        <span className="text-gray-400 opacity-80 text-sm mt-2">
          {changelogDate("2021-09-12")}
        </span>
        <div className="list-none relative">
          <li className="before:content-['-'] before:absolute before:left-1 ml-6 text-gray-300">
            Update <code>twilight-rs</code> to v0.6
          </li>
        </div>
        {/* <div className="text-base text-blue-500 flex items-center">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-0.5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </div> */}
      </div>
      <h2>Tiers Comparison</h2>
      <div>
        <table className="!text-center">
          <thead>
            <tr>
              <th className="text-2xl">Feature</th>
              <th>
                <div className="flex flex-col">
                  <span className="w-full">Normal</span>
                  <span className="font-medium text-gray-400">
                    Free to get started
                  </span>
                </div>
              </th>
              <th>
                <div className="flex flex-col">
                  <span>Alpha Tier</span>
                  <span className="font-medium text-gray-400">
                    $1 per month
                  </span>
                </div>
              </th>
              <th>
                <div className="flex flex-col">
                  <span>Beta Tier</span>
                  <span className="font-medium text-gray-400">
                    $5 per month
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="!border-b-0">
              <td>Rankbinds</td>
              <td>
                <CheckIcon className="text-green-600 h-6 w-6 block mx-auto" />
              </td>
              <td>
                <CheckIcon className="text-green-600 h-6 w-6 block mx-auto" />
              </td>
              <td>
                <CheckIcon className="text-green-600 h-6 w-6 block mx-auto" />
              </td>
            </tr>
            <tr className="!border-b-0">
              <td>Groupbinds</td>
              <td>
                <CheckIcon className="text-green-600 h-6 w-6 block mx-auto" />
              </td>
              <td>
                <CheckIcon className="text-green-600 h-6 w-6 block mx-auto" />
              </td>
              <td>
                <CheckIcon className="text-green-600 h-6 w-6block mx-auto" />
              </td>
            </tr>
            <tr className="!border-b-0">
              <td>Custombinds</td>
              <td>
                <CheckIcon className="text-green-600 h-6 w-6 block mx-auto" />
              </td>
              <td>
                <CheckIcon className="text-green-600 h-6 w-6 block mx-auto" />
              </td>
              <td>
                <CheckIcon className="text-green-600 h-6 w-6 block mx-auto" />
              </td>
            </tr>
            <tr className="!border-b-0">
              <td>Assetbinds</td>
              <td>
                <CheckIcon className="text-green-600 h-6 w-6 block mx-auto" />
              </td>
              <td>
                <CheckIcon className="text-green-600 h-6 w-6 block mx-auto" />
              </td>
              <td>
                <CheckIcon className="text-green-600 h-6 w-6 block mx-auto" />
              </td>
            </tr>
            <tr className="!border-b-0">
              <td>Blacklists</td>
              <td>
                <CheckIcon className="text-green-600 h-6 w-6 block mx-auto" />
              </td>
              <td>
                <CheckIcon className="text-green-600 h-6 w-6 block mx-auto" />
              </td>
              <td>
                <CheckIcon className="text-green-600 h-6 w-6 block mx-auto" />
              </td>
            </tr>
            <tr className="!border-b-0">
              <td>Log Channels</td>
              <td>
                <CheckIcon className="text-green-600 h-6 w-6 block mx-auto" />
              </td>
              <td>
                <CheckIcon className="text-green-600 h-6 w-6 block mx-auto" />
              </td>
              <td>
                <CheckIcon className="text-green-600 h-6 w-6 block mx-auto" />
              </td>
            </tr>
            <tr className="!border-b-0">
              <td>Auto Detection</td>
              <td>
                <XIcon className="text-red-600 h-6 w-6 block mx-auto" />
              </td>
              <td>Limited to 1 server</td>
              <td>
                <CheckIcon className="text-green-600 h-6 w-6 block mx-auto" />
              </td>
            </tr>
            <tr className="!border-b-0">
              <td>Functional Roles</td>
              <td>Inbuilt</td>
              <td>Custom (Limited to 1 server)</td>
              <td>Custom</td>
            </tr>
            <tr className="!border-b-0">
              <td>Analytics</td>
              <td>
                <XIcon className="text-red-600 h-6 w-6 block mx-auto" />
              </td>
              <td>
                <XIcon className="text-red-600 h-6 w-6 block mx-auto" />
              </td>
              <td>
                <CheckIcon className="text-green-600 h-6 w-6 block mx-auto" />
              </td>
            </tr>
            <tr className="!border-b-0">
              <td>Backups</td>
              <td>
                <XIcon className="text-red-600 h-6 w-6 block mx-auto" />
              </td>
              <td>
                <XIcon className="text-red-600 h-6 w-6 block mx-auto" />
              </td>
              <td>
                <CheckIcon className="text-green-600 h-6 w-6 block mx-auto" />
              </td>
            </tr>
            <tr className="!border-b-0">
              <td>Events</td>
              <td>
                <XIcon className="text-red-600 h-6 w-6 block mx-auto" />
              </td>
              <td>
                <XIcon className="text-red-600 h-6 w-6 block mx-auto" />
              </td>
              <td>
                <CheckIcon className="text-green-600 h-6 w-6 block mx-auto" />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <a
                  href="https://discord.com/oauth2/authorize?client_id=508968886998269962&scope=bot%20applications.commands&permissions=402738240"
                  target="_blank"
                  rel="noreferrer"
                  className="!text-gray-200 bg-blue-600 px-4 mx-auto py-2 rounded-lg"
                >
                  Add <span className="hidden md:inline">for free</span>
                </a>
              </td>
              <td>
                <a
                  href="https://www.patreon.com/join/rowifi/checkout?rid=4014582"
                  target="_blank"
                  rel="noreferrer"
                  className="!text-gray-200 bg-blue-600 px-4 mx-auto py-2 rounded-lg"
                >
                  Get <span className="hidden md:inline">Alpha</span>
                </a>
              </td>
              <td>
                <a
                  href="https://www.patreon.com/join/rowifi/checkout?rid=4656839"
                  target="_blank"
                  rel="noreferrer"
                  className="!text-gray-200 bg-blue-600 px-4 mx-auto py-2 rounded-lg"
                >
                  Get <span className="hidden md:inline">Beta</span>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
