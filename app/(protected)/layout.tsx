import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    RedirectToSignIn,
} from "@clerk/nextjs";

export default function ProtectedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ClerkProvider>
            <SignedIn>
                {children}
            </SignedIn>
            <SignedOut>
                <RedirectToSignIn />
            </SignedOut>
        </ClerkProvider>
    );
}
