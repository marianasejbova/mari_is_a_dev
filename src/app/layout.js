import "./globals.css";

import Nav from "./components/Nav/Nav";

import { ViewTransitions } from "next-view-transitions";

export const metadata = {
  title: "Mariana Šejbová | Portfolio",
  description: "Digital experiences & web development by Mariana Šejbová",
  icons: {
    icon: [
      { url: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' },
      { url: '/favicon.svg', sizes: '16x16', type: 'image/svg+xml' }
    ],
    shortcut: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.svg?v=2" type="image/svg+xml" />
          <link rel="icon" href="/favicon.svg?v=2" sizes="any" />
        </head>
        <body>
          <Nav />
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
