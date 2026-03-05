import { useState } from "react";
import { AvatarBackgroundSidebar } from "./components/avatar-background-sidebar";

function App() {
  const [isBackgroundSidebarOpen, setIsBackgroundSidebarOpen] = useState(false);

  const handleBackgroundSidebarChange = () => {
    setIsBackgroundSidebarOpen(true);
  };

  return (
    <>
      <div className="flex h-screen">
        <main className="flex flex-1 items-center justify-center">
          <button
            onClick={handleBackgroundSidebarChange}
            className="rounded-lg bg-black px-6 py-3 text-white"
          >
            Change background
          </button>
        </main>
      </div>

      <AvatarBackgroundSidebar
        open={isBackgroundSidebarOpen}
        onOpenChange={setIsBackgroundSidebarOpen}
        avatarName="Alice"
      />
    </>
  );
}

export default App;
