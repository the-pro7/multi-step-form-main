import type { Dispatch, SetStateAction } from "react";
import { Button } from "./ui/button";

export default function ControlButtons({
  currentView,
  setCurrentView
}: {
  currentView: number;
  setCurrentView: Dispatch<SetStateAction<number>>
}) {

  function handleNextStepClick() {
    setCurrentView(currentView + 1)
  }
  function handlePrevStepClick() {
    setCurrentView(currentView - 1)
  }

  return (
    <div
      className={`mt-auto w-full bg-white absolute bottom-0 p-4 flex items-center ${
        currentView !== 1 && "justify-between"
      }`}
    >
      <Button
        size="lg"
        variant="ghost"
        onClick={handlePrevStepClick}
        className={`text-neutral-cool-gray font-semibold cursor-pointer ${
          currentView === 1 && "hidden"
        }`}
      >
        Go back
      </Button>
      <Button
        size="lg"
        type={currentView === 1 ? "submit" : "button"}
        className={`control-btn ${currentView === 1 && "ml-auto"}`}
        onClick={handleNextStepClick}
      >
        {currentView === 4 ? "Go Back" : "Next Step"}
      </Button>
    </div>
  );
}
