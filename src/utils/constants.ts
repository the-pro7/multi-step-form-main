import Arcade from "../assets/images/icon-arcade.svg"
import Advanced from "../assets/images/icon-advanced.svg"
import Pro from "../assets/images/icon-pro.svg"

export const multiStepData = [
  {
    stepId: 1,
    stepName: "Your info",
    stepTitle: "Personal info",
    stepInstruction:
      " Please provide your name, email address, and phone number.",
    hasPrecedingStep: false,
    inputs: [
      {
        name: "Name",
        type: "text",
        defaultValue: " e.g. Stephen King",
        autoFocus: true,
      },
      {
        name: "Email Address",
        type: "email",
        defaultValue: " e.g. stephenking@lorem.com",
      },
      {
        name: "Phone Number",
        type: "tel",
        defaultValue: " e.g. +1 234 567 890",
      },
    ],
  },
  {
    stepId: 2,
    stepName: "Select your plan",
    stepTitle: "Select your plan",
    stepInstruction: "you hav the option of monthly or yearly billing",
    hasPrecedingStep: true,
    cards: [
      {
        title: "Arcade",
        price: "$90/yr",
        free: "2 months free",
        imgUrl: "../assets/images/icon-arcade.svg",
      },
      {
        title: "Advanced",
        price: "$120/yr",
        free: "2 months free",
        imgUrl: "../assets/images/icon-advanced.svg",
      },
      {
        title: "Pro",
        price: "$150/yr",
        free: "2 months free",
        imgUrl: "../assets/images/icon-pro.svg",
      },
    ],
  },
  {
    stepId: 3,
    stepName: "Add-ons",
    stepTitle: "Pick add-ons",
    stepInstruction: "add-ons help enhance your gaming experience.",
    hasPrecedingStep: true,
    cards: [
      {
        title: "online service",
        description: "access to multiplayer games",
        fee: "+1/mo",
        defaultSelected: true,
      },
      {
        title: "larger storage",
        description: " Extra 1TB of cloud save",
        fee: "+2/mo",
        defaultSelected: true,
      },
      {
        title: "Customizable Profile",
        description: "Custom theme on your profile",
        fee: "+2/mo",
        defaultSelected: false,
      },
    ],
  },
  {
    stepId: 4,
    stepName: "Finishing up",
    stepInstruction: "Double-check everything looks OK before confirming.",
    hasPrecedingStep: true,
  },
];

export const steps = [
  {
    id: 1,
    stepName: "Your info",
  },
  {
    id: 2,
    stepName: "Select your plan",
  },
  {
    id: 3,
    stepName: "Add-ons",
  },
  {
    id: 4,
    stepName: "Finishing up",
  },
];


export const stepTwoCards = [
  {
    title: "Arcade",
    yearBill: "$90/yr",
    monthBill: "$9/mo",
    free: "2 months free",
    imgUrl: Arcade,
  },
  {
    title: "Advanced",
    yearBill: "$120/yr",
    monthBill: "$12/mo",
    free: "2 months free",
    imgUrl: Advanced,
  },
  {
    title: "Pro",
    yearBill: "$150/yr",
    monthBill: "$15/mo",
    free: "2 months free",
    imgUrl: Pro,
  },
]