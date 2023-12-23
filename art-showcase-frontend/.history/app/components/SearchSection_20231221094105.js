"use client";
import React from "react";
import SearchResult from "./SearchResult";

export default function SearchSection() {
  const onSubmitHandler = () => {};
  return (
    // SearchSection.js
    <>
      <form onSubmit={onSubmitHandler} className="mb-4 flex gap-7">
        <input
          type="text"
          className="w-full border px-2 py-1 rounded-full py-2"
          placeholder="Search"
        />
        <button
          type="submit"
          className="bg-primary text-text px-4 py-1 rounded-full "
        >
          Search
        </button>
      </form>
      <SearchResult />
    </>
  );
}
