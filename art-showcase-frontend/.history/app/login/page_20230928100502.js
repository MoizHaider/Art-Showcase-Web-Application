"use client"
import React from 'react'

function login() {
  return (
    <>
    <form>
    <label for="email">Email</label>
        <input type = "email" name = "email"/>
        <label for="password">Password</label>
            <input type="password" name="password"/>

    </form>
    </>
  )
}

export default login