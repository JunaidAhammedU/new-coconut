import { AuroraBackgroundDemo } from "@/components/common/background";
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <SignUp
      appearance={{
        elements: {
          rootBox: "mx-auto",
          card: "bg-white shadow-xl rounded-xl",
          headerSubtitle: "hidden",
        },
      }}
    />
  );
}
