import "./globals.css";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";

export function Layout() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
