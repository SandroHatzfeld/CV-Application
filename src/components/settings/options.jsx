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
  areas: [
    { displayName: "Header", name: "headerFont" },
    { displayName: "Headlines", name: "headlineFont" },
    { displayName: "Paragraphs", name: "paragraphFont" },
    { displayName: "Footer", name: "footerFont" },
  ],
  options: ["Arial", "Times New Roman","Great Vibes","Josefin","Roboto","Oswald"],
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
