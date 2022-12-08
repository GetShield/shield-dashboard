import Button from "../Button";
import ContentWrapper from "../ContentWrapper";

export default function Home() {
  return (
    <ContentWrapper
      title="Welcome to your Shield Dashboard"
      description="Shield is a Home Security System, enabling web3 communities to grow safely and securely."
    >
      <div className="flex items-center space-x-4">
        <Button intent={"primary"} title={"Bot Risks"} />
        <Button intent={"secondary"} title={"Server Risks"} />
        <Button intent={"secondary"} title={"User Risks"} />
      </div>
      <div className="mt-8 w-full">
        <div className="h-full w-full rounded-md bg-[#100B2E] p-8">
          <h1 className="text-2xl text-white">Active Server Bots</h1>
          <div className="mt-8 grid grid-cols-6 gap-8">
            <div className="aspect-square w-full rounded-md bg-white p-8" />
            <div className="aspect-square w-full rounded-md bg-white p-8" />
            <div className="aspect-square w-full rounded-md bg-white p-8" />
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}
