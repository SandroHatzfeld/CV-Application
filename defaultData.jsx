const defaultPersonal = {
  title: "Dr.",
  firstName: "Hans",
  lastName: "Dieter",
  eMail: "hans.dieter1961@gmail.com",
  phoneNumber: "+19199 938877",
  description: "I'm Hans, an elderly dude",
  birthday: "1961-02-26",
  street: "Mainstreet",
  number: "43a",
  zip: "88981",
  city: "Maintown",
}
const defaultEducation = [
  {
    id: crypto.randomUUID(),
    name: "Collage ",
    description: "Major",
    location: "Tennessee",
    start: "1975-03-10",
    end: "1983-05-12",
  },
  {
    id: crypto.randomUUID(),
    name: "University ",
    description: "Doctor of Biology",
    location: "New York",
    start: "1994-03-10",
    end: "2001-05-12",
  },
]
const defaultBusiness = [
  {
    id: crypto.randomUUID(),
    name: "Teacher for Biology",
    position: "Teacher",
    description: "Teaching students in the university of Ottowa",
    location: "New York",
    start: "2003-08-19",
    end: "2020-12-01",
  },
]
const defaultCustomiztion = {
  mainColor: "#8dce44",
  mainTextColor: "#1f1f1f",
  accentColor: "#cf2345",
  textColor: "#1a1a1a",
  backgroundColor: "#eeeeee",
  footerColor: "#15961b",
  footerTextColor: "#ffffff",
  headerFont: "Arial",
  headlineFont: "Arial",
  paragraphFont: "Arial",
  footerFont: "Arial",
}
const defaultLayoutSetting = 1

export { defaultBusiness, defaultEducation, defaultPersonal, defaultCustomiztion, defaultLayoutSetting }
