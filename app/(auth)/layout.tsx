import { AuroraBackgroundDemo } from "@/components/common/background";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen">
            <AuroraBackgroundDemo>
                {children}
            </AuroraBackgroundDemo>
        </div>
    );
}
