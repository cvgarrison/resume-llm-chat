import { ChatWindow } from "@/components/ChatWindow";

export default function Home() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
        🤖 R.O.B the Retrieval Robot
      </h1>
      <div>
        I can answer any questions you have about Cooper and his resume!
      </div>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat"
      emptyStateComponent={InfoCard}
      showIngestForm={false}
      showIntermediateStepsToggle={false}
      placeholder={
        'Beep boop! I\'m a robot retrieval-focused agent! Ask, "What is Cooper\'s job experience?"'
      }
      emoji="🤖"
      titleText="R.O.B. the Retrieval Robot"
    ></ChatWindow>
  );
}
