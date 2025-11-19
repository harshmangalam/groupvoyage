import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SignupForm } from "./signup-form";
import { FieldDescription } from "@/components/ui/field";
import Link from "next/link";

export default function SignupPage() {
  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle>Create your account</CardTitle>
        <CardDescription>
          Enter your email below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SignupForm />
      </CardContent>
      <CardFooter className="flex justify-center">
        <FieldDescription>
          Already have an account? <Link href="/signin">Sign in</Link>
        </FieldDescription>
      </CardFooter>
    </Card>
  );
}
