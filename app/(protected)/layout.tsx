import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
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
        <div className="flex flex-col min-h-screen">
            <ClerkProvider>
                <SignedIn>
                    <Header />
                    <main className="flex-1">{children}</main>
                    <Footer />
                </SignedIn>
                <SignedOut>
                    <RedirectToSignIn />
                </SignedOut>
            </ClerkProvider>
        </div>
    );
}
