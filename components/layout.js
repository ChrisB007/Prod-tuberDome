import React from "react";
import Footer from "./Footer";
import Header from "../components/header";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        {children}
        <Footer />
      </div>
    </div>
  );
}

export default Layout;

// import Footer from '../components/footer'

// export default function Layout ({children}) {
//   return (
//     <>
//       <Header/>
//       <main>
//         {children}
//       </main>
//       <Footer/>
//     </>
//   )
// }
