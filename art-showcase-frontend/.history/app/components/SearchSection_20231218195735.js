"use client"
import React from "react";

export default function SearchSection() {
    const onSubmitHandler = ()=>{
        
    }
  return (
    <div>
      <form onSubmit = {onSubmitHandler}>
        <input type="text" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
