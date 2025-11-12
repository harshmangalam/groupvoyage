import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { OnboardingForm } from "./onboarding-form";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen py-16 px-4 md:px-6">
      <Card className="w-full max-w-xl">
        <CardHeader>
          <CardTitle>Create your group</CardTitle>
          <CardDescription>
            Share your group details and connect with your community. We just
            need a few details to get started.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <OnboardingForm />
        </CardContent>
      </Card>
    </div>
  );
}
