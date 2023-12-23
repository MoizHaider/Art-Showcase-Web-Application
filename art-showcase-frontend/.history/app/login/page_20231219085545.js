"use client";
import React from "react";
import cookie from "cookie-cutter";
import { useRouter } from "next/navigation";
import Image from "next/image"
import logo from "../../public/logo.png"
import flowerCircle from "../../public/flowerCircle.png"

const loginFun = (event) => {
  const email = event.currentTarget.email.value;
  const password = event.currentTarget.password.value;
  const graphqlQuery = {
    query: `
              query loginUser($email: String!, $password: String!){
                  login(email: $email, password: $password){
                      token
                      userData{
                        _id
                        name
                        profilePicUrl                    
                      }
                  }
              }
          `,
    variables: {
      email: email,
      password: password,
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
    .then((resData) => {
      cookie.set("token", resData.data.login.token);
      cookie.set("userId", resData.data.login.userData._id);
      cookie.set("email", email);
      cookie.set("name", resData.data.login.userData.name);
      cookie.set("profilePicUrl", resData.data.login.userData.profilePicUrl);

      //for auto logout
      /*
        onst remainingMilliseconds = 60 * 60 * 1000;
        const expiryDate = new Date(
          new Date().getTime() + remainingMilliseconds
        );
        localStorage.setItem('expiryDate', expiryDate.toISOString());
        this.setAutoLogout(remainingMilliseconds);
      */
    });
};

function page() {
  const router = useRouter();
  const onSubmitHandler = (event) => {
    event.preventDefault();
    loginFun(event);
    router.replace("/");
  };
  return (
// Login Form
<form
  onSubmit={onSubmitHandler}
  className="flex justify-center items-center h-screen"
>
  <div className="grid bg-gradient-to-r from-purple-300 via-pink-400 to-red-400 p-20 h-[60%] justify-center items-center rounded-[20px]">
    <label className="text" htmlFor="email">
      Email
    </label>
    <input
      type="email"
      name="email"
      className="bg-background text text-primary p-2 rounded"
    />
    <label className="text" htmlFor="password">
      Password
    </label>
    <input
      type="password"
      name="password"
      className="bg-background text text-primary p-2 rounded"
    />
    <button
      type="submit"
      className="mt-10 bg-accent text-primary p-2 rounded hover:bg-secondary"
    >
      Login
    </button>
  </div>
</form>

// Signup Form
<form
  onSubmit={onSubmitHandler}
  className="flex justify-center items-center h-screen"
>
  <div className="grid gap-y-1 bg-gradient-to-r from-purple-300 via-pink-400 to-red-400 p-20 h-[80%] max-h-[400px] justify-center items-center rounded-[20px]">
    <label className="text" htmlFor="email">
      Email
    </label>
    <input
      type="email"
      name="email"
      className="bg-background text text-primary p-2 rounded"
    />
    <label className="text" htmlFor="password">
      Password
    </label>
    <input
      type="password"
      name="password"
      className="bg-background text text-primary p-2 rounded"
    />
    <label className="text" htmlFor="confirmPassword">
      Confirm Password
    </label>
    <input
      type="password"
      name="confirmPassword"
      className="bg-background text text-primary p-2 rounded"
    />
    <button
      type="submit"
      className="mt-10 bg-accent text-primary p-2 rounded hover:bg-secondary"
    >
      Signup
    </button>
  </div>
</form>
div
  );
}

export default page;
