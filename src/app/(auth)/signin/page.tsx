import { FieldDescription } from "@/components/ui/field";
import { SigninForm } from "./signin-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function SigninPage() {
  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle>Welcome back</CardTitle>
        <CardDescription>Login with your email & password</CardDescription>
      </CardHeader>
      <CardContent>
        <SigninForm />
      </CardContent>
      <CardFooter className="flex justify-center">
        <FieldDescription>
          Don&apos;t have an account? <Link href="/signup">Sign up</Link>
        </FieldDescription>
      </CardFooter>
    </Card>
  );
}
