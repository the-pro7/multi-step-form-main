import type { Dispatch, SetStateAction } from "react";
import { steps } from "../utils/constants";
import Step from "./Step";

interface Props {
  currentStep: number;
  changeStep: Dispatch<SetStateAction<number>>;
}

export default function StepsPane({ currentStep, changeStep }: Props) {
  return (
    <aside className="bg-[url('./assets/images/bg-sidebar-mobile.svg')] md:bg-[url('./assets/images/bg-sidebar-desktop.svg')] bg-center bg-cover bg-no-repeat flex items-start justify-center gap-3 min-h-48 col-span-full min-w-full -z-10 m-0">
      {steps.map((step) => (
        <Step
          key={step.id}
          id={step.id}
          stepName={step.stepName}
          currentStep={currentStep}
          changeStep={changeStep}
        />
      ))}
    </aside>
  );
}
