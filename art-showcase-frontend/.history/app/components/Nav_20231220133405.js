"use client";
import React from "react";
import Link from "next/link";
import Head from "next/head";
import cookie from "cookie-cutter";
import Image from "next/image";
import logo from "../../public/logo.png";
import { usePathname } from 'next/navigation'

function Nav() {
  const pathName = usePathname()

  // List of routes where you want to hide the navigation
  const routesWithoutNavigation = ["/login", "/signup", "/profile-data-input"];
  console.log("pathName ", pathName)
  const shouldRenderNavigation = !routesWithoutNavigation.includes(
    pathName
  );
  const onBtnClickHandler = () => {
    cookie.set("token", "");
    cookie.set("userId", "");
    cookie.set("email", "");
    cookie.set("name", "");
    cookie.set("profilePicUrl", "");
  };
  return (
    <>
      {shouldRenderNavigation && (
        <>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0, viewport-fit=cover"
            />
          </Head>
          <nav className="flex justify-between w-auto gap-10 p-5 h-20px">
            <div className="flex gap-x-4 items-center ml-4">
              <Image
                src={logo}
                alt="logo"
                width={50}
                height={50}
                className="mx-auto bg-primary rounded-[10px] shadow-lg border-1 border-solid border-text p-2"
              />
              <h2 className="text-accent text-lg font-bold text-center ">
                Art Nest
              </h2>
            </div>

            <div className="flex items-center">
              <Link href="/" className = "mr-4">Home</Link>
              <Link href="/profile" className = "mr-4">Profile</Link>
              <button type="button" className = "mr-4 text-primary bg-accent" onClick={onBtnClickHandler}>
                Logout
              </button>
            </div>
          </nav>
        </>
      )}
    </>
  );
}
export default Nav;
