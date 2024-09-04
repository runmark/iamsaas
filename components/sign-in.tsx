
import { signIn } from "@/auth";

export default function SignIn() {
    return (
        <form
            action={async () => {
                "use server";
                await signIn();
            }}>
            <button type="submit">Sign In</button>
        </form>
    );
}