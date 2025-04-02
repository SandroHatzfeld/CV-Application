const dataPersonal = {
  title: "Dr.",
  firstName: "Hans",
  lastName: "Dieter",
  eMail: "hans.dieter1961@gmail.com",
  phoneNumber: "+19199 938877",
  birthday: "1961-02-26",
  street: "Mainstreet",
  number: "43a",
  zip: "88981",
  city: "Maintown",
}
const dataEducation = [
  {
    id: crypto.randomUUID(),
    name: "Collage ",
    degree: "Major",
    location: "Tennessee",
    start: "1975-03-10",
    end: "1983-05-12",
  },
  {
    id: crypto.randomUUID(),
    name: "University ",
    degree: "Doctor of Biology",
    location: "New York",
    start: "1994-03-10",
    end: "2001-05-12",
  },
]
const dataBusiness = [
  {
    id: crypto.randomUUID(),
    name: "Teacher for Biology",
    position: "Teacher",
    description: "Teaching students in the university of Ottowa",
    start: "2003-08-19",
    end: "2020-12-01",
  },
]

export {dataBusiness, dataEducation, dataPersonal}