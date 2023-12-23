"use client"
import React from "react";
import SearchResult from "./SearchResult";

export default function SearchSection() {
    const onSubmitHandler = ()=>{

    }
  return (
// SearchSection.js
<div className="lg:col-span-1 sticky  h-screen p-4 bg-background w-[400px]">
  <form onSubmit={onSubmitHandler} className="mb-4 flex gap-7">
    <input
      type="text"
      className="w-full border px-2 py-1 rounded-full p-2"
      placeholder="Search"
    />
    <button
      type="submit"
      className="bg-primary text-text px-4 py-1 rounded-full ml-2 "
    >
      Search
    </button>
  </form>
  <SearchResult />
</div>
  );
}
