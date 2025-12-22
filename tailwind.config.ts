module.exports = {
  content: ["./src      *.{js, jsx,ts, tsx}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Ubuntu", "sans-serif"],
      },
      colors: {
        "primary-red": "hsl(14, 86%, 42%)",
        green: "hsl(159, 69%, 38%)",
        primary: {
          "marine-blue": " hsl(217, 84%, 17%)",
          // "marine-blue": " hsl(243, 100%, 62%)",
          "purplish-blue": "hsl(243, 100%, 62%)",
          "pastel-blue": "hsl(228, 100%, 84%)",
          "light-blue": "hsl(206, 94%, 87%)",
          "strawberry-red": "hsl(354, 84%, 57%)",
        },
        neutral: {
            "cool-gray": "hsl(231, 11%, 63%)",
            "light-gray": "hsl(229, 24%, 87%)",
            "magnolia": "hsl(217, 100%, 97%)",
            "alabaster": "hsl(231, 100%, 99%)"
        },
      },
    },
  },
};
