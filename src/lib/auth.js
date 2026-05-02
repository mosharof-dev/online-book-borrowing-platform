import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";


const client = new MongoClient(process.env.MONGODB_URL);
const db = client.db("online-book-borrowing-platform");


export const auth = betterAuth({
    database: mongodbAdapter(db,{
        client,
    }),
// Email and Password authentication
    emailAndPassword: { 
        enabled: true, 
      },
// Google authentication
      socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID , 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET , 
        },   
    },
});