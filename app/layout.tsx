import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts"
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
