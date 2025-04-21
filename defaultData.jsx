const defaultPersonal = {
  title: "Mr.",
  firstName: "Liam",
  lastName: "Peterson",
  eMail: "liam.peterson1980@example.com",
  phoneNumber: "+1 202-555-0143",
  description: "I'm Liam, a passionate and experienced software engineer with over two decades in the tech industry. I specialize in backend development and cloud architecture, and thrive on building scalable, secure systems that solve real-world problems.",
  birthday: "1980-11-03",
  street: "Oakridge Lane",
  number: "121b",
  zip: "90210",
  city: "San Diego",
}

const defaultEducation = [
  {
    id: crypto.randomUUID(),
    name: "Stanford University",
    description: "MSc Software Engineering",
    location: "Stanford, CA",
    start: "2003-09-01",
    end: "2005-06-15",
    currentPlace:false,
  },
  {
    id: crypto.randomUUID(),
    name: "California Institute of Technology",
    description: "BSc Computer Science",
    location: "Pasadena, CA",
    start: "1998-09-01",
    end: "2002-06-15",
    currentPlace:false,
  },
  {
    id: crypto.randomUUID(),
    name: "Lincoln High School",
    description: "General Education",
    location: "San Diego, CA",
    start: "1994-09-01",
    end: "1998-06-15",
    currentPlace:false,
  },
  
  
]

const defaultBusiness = [
  {
    id: crypto.randomUUID(),
    name: "CloudFront Labs",
    position: "Principal Engineer",
    description: "Architected cloud infrastructure for clients and developed DevOps pipelines.",
    location: "Remote",
    start: "2017-04-01",
    end: "",
    currentPlace:true,
  },
  
  {
    id: crypto.randomUUID(),
    name: "InnoScale Inc.",
    position: "Senior Software Engineer",
    description: "Led a team of developers building scalable APIs and microservices in Node.js.",
    location: "San Diego, CA",
    start: "2010-08-15",
    end: "2017-03-30",
    currentPlace:false,
  },
  {
    id: crypto.randomUUID(),
    name: "TechNova Solutions",
    position: "Junior Software Developer",
    description: "Worked on enterprise-level backend services in Java and Python.",
    location: "Los Angeles, CA",
    start: "2005-08-01",
    end: "2010-07-31",
    currentPlace:false,
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
const defaultLayoutSetting = 0

export { defaultBusiness, defaultEducation, defaultPersonal, defaultCustomiztion, defaultLayoutSetting }
