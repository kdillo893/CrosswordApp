import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
} from "@remix-run/react";
import React from "react";


import appStylesHref from "./app.css";
import Puzzle from "./lib/puzzle";

export const links: LinksFunction = () => [
  {rel: "stylesheet", href: appStylesHref },
]

export default function App() {
  return (
    <html>
      <head>
        <link
          rel="icon"
          href="data:image/x-icon;base64,AA"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <h1>Hello world!</h1>
        <br/>

        <Puzzle />

        <Outlet />

        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

