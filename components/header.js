import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";
import styles from "./header.module.css";

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
      <div className={`${styles.signedInStatus} bg-gray-600`}>
        <p
          className={`nojs-show ${
            !session && loading ? styles.loading : styles.loaded
          }`}
        >
          {!session && (
            <>
              <span className={styles.notSignedInText}>
                You are not signed in
              </span>
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
              {session.user.image && (
                <span
                  style={{ backgroundImage: `url(${session.user.image})` }}
                  className={styles.avatar}
                />
              )}
              <span className={styles.signedInText}>
                <small>Signed in as</small>
                <br />
                <strong>{session.user.email || session.user.name}</strong>
              </span>
              <a
                href={`/api/auth/signout`}
                className={styles.button}
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
      <nav className="nav-header bg-gradient-to-r from-gray-500 via-gray-200 to-gray-800  flex m-auto justify-start items-center ml-10 mt-4">
        <ul className={styles.navItems}>
          <li className={`${styles.navItem} border-r-2 `}>
            <Link href="/">
              <a className="p-2 text-white">Why sponsor here?</a>
            </Link>
          </li>
          <li className={`${styles.navItem} border-r-2 `}>
            <Link href="/client">
              <a className="p-2 text-white">For Creators</a>
            </Link>
          </li>
          <li className={`${styles.navItem} border-r-2 `}>
            <Link href="/server">
              <a className="p-2 text-white">For Sponsors</a>
            </Link>
          </li>
          <li className={`${styles.navItem} `}>
            <Link href="/protected">
              <a className="p-2 text-white">Contact Us</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
