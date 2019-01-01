let loremData = require('./loremIpsum')

const genLorem = () => {
  let ind = Math.floor(Math.random() * loremData.length)
  return loremData[ind]
}

let pathways = [
  {
    name: 'Food Science, Dietetics, and Nutrition',
    code: '200',
    descriptor: genLorem(),
    Top4Codes: ['0113, 1301, 1305, 1306, 1307, 1309, 1399']
  },
  {
    name: 'Food Services and Hospitality',
    code: '201',
    descriptor: genLorem(),
    Top4Codes: ['0113, 1301, 1306, 1307, 1309, 1399']
  },
  {
    name: 'Hospitality, Tourism, and Recreation',
    code: '202',
    descriptor: genLorem(),
    Top4Codes: ['0115, 0606, 0836, 1301, 1306, 1307, 1309, 1399']
  },
]

let topCode2 = [
  {name: 'Agriculture and Natural Resources', code: null},
  {name: 'Architecture and Environmental Design', code: null},
  {name: 'Environmental Sciences and Technologies', code: null},
  {name: 'Biological Sciences', code: null},
  {name: 'Business and Management', code: null},
  {name: 'Media and Communications', code: null},
  {name: 'Information Technology', code: null},
  {name: 'Education', code: null},
  {name: 'Engineering and Industrial Technologies', code: null},
  {name: 'Fine and Applied Arts', code: null},
  {name: 'Foreign Language', code: null},
  {name: 'Health', code: null},
  {name: 'Family and Consumer Sciences', code: null},
  {name: 'Law', code: null},
  {name: 'Humanities (Letters)', code: null},
  {name: 'Library Science', code: null},
  {name: 'Mathamatics', code: null},
  {name: 'Military Studies', code: null},
  {name: 'Physical Sciences', code: null},
  {name: 'Psychology', code: null},
  {name: 'Public and Protective Services', code: null},
  {name: 'Social Sciences', code: null},
  {name: 'Commercial Servies', code: null},
]
let topCode4 = [
  {
    name: 'Food Processing & Related Technology',
    code: '0113',
    Top2Parent: '01',
    pathwaysUsedIn: ['200', '201']
  },
  {
    name: 'Family & Consumer Sciences, General',
    code: '1301',
    Top2Parent: '13',
    pathwaysUsedIn: ['200', '201', '202']
  },
  {
    name: 'Natural Resources',
    code: '0115',
    Top2Parent: '01',
    pathwaysUsedIn: ['202']
  },
  {
    name: 'Public Relations',
    code: '0606',
    Top2Parent: '06',
    pathwaysUsedIn: ['202']
  },
  {
    name: 'Recreation',
    code: '0836',
    Top2Parent: '08',
    pathwaysUsedIn: ['202']
  },
  {
    name: 'Child Dev/Early Care and Education',
    code: '1305',
    Top2Parent: '13',
    pathwaysUsedIn: ['200']
  },
  {
    name: 'Nutrition, Food and Culinary Arts',
    code: '1306',
    Top2Parent: '13',
    pathwaysUsedIn: ['200', '201', '202']
  },
  {
    name: 'Hospitality',
    code: '1307',
    Top2Parent: '13',
    pathwaysUsedIn: ['200', '201', '202']
  },
  {
    name: 'Gerontology',
    code: '1309',
    Top2Parent: '13',
    pathwaysUsedIn: ['200', '201', '202']
  },
  {
    name: 'Other Family & Consumer Sciences',
    code: '1399',
    Top2Parent: '13',
    pathwaysUsedIn: ['200', '201', '202']
  },
]

let K12HighSchools = [
  {
    name: 'Anaheim High School',
    address: '811 W Lincoln Ave, Anaheim, CA 92805',
    pathwaysOffered: ['198']
  },
  {
    name: 'Cypress High School',
    address: '9801 Valley View St, Cypress, CA 90630',
    pathwaysOffered: ['201']
  },
  {
    name: 'Katella High School',
    address: '2200 E Wagner Ave, Anaheim, CA 92806',
    pathwaysOffered: ['201']
  },
  {
    name: 'Kennedy High School',
    address: '8281 Walker St, La Palma, CA 90623',
    pathwaysOffered: ['201']
  },
  {
    name: 'Savanna High School',
    address: '301 N Gilbert St, Anaheim, CA 92801',
    pathwaysOffered: ['201']
  },
  {
    name: 'Western High School',
    address: '501 S Western Ave, Anaheim, CA 92804',
    pathwaysOffered: ['201']
  }
]

const fillTopCode2 = () => {
  for (var i = 0; i < 21; i++) {
    let num = i < 11 ? '0' + (i+1) : i+1
    topCode2[i].code = num
  }
}

let schoolContacts = [
  {
    name: 'Minerva McGonagall',
    phone: '949-293-1111',
    email: 'minerva@gmail',
    title: 'School Admin',
    address: '811 W Lincoln Ave, Anaheim, CA 92805',
    SchoolID: null
  },
  {
    name: 'Severus Snape',
    phone: '949-222-2222',
    email: 'Severus@gmail',
    title: 'School Admin',
    address: '9801 Valley View St, Cypress, CA 90630',
    SchoolID: null
  },
  {
    name: 'Horace Slughorn',
    phone: '949-323-3333',
    email: 'Horace@gmail',
    title: 'School Admin',
    address: '2200 E Wagner Ave, Anaheim, CA 92806',
    SchoolID: null
  },
  {
    name: 'Alastor Moody',
    phone: '949-424-4444',
    email: 'Alastor@gmail',
    title: 'School Admin',
    address: '8281 Walker St, La Palma, CA 90623',
    SchoolID: null
  },
  {
    name: 'Sybill Trelawney',
    phone: '949-123-9876',
    email: 'Sybill@gmail',
    title: 'School Admin',
    address: '301 N Gilbert St, Anaheim, CA 92801',
    SchoolID: null
  },
  {
    name: 'Fillus Flitwick',
    phone: '714-234-9836',
    email: 'Fillus@gmail',
    title: 'School Admin',
    address: '501 S Western Ave, Anaheim, CA 92804',
    SchoolID: null
  }
]


fillTopCode2()

module.exports = {
  pathways,
  topCode2,
  topCode4,
  K12HighSchools,
  schoolContacts
}