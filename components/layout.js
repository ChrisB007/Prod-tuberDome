import { useRouter } from "next/router";
import React from "react";
import { useEffect, useState } from "react";

import supabase from "../utils/supabaseClient";
import Footer from "./footer";
import Navbar from "./Navbar";

function Layout({ children }) {
  const [authenticated, setAuthenticated] = useState("User is not authenticated");
  const router = useRouter();

  useEffect(() => {
    const { data: authListener, error } = supabase.auth.onAuthStateChange((event, session) => {
      if (error) {
        throw new Error(error);
      }
      handleAuthChange(event, session);
      if (event === "SIGNED_IN") {
        setAuthenticated("User is authenticated");
        router.push("/protected");
      }
      if (event === "SIGNED_OUT") {
        setAuthenticated("User is not authenticated");
        router.push("/"); // redirect to home page for try out
      }
    });
    checkUser();
    return () => {
      authListener.unsubscribe();
    };
  }, []);

  //Adding and removing cookie based on user authentication state
  async function handleAuthChange(event, session) {
    fetch("/api/auth", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({ event, session }),
      credentials: "same-origin",
    });
  }

  async function checkUser() {
    const user = await supabase.auth.user();
    if (user) {
      setAuthenticated("authenticated");
    }
  }

  return (
    <div>
      <div>
        <Navbar authenticated={authenticated} />
      </div>
      <div>
        {children}
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
