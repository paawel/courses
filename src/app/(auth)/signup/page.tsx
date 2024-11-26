import AuthForm from "@/components/auth-form"
import H1 from "@/components/h1"
import Link from "next/link"

const Page = () => {
    return (
        <main>
            <H1 className="mb-5 text-center">Sign In</H1>

            <AuthForm type="signUp"/>

            <p className="mt-6 text-sm text-zinc-500">
                Already have an account?
                <Link href="/login"
                    className="font-medium">
                    Login
                </Link>
            </p>
        </main>
    )
}

export default Page