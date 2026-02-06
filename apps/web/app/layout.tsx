import { ClerkProvider } from "@clerk/nextjs";
import { config } from "@repo/config";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const publishableKey = config.clerkPublishableKey;

  if (!publishableKey) {
    console.warn(
      "Clerk publishable key missing. Set NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY to enable auth.",
    );
    return (
      <html>
        <body className="h-screen flex flex-col items-center justify-center">{children}</body>
      </html>
    );
  }

  return (
    <ClerkProvider publishableKey={publishableKey}>
      <html>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
