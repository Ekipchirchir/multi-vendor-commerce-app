import { auth } from "@clerk/nextjs/server";
import { SignIn } from "@clerk/nextjs";
import StoreLayout from "@/components/store/StoreLayout";

export const metadata = {
  title: "NovaCart. - Store Dashboard",
  description: "NovaCart. - Store Dashboard",
};

export default async function RootAdminLayout({ children }) {
  const { userId } = await auth();

  if (!userId) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <SignIn fallbackRedirectUrl="/store" routing="hash" />
      </div>
    );
  }

  return (
    <StoreLayout>
      {children}
    </StoreLayout>
  );
}