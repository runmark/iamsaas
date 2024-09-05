
import { signIn } from "@/auth";

export default function SignInButton() {
    return (
        <form
            action={async () => {
                "use server";
                // You can pass a provider to the signIn function 
                // which will attempt to login directly with that provider
                await signIn();
            }}>
            <button type="submit">Sign In</button>
        </form>
    );
}