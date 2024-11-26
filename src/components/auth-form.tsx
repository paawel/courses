import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

const AuthForm = ({ type }: {
    type: "signUp" | "logIn"
}) => {
    return (
        <form>
            <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email"></Input>
            </div>

            <div className="mb-4 mt-2 space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password"></Input>
            </div>

            <Button>
                {
                    type === "logIn" ? "Log In" : "Sign Up"
                }
            </Button>
        </form>
    )
}

export default AuthForm