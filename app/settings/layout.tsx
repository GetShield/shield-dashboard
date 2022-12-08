import Button from "../Button";
import ContentWrapper from "../ContentWrapper";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <p className="mb-4 text-xs text-white/50">Back to Modules</p>
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
