import type { Dispatch, SetStateAction } from "react";

interface Props {
  id: number;
  mobileView?: boolean;
  stepName: string;
  isCurrentStep?: boolean;
  currentStep: number;
  changeStep: Dispatch<SetStateAction<number>>;
}

export default function Step({ id, stepName, currentStep, changeStep }: Props) {
  return (
    <div className="mt-10 cursor-pointer" onClick={() => changeStep(id)}>
      <div
        className={`w-9 h-9 aspect-square rounded-full outline outline-white flex items-center justify-center text-white font-semibold hover:bg-primary-pastel-blue hover:text-black transition-colors hover:outline-none ${
          currentStep === id &&
          "bg-primary-light-blue outline-primary-light-blue! text-primary-marine-blue! text-xl"
        }`}
      >
        {id}
      </div>
      <span className="uppercase hidden md:block font-light">Step {id}</span>
      <h4 className="uppercase hidden md:block font-semibold text-lg">
        {stepName}
      </h4>
    </div>
  );
}
