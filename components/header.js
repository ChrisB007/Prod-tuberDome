import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";
import styles from "./header.module.css";
import Image from "next/image";
import Logo from "./Logo";

// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header() {
  const [session, loading] = useSession();

  return (
    <header>
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <div
        className={`${styles.signedInStatus} bg-gradient-to-r from-white via-gray-200 to-gray-500 shadow overflow-hidden`}
      >
        <p
          className={`nojs-show ${
            !session && loading ? styles.loading : styles.loaded
          }`}
        >
          {!session && (
            <>
              {/* <Logo /> */}
              <img className="logo" src="/images/berdome.png" />

              <a
                href={`/api/auth/signin`}
                className={styles.buttonPrimary}
                onClick={(e) => {
                  e.preventDefault();
                  signIn();
                }}
              >
                Sign in
              </a>
            </>
          )}
          {session && (
            <>
              {/* <Logo /> */}
              <img className="logo" src="/images/berdome.png" />

              <a
                href={`/api/auth/signout`}
                className={styles.buttonPrimary}
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Sign out
              </a>
            </>
          )}
        </p>
      </div>
      <nav className="nav-header bg-gray-400  flex m-auto justify-end items-center pt-3 ml-10 mt-4">
        <ul className={styles.navItems}>
          <li className={`${styles.navItem} border-r-2 `}>
            <Link href="/sponsors">
              <a className="text-sm p-2 md:text-lg text-white">For Sponsors</a>
            </Link>
          </li>
          <li className={`${styles.navItem} border-r-2 `}>
            <Link href="/creators">
              <a className="text-sm md:text-lg p-2 text-white">For Creators</a>
            </Link>
          </li>
          <li className={`${styles.navItem} `}>
            <Link href="/contact">
              <a className="text-sm md:text-lg p-2 text-white">Contact Us</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
