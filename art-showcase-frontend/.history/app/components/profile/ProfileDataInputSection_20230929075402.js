"use client";
import React from "react";

function ProfileDataInputSection({type}) {

  return (
    <>
      <form>
        <label for = "name">Name</label>
        <input type="text" name="name" value=""/>
        <label for="title">Title</label>
        label
        <input type="text" name = "title" value=""/>
        <label for="about"></label>
        <input type="text" name="about" value=""/>
        <button type="submit">Save</button>
      </form>
    </>
  );
}

export default ProfileDataInputSection;
