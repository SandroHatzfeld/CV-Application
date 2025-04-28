import topheavy from "../../assets/layouts/topheavy.svg"
import sidebar from "../../assets/layouts/sidebar.svg"
import floating from "../../assets/layouts/floating.svg"
import boxes from "../../assets/layouts/boxes.svg"

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
    { displayName: "Headlines", name: "headlineFont" },
    { displayName: "Paragraphs", name: "paragraphFont" },
    { displayName: "Footer", name: "footerFont" },
  ],
  options: [
    "Arial",
    "Times New Roman",
    "Roboto",
    "Oswald",
    "Playwrite",
    "Borel",
    "Arvo",
  ],
}

const layoutOptions = [
  {
    name: "Topheavy",
    image: topheavy,
  },
  {
    name: "Sidebar",
    image: sidebar,
  },
  {
    name: "Floating",
    image: floating,
  },
  {
    name: "Boxes",
    image: boxes,
  },
]

export { colorOptions, fontOptions, layoutOptions }
