import Button from "../Button";
import ContentWrapper from "../ContentWrapper";

export default function Home() {
  return (
    <ContentWrapper
      title="Shield Security Modules"
      description="Configure your server security settings for maximum protection."
    >
      <div className="mt-8 w-full">
        <div className="w-full">
          <div className="mt-8 grid h-full grid-cols-3 grid-rows-2 gap-8">
            <div className="flex h-64 w-full flex-col rounded-md bg-secondary p-8">
              <p className="mb-6 text-lg font-medium text-white">
                Simulation Commands
              </p>
              <p className="text-white">Contract scans are active</p>
              <p className="text-white">Link scans are active</p>
            </div>
            <div className="flex h-64 w-full flex-col rounded-md bg-secondary p-8">
              <p className="mb-6 text-lg font-medium text-white">
                Phishing Detection
              </p>
              <p className="text-white">Phishing detection is active</p>
              <p className="text-white">Routing alerts to 2 admins</p>
            </div>
            <div className="flex h-64 w-full flex-col rounded-md bg-secondary p-8">
              <p className="mb-6 text-lg font-medium text-white">Scam Alerts</p>
              <p className="text-white">Daily scam alerts are active</p>
              <p className="text-white">Routing to #scam-alerts channel</p>
            </div>
            <div className="flex h-64 w-full flex-col rounded-md bg-secondary p-8">
              <p className="mb-6 text-lg font-medium text-white">
                Bot User Detection
              </p>
              <h1 className="text-4xl text-white">1,145</h1>
              <p className="text-white">user bots banned last week</p>
            </div>
            <div className="flex h-64 w-full flex-col rounded-md bg-secondary p-8">
              <p className="mb-6 text-lg font-medium text-white">
                Blacklist & Restricted Users
              </p>
              <h1 className="text-4xl text-white">32</h1>
              <p className="mb-4 text-white">users blacklisted</p>
              <h1 className="text-4xl text-white">6</h1>
              <p className="text-white">users with chat restrictions</p>
            </div>
            <div className="flex h-64 w-full flex-col rounded-md bg-secondary p-8">
              <p className="mb-6 text-lg font-medium text-white">Safe</p>
              <p className="text-white">Daily safe mints are active</p>
              <p className="text-white">Routing to #alpha channel</p>
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}
