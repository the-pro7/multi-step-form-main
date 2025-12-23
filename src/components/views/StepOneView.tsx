import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function StepOneView() {
  return (
    <>
      <div className="header">
        <h1 className="step-heading">Personal info</h1>
        <p className="step-sub-heading">
          Please provide your name, email address and phone number
        </p>
      </div>
      <div className="flex flex-col gap-3 w-full">
        <div>
          <Label htmlFor="name" className="label">
            Name
          </Label>
          <Input type="text" id="name" required placeholder="e.g. Stephen King" />
        </div>
        <div>
          <Label htmlFor="email" className="label">
            Email Address
          </Label>
          <Input type="email" id="email" required placeholder="e.g. Stephen King" />
        </div>
        <div>
          <Label htmlFor="phone" className="label">
            Phone Number
          </Label>
          <Input type="tel" required id="phone" placeholder="e.g. +1 234 567 890" />
        </div>
      </div>
    </>
  );
}
