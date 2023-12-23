"use client";
import React from "react";
import Link from "next/link";
import Head from "next/head";
import cookie from "cookie-cutter";
import Image from "next/image";
import logo from "../../public/logo.png";
import { useRouter } from "next/navigation";

function Nav() {
  const router = useRouter();

  // List of routes where you want to hide the navigation
  const routesWithoutNavigation = ['/login', '/signup', '/profile-data-input'];

  const shouldRenderNavigation = !routesWithoutNavigation.includes(router.pathname);
  const onBtnClickHandler = () => {
    cookie.set("token", "");
    cookie.set("userId", "");
    cookie.set("email", "");
    cookie.set("name", "");
    cookie.set("profilePicUrl", "");
  };
  return (

    <>
    {shouldRenderNavigation && }
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
      </Head>
      <nav className="flex justify-around w-auto gap-10 p-5">
        <div>
        <Image
            src={logo}
            alt="logo"
            width={70}
            height={70}
            className="mb-2 mx-auto bg-primary rounded-[10px] p-2 shadow-lg"
          />
          <h2 className="text-accent text-lg font-bold text-center">
            Art Nest
          </h2>
        </div>
      
        <div>
          <Link href="/">Home</Link>
          <Link href="/profile">Profile</Link>
          <button type="button" onClick={onBtnClickHandler}>
            Logout
          </button>
        </div>
      </nav>
    </>
  );
}
export default Nav;
