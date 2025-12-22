import { useState } from "react";
import ControlButtons from "./components/ControlButtons";
import StepsPane from "./components/StepsPane";
import ViewFrame from "./components/ViewFrame";

function App() {
  const [view, setView] = useState(1);
  return (
    <main className="bg-neutral-magnolia w-full min-h-screen min-w-screen font-sans relative outline-3 outline-orange-500">
      <div className="max-w-lg isolate grid relative">
        <StepsPane currentStep={view} changeStep={setView} />
        <ViewFrame currentView={view} />
      </div>
      <ControlButtons currentView={view} setCurrentView={setView}/>
      
    </main>
  );
}

export default App;
