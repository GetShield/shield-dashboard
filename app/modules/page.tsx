import Button from "../Button";

export default function Home() {
  return (
    <div className="h-full w-full overflow-hidden">
      <h1 className="text-4xl text-white">Welcome to your Shield Dashboard</h1>
      <p className="mb-4 text-white/50">
        Shield is a Home Security System, enabling web3 communities to grow
        safely and securely.
      </p>
      <div className="flex items-center space-x-4">
        <Button intent={"primary"} title={"Bot Risks"} />
        <Button intent={"secondary"} title={"Server Risks"} />
        <Button intent={"secondary"} title={"User Risks"} />
      </div>
      <div className="mt-8 h-full w-full">
        <div className="h-full w-full rounded-md bg-[#100B2E] p-8">
          <h1 className="text-2xl text-white">Active Server Bots</h1>
          <div className="mt-8 grid grid-cols-6 gap-8">
            <div className="aspect-square w-full rounded-md bg-white p-8" />
            <div className="aspect-square w-full rounded-md bg-white p-8" />
            <div className="aspect-square w-full rounded-md bg-white p-8" />
          </div>
        </div>
      </div>
    </div>
  );
}
