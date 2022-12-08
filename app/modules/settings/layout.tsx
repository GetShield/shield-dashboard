import Button from "../../Button";
import ContentWrapper from "../../ContentWrapper";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ContentWrapper
      title="Settings"
      description="Configure your server security settings for maximum protection."
    >
      <div className="mt-8 w-full"></div>
    </ContentWrapper>
  );
}
