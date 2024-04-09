/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Open Sans", "ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],

      display: ["Open Sans", "ui-sans-serif"],
      body: ["Open Sans", "ui-sans-serif"],
    },
    extend: {
      colors: {
        F1F2F3: "#F1F2F3",
      },
      padding: {
        "14px": "14px",
        "18px": "18px",
      },
      spacing: {
        "14px": "14px",
        "18px": "18px",
      },
      minWidth: {
        "120px": "120px",
      },
      boxShadow: {
        "depressed-1": "inset 0px 2px 8px 1px rgba(147,160,174,0.2)",
        "simple-1":
          "0px 4px 4px 0px rgba(27,87,131,0.04), 0px 4px 32px 4px rgba(31,65,116,0.02)",
      },
    },
  },
  plugins: [],
};
