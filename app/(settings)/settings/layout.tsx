import Link from "next/link";
import ContentWrapper from "../../../components/ContentWrapper";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Link href="/modules" className="mb-4 text-xs text-white/50">
        Back to Modules
      </Link>
      <ContentWrapper
        title="Settings"
        description="Configure your server security settings for maximum protection."
      >
        <div className="mt-8 w-full rounded-md bg-secondary p-8">
          {children}
        </div>
      </ContentWrapper>
    </>
  );
}
