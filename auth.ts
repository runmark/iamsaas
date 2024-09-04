import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";
import github from "next-auth/providers/github";
import google from "next-auth/providers/google";
import zitadel from "next-auth/providers/zitadel";
import { db } from "./drizzle.config";


export const {
    handlers,
    auth,
    signIn,
    signOut,
} = NextAuth({
    adapter: DrizzleAdapter(db),
    providers: [google, zitadel, github],
});