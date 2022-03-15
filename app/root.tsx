import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import styles from "./tailwind.css";

export const meta: MetaFunction = () => {
  return {
    title: "RoWifi - The 2nd Gen Roblox-Discord Verification Bot",
    description:
      "RoWifi is a Roblox-Discord Verification Bot offering a seamless integration between your Roblox group and your Discord server.",
    "og:title": "RoWifi",
    "og:description":
      "RoWifi is a Roblox-Discord Verification Bot offering a seamless integration between your Roblox group and your Discord server.",
    "og:url": "https://rowifi.xyz",
    "og:image": "https://rowifi.xyz/rowifi_banner.jpg",
  };
};

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter&display=swap",
    },
    { rel: "stylesheet", href: styles },
    {
      rel: "preload",
      href: "https://BTXZGJ6Y7A-dsn.algolia.net",
    },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
