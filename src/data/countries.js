const allCountries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo (Congo-Brazzaville)",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czechia (Czech Republic)",
  "Democratic Republic of the Congo",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  'Eswatini (fmr. "Swaziland")',
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Holy See",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar (formerly Burma)",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine State",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States of America",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const regions = {
  Africa: [
    "Algeria",
    "Angola",
    "Benin",
    "Botswana",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cameroon",
    "Central African Republic",
    "Chad",
    "Comoros",
    "Congo (Congo-Brazzaville)",
    "Djibouti",
    "Egypt",
    "Equatorial Guinea",
    "Eritrea",
    'Eswatini (fmr. "Swaziland")',
    "Ethiopia",
    "Gabon",
    "Gambia",
    "Ghana",
    "Guinea",
    "Guinea-Bissau",
    "Ivory Coast",
    "Kenya",
    "Lesotho",
    "Liberia",
    "Libya",
    "Madagascar",
    "Malawi",
    "Mali",
    "Mauritania",
    "Mauritius",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Niger",
    "Nigeria",
    "Rwanda",
    "Sao Tome and Principe",
    "Senegal",
    "Seychelles",
    "Sierra Leone",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Sudan",
    "Tanzania",
    "Togo",
    "Tunisia",
    "Uganda",
    "Zambia",
    "Zimbabwe",
  ],
  Americas: [
    "Antigua and Barbuda",
    "Argentina",
    "Bahamas",
    "Barbados",
    "Belize",
    "Bolivia",
    "Brazil",
    "Canada",
    "Chile",
    "Colombia",
    "Costa Rica",
    "Cuba",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "El Salvador",
    "Grenada",
    "Guatemala",
    "Guyana",
    "Haiti",
    "Honduras",
    "Jamaica",
    "Mexico",
    "Nicaragua",
    "Panama",
    "Paraguay",
    "Peru",
    "Puerto Rico",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Suriname",
    "Trinidad and Tobago",
    "United States of America",
    "Uruguay",
    "Venezuela",
  ],
  Asia: [
    "Afghanistan",
    "Armenia",
    "Azerbaijan",
    "Bahrain",
    "Bangladesh",
    "Bhutan",
    "Brunei",
    "Cambodia",
    "China",
    "Cyprus",
    "Georgia",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Israel",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Lebanon",
    "Malaysia",
    "Maldives",
    "Mongolia",
    "Myanmar (formerly Burma)",
    "Nepal",
    "North Korea",
    "Oman",
    "Pakistan",
    "Palestine State",
    "Philippines",
    "Qatar",
    "Saudi Arabia",
    "Singapore",
    "South Korea",
    "Sri Lanka",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Thailand",
    "Timor-Leste",
    "Turkmenistan",
    "United Arab Emirates",
    "Uzbekistan",
    "Vietnam",
    "Yemen",
  ],
  Europe: [
    "Albania",
    "Andorra",
    "Austria",
    "Belarus",
    "Belgium",
    "Bosnia and Herzegovina",
    "Bulgaria",
    "Croatia",
    "Czechia (Czech Republic)",
    "Denmark",
    "Estonia",
    "Finland",
    "France",
    "Germany",
    "Greece",
    "Hungary",
    "Iceland",
    "Ireland",
    "Italy",
    "Kosovo",
    "Latvia",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Malta",
    "Moldova",
    "Monaco",
    "Montenegro",
    "Netherlands",
    "North Macedonia",
    "Norway",
    "Poland",
    "Portugal",
    "Romania",
    "Russia",
    "San Marino",
    "Serbia",
    "Slovakia",
    "Slovenia",
    "Spain",
    "Sweden",
    "Switzerland",
    "Ukraine",
    "United Kingdom",
    "Vatican",
  ],
  Oceania: [
    "Australia",
    "Fiji",
    "Kiribati",
    "Marshall Islands",
    "Micronesia",
    "Nauru",
    "New Zealand",
    "Palau",
    "Papua New Guinea",
    "Samoa",
    "Solomon Islands",
    "Tonga",
    "Tuvalu",
    "Vanuatu",
  ],
};

const smallCountries = [
  "Vatican",
  "Monaco",
  "Nauru",
  "Tuvalu",
  "San Marino",
  "Liechtenstein",
  "Saint Kitts and Nevis",
  "Maldives",
  "Malta",
  "Grenada",
  "Saint Vincent and the Grenadines",
  "Barbados",
  "Antigua and Barbuda",
  "Sao Tome and Principe",
  "Marshall Islands",
  "Palau",
  "Andorra",
];

const famousCountries = [
  "United States of America",
  "Canada",
  "Brazil",
  "Germany",
  "France",
  "China",
  "India",
  "Australia",
  "Japan",
  "United Kingdom",
  "Italy",
  "Spain",
  "Russia",
  "Mexico",
  "South Korea",
  "Turkey",
  "Netherlands",
  "Switzerland",
  "Sweden",
  "Norway",
  "Singapore",
  "Thailand",
  "Argentina",
  "Egypt",
  "South Africa",
  "New Zealand",
];

