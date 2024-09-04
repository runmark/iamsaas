
import NextAuth from "next-auth";
import github from "next-auth/providers/github";
import google from "next-auth/providers/google";
import zitadel from "next-auth/providers/zitadel";

export const {
    handlers,
    auth,
    signIn,
    signOut,
} = NextAuth({
    providers: [google, zitadel, github],
});