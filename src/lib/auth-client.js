import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: process.env.BETTER_AUTH_URL
})
export const loginWithGoogle = async() =>{
    const data = await authClient.signIn.social({
    provider: "google",
  });
  console.log(data, 'data');
  }
export const { signIn, signUp, signOut, useSession } = authClient;
