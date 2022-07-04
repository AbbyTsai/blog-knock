import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import {Link} from "@remix-run/react";

import styles from "./styles/app.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }]
}

export const meta = () => ({
  charset: "utf-8",
  title: "KNOCK with Thanks ❤!",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="flex fixed top-0 w-screen ">
        <div className="text-xs w-1/3 h-8 bg-purple-200 text-center">
            <span className="absolute rotate-45 top-4 border-t-8 border-purple-500 font-black">KNOCK!</span>
            <span className="absolute rotate-45 top-14 -translate-x-10 border-b-8 border-purple-200">KNOCK</span>
            <span className="absolute -rotate-45 top-4 -translate-x-10 border-t-8 border-purple-900">KNOCK</span>
            <span className="absolute -rotate-45 top-14 border-b-8 border-purple-300">KNOCK</span>
            <span className="absolute flex h-5 w-5 left-1/4 top-4 -translate-x-10">
              <span className="animate-ping absolute h-8 w-8 bg-purple-800 rounded-full opacity-90 ">
                <span className="rounded-full h-5 w-5 bg-purple-900"></span>
              </span>
            </span>
        </div>
        <div className="w-1/3 h-8 bg-purple-300"><Link to="/blog"><button className="w-full font-black">blog</button></Link></div>
        <div className="w-1/3 h-8 bg-purple-400 "><Link to="/"><button className="w-full font-black">about</button></Link></div>
      </div>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        
      </body>
    </html>
  );
}




