import "@styles/global.css";
import Starfield from "@components/Starfield";
import LeftNavbar from "@components/LeftNav";
import { SpeedInsights } from "@vercel/speed-insights/next";
export const metadata = {
  title: "Utsav's Portfolio",
  description: "Thanks for visiting my portfolio!",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <script
          src="https://kit.fontawesome.com/429c6af039.js"
          crossorigin="anonymous"
        ></script>
        <link
          rel="stylesheet"
          href="https://unpkg.com/kursor/dist/kursor.css"
        ></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className="wholeBody">
        <Starfield />
        <img src="./Logo.svg" className="logo" />
        <LeftNavbar />
        <div>
          <main>
            {children}
            <SpeedInsights />
          </main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
