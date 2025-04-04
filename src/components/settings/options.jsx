const colorOptions = [
  {
    displayName: "Main Color",
    name: "mainColor",
  },
  {
    displayName: "Main Text Color",
    name: "mainTextColor",
  },
  {
    displayName: "Accent Color",
    name: "accentColor",
  },
  {
    displayName: "Text Color",
    name: "textColor",
  },
  {
    displayName: "Background Color",
    name: "backgroundColor",
  },
  {
    displayName: "Footer Color",
    name: "footerColor",
    defaultValue: "#b82f2f",
  },
  {
    displayName: "Footer Text Color",
    name: "footerTextColor",
  },
]
const fontOptions = {
  areas: ["Header", "Headlines", "Paragraphs", "Footer"],
  options: ["Arial", "Comic Sans", "Times New Roman"],
}

const layoutOptions = [
  {
    name: "Topheavy",
    image: "./assets/layouts/topheavy.svg",
  },
  {
    name: "Sidebar",
    image: "./assets/layouts/sidebar.svg",
  },
  {
    name: "Floating",
    image: "./assets/layouts/floating.svg",
  },
  {
    name: "Boxes",
    image: "./assets/layouts/boxes.svg",
  },
]

export { colorOptions, fontOptions, layoutOptions }
