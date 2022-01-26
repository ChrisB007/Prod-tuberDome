import React from 'react';
import Link from 'next/link';
import { session, useSession } from 'next-auth/react';

function Logo() {
  const user = session.user;
  return (
    <div className="inline-flex h-5">
      <Link href={user ? '/dashboard' : '/'}>
        <div className="cursor-pointer inline-flex ">
          <>
            <span className="sr-only">TuberDome</span>

            <a>
              <svg
                className="logosvg h-15 w-20 text-red-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {' '}
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />{' '}
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
              </svg>

              <p className="logo mb-4">Dome</p>
            </a>
          </>
        </div>
      </Link>
    </div>
  );
}

export default Logo;
