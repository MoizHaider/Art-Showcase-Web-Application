"use client";
import React from "react";
import Link from "next/link";
import Head from "next/head";

function Nav() {
  const onBtnClickHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
  };
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
      </Head>
      <nav className="flex justify-center w-auto max-w-[100vw] gap-10 p-5 bg-red-400 text-white">
        <Link href="/">Home</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/admin">Admin</Link>
        <Link href="/login">Login</Link>
        <Link href="/signup">Signup</Link>
        <button type="button" onClick={onBtnClickHandler}>
          Logout
        </button>
      </nav>
    </>
  );
}
export default Nav;