const oldCountries = [
  "Egypt",
  "Greece",
  "Italy",
  "India",
  "China",
  "Iran",
  "Turkey",
  "Mexico",
  "Peru",
  "Iraq",
  "Syria",
  "Ethiopia",
  "Israel",
  "Japan",
  "Vietnam",
  "Cambodia",
  "Nepal",
  "Thailand",
  "Libya",
  "Mali",
];

const islandCountries = [
  "Australia",
  "Bahamas",
  "Bahrain",
  "Barbados",
  "Cyprus",
  "Fiji",
  "Iceland",
  "Indonesia",
  "Japan",
  "Madagascar",
  "Maldives",
  "Malta",
  "Mauritius",
  "New Zealand",
  "Philippines",
  "Singapore",
  "Sri Lanka",
  "Taiwan",
  "United Kingdom",
  "Samoa",
  "Vanuatu",
  "Cuba",
  "Haiti",
  "Dominica",
  "Grenada",
  "Jamaica",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Trinidad and Tobago",
];

const landlockedCountries = [
  "Afghanistan",
  "Austria",
  "Belarus",
  "Bhutan",
  "Bolivia",
  "Botswana",
  "Burkina Faso",
  "Burundi",
  "Central African Republic",
  "Chad",
  "Czechia (Czech Republic)",
  "Ethiopia",
  "Hungary",
  "Kazakhstan",
  "Laos",
  "Lesotho",
  "Liechtenstein",
  "Luxembourg",
  "Macedonia",
  "Mali",
  "Mongolia",
  "Nepal",
  "Niger",
  "Paraguay",
  "Rwanda",
  "San Marino",
  "Serbia",
  "Slovakia",
  "Switzerland",
  "Swaziland",
  "Tajikistan",
  "Turkmenistan",
  "Uganda",
  "Uzbekistan",
  "Vatican",
  "Zambia",
  "Zimbabwe",
];

const highPopulationCountries = [
  "China",
  "India",
  "United States of America",
  "Indonesia",
  "Pakistan",
  "Brazil",
  "Nigeria",
  "Bangladesh",
  "Russia",
  "Mexico",
  "Japan",
  "Ethiopia",
  "Philippines",
  "Egypt",
  "Vietnam",
  "Democratic Republic of the Congo",
  "Turkey",
  "Iran",
  "Germany",
  "Thailand",
  "United Kingdom",
  "France",
  "Italy",
  "South Africa",
  "Tanzania",
  "Myanmar (formerly Burma)",
];

const economy = {
  developedCountries: [
    "United States of America",
    "Canada",
    "Germany",
    "United Kingdom",
    "France",
    "Japan",
    "Australia",
    "Italy",
    "South Korea",
    "Netherlands",
    "Switzerland",
    "Sweden",
    "Norway",
    "Denmark",
    "Finland",
    "Belgium",
    "Austria",
    "Singapore",
    "Ireland",
    "Luxembourg",
    "Iceland",
    "New Zealand",
    "Israel",
    "Spain",
    "Portugal",
    "Czechia (Czech Republic)",
    "Slovakia",
    "Estonia",
    "Latvia",
    "Lithuania",
  ],
  developingCountries: [
    "China",
    "India",
    "Brazil",
    "Russia",
    "Mexico",
    "Indonesia",
    "Turkey",
    "South Africa",
    "Nigeria",
    "Egypt",
    "Thailand",
    "Vietnam",
    "Philippines",
    "Argentina",
    "Kenya",
    "Algeria",
    "Morocco",
    "Pakistan",
    "Ukraine",
    "Malaysia",
    "Bangladesh",
    "Colombia",
    "Saudi Arabia",
    "Romania",
    "Peru",
  ],
  BRICS: ["Brazil", "Russia", "India", "China", "South Africa"],
  G7: [
    "Canada",
    "France",
    "Germany",
    "Italy",
    "Japan",
    "United Kingdom",
    "United States of America",
  ],
  highGDP: [
    "United States of America",
    "China",
    "Japan",
    "Germany",
    "India",
    "United Kingdom",
    "France",
    "Italy",
    "Brazil",
    "Canada",
    "South Korea",
    "Russia",
    "Spain",
    "Australia",
    "Mexico",
    "Indonesia",
    "Netherlands",
    "Saudi Arabia",
    "Turkey",
    "Switzerland",
  ],
  lowGDP: [
    "Afghanistan",
    "Central African Republic",
    "Chad",
    "Democratic Republic of the Congo",
    "Eritrea",
    "Madagascar",
    "Malawi",
    "Niger",
    "Sierra Leone",
    "Somalia",
    "Sudan",
    "South Sudan",
    "Burkina Faso",
    "Liberia",
    "Mali",
    "Mozambique",
    "Yemen",
    "Tanzania",
    "Burundi",
    "Guinea",
  ],
};

