import { AuroraBackgroundDemo } from "@/components/common/background";
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <SignUp
        afterSignUpUrl="/explore"
        redirectUrl="/explore"
        appearance={{
          elements: {
            rootBox: "mx-auto",
            card: "bg-white shadow-xl rounded-xl",
            headerSubtitle: "hidden",
          },
        }}
      />
    </div>
  );
}