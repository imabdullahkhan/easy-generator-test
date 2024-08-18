// authService.ts

import { LoginFormValues } from "../interfaces/LoginForm";
import { SignupFormValues } from "../interfaces/SignupForm";

export const loginUser = async (data: LoginFormValues) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_PATH}/api/users/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Login failed");
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    const errorMessage = (error as Error).message || "Login failed";
    throw new Error(errorMessage);
  }
};

export const signupUser = async (data: SignupFormValues) => new Promise(async (resolve, reject) => {
  try {
   

    const response = await fetch(`${process.env.REACT_APP_API_BASE_PATH}/api/users/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Signup failed");
    }

    const responseData = await response.json();
    return resolve(responseData);
  } catch (error) {
    const errorMessage = (error as Error).message || "Signup failed";
    return reject(new Error(errorMessage));
  }
})
