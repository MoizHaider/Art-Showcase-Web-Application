"use client";
import React from "react";
import { useState } from "react";

function ProfileDataInputSection({ type }) {
  const [profileImg, setProfileImg] = useState()
  const [backgroundImg, setBackgroundImg] = useState()
  const onSubmitHandler = () => {};
  const onProfileImgChangeHandler = (event)=>{
    let img = event.targe.files[0]
    
  }
  const onBackgroundImgChangeHandler = (event)=>{
    let img = event.target.files[0]
    c
  }
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label for="name">Name</label>
          <input type="text" name="name"/>
        </div>
        <div>
          <label for="title">Title</label>
          <input type="text" name="title" />
        </div>
        <div>
          <label>Profile Image</label>
          <input type="file" name="profileImg" onChange = {onProfileImgChangeHandler}/>
          <img src={profileImg}/>
          <label>Background Image</label>
          <input type="file" name="backgroundImg" onChange={onBackgroundImgChangeHandler}/>
          <img src={backgroundImg} />
        </div>
        <label for="about"></label>
        <input type="text" name="about"/>
        <button type="submit">Save</button>
      </form>
    </>
  );
}

export default ProfileDataInputSection;