const languages = {
  englishSpeaking: [
    "United States of America",
    "United Kingdom",
    "Canada",
    "Australia",
    "Ireland",
    "New Zealand",
    "South Africa",
    "India",
    "Pakistan",
    "Nigeria",
    "Philippines",
    "Kenya",
    "Uganda",
    "Ghana",
    "Trinidad and Tobago",
    "Jamaica",
    "Barbados",
    "Antigua and Barbuda",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Botswana",
    "Singapore",
    "Liberia",
    "Sierra Leone",
  ],
  spanishSpeaking: [
    "Spain",
    "Mexico",
    "Colombia",
    "Argentina",
    "Venezuela",
    "Peru",
    "Chile",
    "Guatemala",
    "Ecuador",
    "Bolivia",
    "Cuba",
    "Dominican Republic",
    "Honduras",
    "Paraguay",
    "El Salvador",
    "Nicaragua",
    "Costa Rica",
    "Puerto Rico",
    "Panama",
    "Uruguay",
    "Equatorial Guinea",
  ],
  frenchSpeaking: [
    "France",
    "Canada",
    "Belgium",
    "Switzerland",
    "Senegal",
    "Ivory Coast",
    "Madagascar",
    "Cameroon",
    "Burkina Faso",
    "Niger",
    "Mali",
    "Rwanda",
    "Burundi",
    "Benin",
    "Chad",
    "Republic of the Congo",
    "Democratic Republic of the Congo",
    "Togo",
    "Guinea",
    "Haiti",
    "Djibouti",
    "Comoros",
  ],
  arabicSpeaking: [
    "Egypt",
    "Saudi Arabia",
    "United Arab Emirates",
    "Iraq",
    "Syria",
    "Jordan",
    "Lebanon",
    "Morocco",
    "Algeria",
    "Tunisia",
    "Libya",
    "Kuwait",
    "Oman",
    "Bahrain",
    "Qatar",
    "Yemen",
    "Sudan",
    "Mauritania",
    "Somalia",
    "Djibouti",
    "Palestine State",
    "Chad",
  ],
  chineseSpeaking: ["China", "Taiwan", "Singapore"],
  hindiSpeaking: ["India"],
  portugueseSpeaking: [
    "Portugal",
    "Brazil",
    "Angola",
    "Mozambique",
    "Cape Verde",
    "Guinea-Bissau",
    "São Tomé and Príncipe",
    "Timor-Leste",
  ],
  russianSpeaking: ["Russia", "Belarus", "Kazakhstan", "Kyrgyzstan"],
  germanSpeaking: [
    "Germany",
    "Austria",
    "Switzerland",
    "Belgium",
    "Liechtenstein",
  ],
  japaneseSpeaking: ["Japan"],
};

const funFeatures = {
  countriesWithUniqueLandmarks: [
    "Egypt",
    "France",
    "Italy",
    "India",
    "Egypt",
    "Australia",
    "United States of America",
    "Brazil",
    "China",
    "Peru",
    "Turkey",
    "Greece",
    "Mexico",
    "Spain",
    "United Kingdom",
    "South Africa",
    "Russia",
    "India",
    "Japan",
    "Thailand",
  ],
  countriesWithMultipleTimeZones: [
    "Russia",
    "United States of America",
    "Canada",
    "China",
    "Brazil",
    "Australia",
    "Kazakhstan",
    "Mexico",
    "Indonesia",
    "United Kingdom",
  ],
  countriesWithLargestDeserts: [
    "Australia",
    "China",
    "United States of America",
    "Egypt",
    "Saudi Arabia",
    "Mongolia",
    "Algeria",
  ],
  topTouristDestinations: [
    "France",
    "Spain",
    "United States of America",
    "China",
    "Italy",
    "Turkey",
    "Mexico",
    "Germany",
    "Thailand",
    "United Kingdom",
    "Japan",
    "Greece",
    "Australia",
    "Brazil",
    "Canada",
    "Russia",
    "Malaysia",
    "Indonesia",
    "Netherlands",
    "Switzerland",
  ],
  countriesWithLargestPopulations: [
    "China",
    "India",
    "United States of America",
    "Indonesia",
    "Pakistan",
    "Brazil",
    "Nigeria",
    "Bangladesh",
    "Russia",
    "Mexico",
    "Japan",
    "Ethiopia",
    "Philippines",
    "Egypt",
    "Vietnam",
    "DR Congo",
    "Turkey",
    "Iran",
    "Germany",
    "Thailand",
  ],
};

export default {
  all: allCountries,
  regions,
  smallCountries,
  famousCountries,
  oldCountries,
  islandCountries,
  landlockedCountries,
  highPopulationCountries,
  economy,
  languages,
  funFeatures,
};
