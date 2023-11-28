"use client"
import React from 'react'
import {useState, useEffect} from "react"

function Load() {
    const [btnPressed, setBtnPressed] = useState(0);
    const [loadedPosts, setLoadedPosts] = useState(null);
    const loadPosts = 1;
    const onBtnClickHandler = ()=>{
        setBtnPressed(val=>{
          val+1;
        })
    }
    useEffect(()=>{
      console.log("Btn pressed")
    }, [btnPressed])
  return (
    <>
      <button type="button" onClick={onBtnClickHandler}>More</button>
      <div>
        Newly Loaded Posts
      </div>
    </>
  )
}

export default LoadBtn