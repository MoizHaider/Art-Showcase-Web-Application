"use client";
import React from "react";

function ProfileDataInputSection({ type }) {
  const onSubmitHandler = () => {};
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label for="name">Name</label>
          <input type="text" name="name" value="" />
        </div>
        <div>
          <label for="title">Title</label>
          <input type="text" name="title" value="" />
        </div>
         <div>
          
         </div>
        

        <label for="about"></label>
        <input type="text" name="about" value="" />
        <button type="submit">Save</button>
      </form>
    </>
  );
}

export default ProfileDataInputSection;
