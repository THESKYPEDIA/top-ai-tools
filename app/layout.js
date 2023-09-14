import "../app/styles/globals.css";

import Navbar from "../app/components/NavBar/navBar";
import Footer from "../app/components/Footer";

import Providers from "./providers";

export const metadata = {
  title: "Top Ai Tools",
  description: "Top Ai Tools",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Providers>


          <Navbar />
          <main>{children}</main>
          {/* <Footer /> */}

        </Providers>
      </body>
    </html>
  );
}
