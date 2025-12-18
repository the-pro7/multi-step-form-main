import { useState } from "react";
import StepsPane from "./components/StepsPane";
import ViewController from "./components/ViewController";

function App() {
  const [view, setView] = useState(1);
  return (
    <main className="bg-neutral-magnolia w-full min-h-screen min-w-screen">
      <div className="max-w-lg isolate grid relative">
        <StepsPane />
        <ViewController />
        {/* <div className="bg-orange-500 w-full h-80 col-span-full">
          Ha
        </div>
        <div className="bg-rose-500 w-45 h-20 col-span-full absolute justify-self-center -bottom-10">
          Ha2
        </div> */}
      </div>
    </main>
  );
}

export default App;
