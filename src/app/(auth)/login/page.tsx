import AuthForm from "@/components/auth-form"
import H1 from "@/components/h1"
import Link from "next/link"

const Page = () => {
  return (
    <main>
      <H1 className="mb-5 text-center">Log In</H1>

      <AuthForm type="logIn"/>

      <p className="mt-6 text-sm text-zinc-500">
        No account yet?
        <Link href="/signup" 
              className="font-medium">
          SignUp
        </Link>
      </p>
    </main>
  )
}

export default Page