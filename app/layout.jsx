import "@styles/global.css";
import Starfield from "@components/Starfield";
import LeftNavbar from "@components/LeftNav";
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
      </head>
      <body className="wholeBody">
        <Starfield />
        <img src="./Logo.svg" className="logo" />
        <LeftNavbar />
        <div>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
