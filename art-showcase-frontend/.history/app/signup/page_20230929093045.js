"use client";
import React, { useEffect } from "react";
import { FormEvent } from "react";

const signup = (event) => {
  const email = event.currentTarget.email.value;
  const password = event.currentTarget.password.value;
  const confirmPass = event.currentTarget.confirmPassword.value;
  const graphqlQuery = {
    query: `
              mutation signupUser($email: String!, $password: String!, $confirmPassword: String!){
                  signup(email: $email, password: $password, confirmPassword: $confirmPassword){
                      _id
                      email
                  }
              }
          `,
    variables: {
      email: email,
      password: password,
      confirmPassword: confirmPass,
    },
  };
  fetch("http://localhost:8080/graphql", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(graphqlQuery),
  })
    .then((response) => response.json())
    .then((data) => );
};

function page() {
  const onSubmitHandler = (event) => {
    event.preventDefault();
    signup(event);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label for="email">Email</label>
      <input type="email" name="email" />
      <label for="password">Password</label>
      <input type="password" name="password" />
      <label for="confirmPassword">Confirm Password</label>
      <input type="password" name="confirmPassword" />
      <button type="submit">Signup</button>
    </form>
  );
}

export default page;
