import { useState } from "react";
import ControlButtons from "./components/ControlButtons";
import StepsPane from "./components/StepsPane";
import ViewFrame from "./components/ViewFrame";

function App() {
  const [view, setView] = useState(1);
  const [confirmed, setConfirmed] = useState(false)
  return (
    <main className="bg-neutral-magnolia w-full min-h-screen min-w-screen font-sans relative outline-3 outline-orange-500">
      <div className="max-w-lg isolate grid relative">
        <StepsPane currentStep={view} changeStep={setView} />
        <ViewFrame currentView={view} confirmed={ confirmed} />
      </div>
      <ControlButtons currentView={view} setCurrentView={setView} />
    </main>
  );
}

export default App;
