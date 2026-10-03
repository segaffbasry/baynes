/* The live shop directory (baynes.co.uk/our-shops/, 2026-10-03): 73 shops in its order. Names keep the live
   wording with the dash replaced by a comma; opening times are grouped where consecutive days match. */
export type Shop = { name: string; street: string; town: string; postcode: string; phone: string; hours: [string, string][]; note?: string };

export const shops: Shop[] = [
 {
  "name": "Airdrie, Bank Street",
  "street": "2/4 Bank Street",
  "town": "Airdrie",
  "postcode": "ML6 6AF",
  "phone": "01236 768914",
  "hours": [
   [
    "Mon to Sat",
    "06:00 to 16:00"
   ],
   [
    "Sun",
    "07:30 to 15:00"
   ]
  ]
 },
 {
  "name": "Alloa, High Street",
  "street": "3 High Street",
  "town": "Alloa",
  "postcode": "FK10 1JF",
  "phone": "01259 721551",
  "hours": [
   [
    "Mon to Sat",
    "05:30 to 16:30"
   ],
   [
    "Sun",
    "07:30 to 15:00"
   ]
  ]
 },
 {
  "name": "Alva",
  "street": "100 Stirling Street",
  "town": "Alva",
  "postcode": "FK12 5EH",
  "phone": "01259 760300",
  "hours": [
   [
    "Mon to Sat",
    "06:00 to 16:30"
   ],
   [
    "Sun",
    "07:30 to 15:00"
   ]
  ]
 },
 {
  "name": "Ballingry",
  "street": "10 Benarty Square",
  "town": "Ballingry",
  "postcode": "KY5 8NR",
  "phone": "01592 860347",
  "hours": [
   [
    "Mon to Sat",
    "06:00 to 16:00"
   ],
   [
    "Sun",
    "07:30 to 15:00"
   ]
  ]
 },
 {
  "name": "Barrhead",
  "street": "Unit E2 Barrhead Retail Park, Glasgow Road",
  "town": "Barrhead",
  "postcode": "G78 1BF",
  "phone": "0141 471 3868",
  "hours": [
   [
    "Mon to Sat",
    "06:00 to 17:00"
   ],
   [
    "Sun",
    "07:30 to 15:00"
   ]
  ]
 },
 {
  "name": "Bonnyrigg",
  "street": "22 High Street",
  "town": "Bonnyrigg",
  "postcode": "EH19 2AA",
  "phone": "0131 660 3529",
  "hours": [
   [
    "Mon to Fri",
    "05:30 to 16:30"
   ],
   [
    "Sat",
    "06:30 to 16:30"
   ],
   [
    "Sun",
    "07:00 to 15:00"
   ]
  ]
 },
 {
  "name": "Bowhill",
  "street": "193 Station Road",
  "town": "Bowhill",
  "postcode": "KY5 0BN",
  "phone": "01592 720384",
  "hours": [
   [
    "Mon to Fri",
    "05:30 to 16:00"
   ],
   [
    "Sat",
    "06:00 to 16:00"
   ],
   [
    "Sun",
    "07:30 to 15:00"
   ]
  ]
 },
 {
  "name": "Bridge of Allan",
  "street": "27A Henderson Street",
  "town": "Bridge of Allan",
  "postcode": "FK9 4HN",
  "phone": "01786 833822",
  "hours": [
   [
    "Mon to Sat",
    "06:00 to 16:30"
   ],
   [
    "Sun",
    "07:30 to 15:00"
   ]
  ]
 },
 {
  "name": "Cardenden",
  "street": "78 Cardenden Road",
  "town": "Cardenden",
  "postcode": "KY5 0PD",
  "phone": "01592 722779",
  "hours": [
   [
    "Mon to Fri",
    "06:00 to 15:00"
   ],
   [
    "Sat",
    "06:30 to 15:00"
   ],
   [
    "Sun",
    "Closed"
   ]
  ]
 },
 {
  "name": "Cowdenbeath",
  "street": "118 High Street",
  "town": "Cowdenbeath",
  "postcode": "KY4 9QA",
  "phone": "01383 610388",
  "hours": [
   [
    "Mon to Sat",
    "05:30 to 16:30"
   ],
   [
    "Sun",
    "07:30 to 15:00"
   ]
  ]
 },
 {
  "name": "Cupar, South Road",
  "street": "South Road",
  "town": "Cupar",
  "postcode": "KY15 5JA",
  "phone": "01334 237260",
  "hours": [
   [
    "Mon to Fri",
    "06:00 to 17:00"
   ],
   [
    "Sat",
    "06:30 to 17:00"
   ],
   [
    "Sun",
    "07:00 to 16:00"
   ]
  ]
 },
 {
  "name": "Currie",
  "street": "Pentland View Court",
  "town": "Currie",
  "postcode": "EH14 5NP",
  "phone": "0131 449 2371",
  "hours": [
   [
    "Mon to Sat",
    "06:00 to 16:00"
   ],
   [
    "Sun",
    "07:30 to 15:00"
   ]
  ]
 },
 {
  "name": "Dalkeith",
  "street": "13 Jarnac Ct",
  "town": "Dalkeith",
  "postcode": "EH22 1HU",
  "phone": "0131 663 3065",
  "hours": [
   [
    "Mon to Sat",
    "06:00 to 15:30"
   ],
   [
    "Sun",
    "07:30 to 15:00"
   ]
  ]
 },
 {
  "name": "Dundee, Ballindean Road",
  "street": "70 Ballindean Road",
  "town": "Dundee",
  "postcode": "DD4 8NU",
  "phone": "01382 507117",
  "hours": [
   [
    "Mon to Fri",
    "06:00 to 16:30"
   ],
   [
    "Sat",
    "07:00 to 16:30"
   ],
   [
    "Sun",
    "07:00 to 15:00"
   ]
  ]
 },
 {
  "name": "Dundee, Caird Avenue",
  "street": "29 Caird Avenue",
  "town": "Dundee",
  "postcode": "DD3 8AS",
  "phone": "01382 832319",
  "hours": [
   [
    "Mon to Fri",
    "06:00 to 16:30"
   ],
   [
    "Sat",
    "06:30 to 16:30"
   ],
   [
    "Sun",
    "07:30 to 15:00"
   ]
  ]
 },
 {
  "name": "Dundee, Fintry Road",
  "street": "98 Fintry Road",
  "town": "Dundee",
  "postcode": "DD4 9EZ",
  "phone": "01382 505275",
  "hours": [
   [
    "Mon to Fri",
    "06:30 to 16:30"
   ],
   [
    "Sat",
    "07:00 to 16:30"
   ],
   [
    "Sun",
    "07:30 to 15:00"
   ]
  ]
 },
 {
  "name": "Dundee, High Street",
  "street": "68 High Street",
  "town": "Dundee",
  "postcode": "DD1 1SD",
  "phone": "01382 721663",
  "hours": [
   [
    "Mon to Fri",
    "06:30 to 17:30"
   ],
   [
    "Sat",
    "07:00 to 17:00"
   ],
   [
    "Sun",
    "07:30 to 16:00"
   ]
  ]
 },
 {
  "name": "Dundee, Lochee",
  "street": "101 High Street",
  "town": "Dundee",
  "postcode": "DD2 3BX",
  "phone": "01382 623277",
  "hours": [
   [
    "Mon to Fri",
    "06:30 to 16:30"
   ],
   [
    "Sat",
    "07:30 to 16:30"
   ],
   [
    "Sun",
    "07:30 to 15:00"
   ]
  ]
 },
 {
  "name": "Dundee, McAlpine Road",
  "street": "81 Macalpine Road",
  "town": "Dundee",
  "postcode": "DD3 8RE",
  "phone": "01382 815327",
  "hours": [
   [
    "Mon to Fri",
    "06:00 to 16:30"
   ],
   [
    "Sat",
    "06:30 to 16:30"
   ],
   [
    "Sun",
    "07:00 to 15:30"
   ]
  ]
 },
 {
  "name": "Dundee, Pitkerro Road",
  "street": "137 Pitkerro Road",
  "town": "Dundee",
  "postcode": "DD4 8EB",
  "phone": "01382 504674",
  "hours": [
   [
    "Mon to Fri",
    "06:30 to 14:00"
   ],
   [
    "Sat",
    "07:00 to 14:00"
   ],
   [
    "Sun",
    "Closed"
   ]
  ]
 },
 {
  "name": "Dunfermline, Abbeyview",
  "street": "7 Allan Crescent",
  "town": "Dunfermline",
  "postcode": "KY11 4HE",
  "phone": "01383 622466",
  "hours": [
   [
    "Mon to Fri",
    "06:00 to 16:30"
   ],
   [
    "Sat",
    "07:00 to 16:30"
   ],
   [
    "Sun",
    "07:30 to 15:00"
   ]
  ]
 },
 {
  "name": "Dunfermline, Kingsgate",
  "street": "102 High Street",
  "town": "Dunfermline",
  "postcode": "KY12 7AT",
  "phone": "01383 727731",
  "hours": [
   [
    "Mon to Fri",
    "06:30 to 17:00"
   ],
   [
    "Sat",
    "07:00 to 17:00"
   ],
   [
    "Sun",
    "08:00 to 15:00"
   ]
  ]
 },
 {
  "name": "East Kilbride, EK Shopping Centre",
  "street": "25 Princes Mall",
  "town": "East Kilbride",
  "postcode": "G74 1LB",
  "phone": "01355 235970",
  "hours": [
   [
    "Mon to Sat",
    "06:30 to 17:00"
   ],
   [
    "Sun",
    "08:00 to 17:00"
   ]
  ]
 },
 {
  "name": "Edinburgh, Easter Road",
  "street": "110 Easter Road",
  "town": "Edinburgh",
  "postcode": "EH7 5RH",
  "phone": "0131 661 0817",
  "hours": [
   [
    "Mon to Sat",
    "06:00 to 16:00"
   ],
   [
    "Sun",
    "07:30 to 15:00"
   ]
  ]
 },
 {
  "name": "Edinburgh, Ferry Road",
  "street": "669 Ferry Road",
  "town": "Edinburgh",
  "postcode": "EH4 2TX",
  "phone": "0131 343 6494",
  "hours": [
   [
    "Mon to Fri",
    "05:30 to 16:30"
   ],
   [
    "Sat",
    "06:30 to 16:30"
   ],
   [
    "Sun",
    "07:30 to 15:00"
   ]
  ]
 },
 {
  "name": "Edinburgh, Granton",
  "street": "162 West Granton Road",
  "town": "Edinburgh",
  "postcode": "EH5 1PE",
  "phone": "0131 297 4455",
  "hours": [
   [
    "Mon to Fri",
    "06:00 to 16:30"
   ],
   [
    "Sat",
    "06:30 to 16:30"
   ],
   [
    "Sun",
    "07:00 to 15:00"
   ]
  ]
 },
 {
  "name": "Edinburgh, Leith",
  "street": "6 Great Junction Street",
  "town": "Leith",
  "postcode": "EH6 5LA",
  "phone": "0131 561 1486",
  "hours": [
   [
    "Mon to Fri",
    "06:00 to 16:30"
   ],
   [
    "Sat",
    "07:00 to 16:30"
   ],
   [
    "Sun",
    "07:30 to 15:00"
   ]
  ]
 },
 {
  "name": "Edinburgh, Queensferry Road",
  "street": "Unit 3 - 517-525, Queensferry Road",
  "town": "Edinburgh",
  "postcode": "EH4 7QD",
  "phone": "0131 336 1859",
  "hours": [
   [
    "Mon to Sat",
    "06:00 to 16:30"
   ],
   [
    "Sun",
    "07:00 to 15:00"
   ]
  ]
 },
 {
  "name": "Falkirk, High Street",
  "street": "113 High St",
  "town": "Falkirk",
  "postcode": "FK1 1ED",
  "phone": "01324 625060",
  "hours": [
   [
    "Mon to Sat",
    "07:00 to 16:30"
   ],
   [
    "Sun",
    "08:00 to 15:00"
   ]
  ]
 },
 {
  "name": "Glasgow, Anniesland",
  "street": "1612 Great Western Road",
  "town": "Glasgow",
  "postcode": "G13 1HQ",
  "phone": "0141 260 5168",
  "hours": [
   [
    "Mon to Sat",
    "05:30 to 17:30"
   ],
   [
    "Sun",
    "07:00 to 16:30"
   ]
  ]
 },
 {
  "name": "Glasgow, Buchanan Bus Station",
  "street": "Killermont Street",
  "town": "Glasgow",
  "postcode": "G2 3NW",
  "phone": "0141 2121 178",
  "hours": [
   [
    "Mon to Sat",
    "06:00 to 21:00"
   ],
   [
    "Sun",
    "07:00 to 17:00"
   ]
  ]
 },
 {
  "name": "Glasgow, Cardonald",
  "street": "1852 Paisley Road West",
  "town": "Glasgow",
  "postcode": "G52 3TW",
  "phone": "0141 471 9507",
  "hours": [
   [
    "Mon to Sat",
    "06:00 to 16:00"
   ],
   [
    "Sun",
    "07:30 to 15:00"
   ]
  ]
 },
 {
  "name": "Glasgow, Gordon Street",
  "street": "66 Gordon Street",
  "town": "Glasgow",
  "postcode": "G1 3RP",
  "phone": "0141 375 7778",
  "hours": [
   [
    "Mon to Sat",
    "05:00 to 21:00"
   ],
   [
    "Sun",
    "06:00 to 17:00"
   ]
  ]
 },
 {
  "name": "Glasgow, Govan Cross",
  "street": "Unit 2 Govan Shopping Centre 795 Govan Road",
  "town": "Glasgow",
  "postcode": "G51 3JW",
  "phone": "0141 260 9282",
  "hours": [
   [
    "Mon to Sat",
    "06:00 to 17:30"
   ],
   [
    "Sun",
    "07:30 to 15:00"
   ]
  ]
 },
 {
  "name": "Glasgow, Hillington Drive-Thru",
  "street": "3 Huntly Road",
  "town": "Glasgow",
  "postcode": "G52 4DZ",
  "phone": "0141 4043553",
  "hours": [
   [
    "Mon to Sat",
    "05:30 to 18:00"
   ],
   [
    "Sun",
    "07:00 to 17:00"
   ]
  ]
 },
 {
  "name": "Glasgow, Saracen Street",
  "street": "247-249 Saracen Street",
  "town": "Glasgow",
  "postcode": "G22 5JW",
  "phone": "0141 212 8338",
  "hours": [
   [
    "Mon to Sat",
    "05:30 to 17:30"
   ],
   [
    "Sun",
    "07:30 to 15:00"
   ]
  ]
 },
 {
  "name": "Glasgow, Tollcross",
  "street": "209 Easterhill Street",
  "town": "Glasgow",
  "postcode": "G32 8LD",
  "phone": "0141 778 9448",
  "hours": [
   [
    "Mon to Sat",
    "06:00 to 17:00"
   ],
   [
    "Sun",
    "07:30 to 15:00"
   ]
  ]
 },
 {
  "name": "Glenrothes, Unicorn Way",
  "street": "12-14 Unicorn Way",
  "town": "Glenrothes",
  "postcode": "KY7 5NU",
  "phone": "01592 756852",
  "hours": [
   [
    "Mon to Fri",
    "06:30 to 17:00"
   ],
   [
    "Sat",
    "07:00 to 17:00"
   ],
   [
    "Sun",
    "08:00 to 16:00"
   ]
  ]
 },
 {
  "name": "Glenrothes, Postgate",
  "street": "4 Postgate",
  "town": "Glenrothes",
  "postcode": "KY7 5LH",
  "phone": "01592 753453",
  "hours": [
   [
    "Mon to Fri",
    "06:00 to 17:00"
   ],
   [
    "Sat",
    "07:00 to 17:00"
   ],
   [
    "Sun",
    "08:00 to 15:30"
   ]
  ]
 },
 {
  "name": "Grangemouth",
  "street": "25 LaPorte Precinct",
  "town": "Grangemouth",
  "postcode": "FK3 8AZ",
  "phone": "01324 461665",
  "hours": [
   [
    "Mon to Sat",
    "06:00 to 17:00"
   ],
   [
    "Sun",
    "07:30 to 15:00"
   ]
  ]
 },
 {
  "name": "Haddington, High Street",
  "street": "40 High St",
  "town": "Haddington",
  "postcode": "EH41 3EE",
  "phone": "01620 822305",
  "hours": [
   [
    "Mon to Fri",
    "06:00 to 16:30"
   ],
   [
    "Sat",
    "06:30 to 16:30"
   ],
   [
    "Sun",
    "07:00 to 15:00"
   ]
  ]
 },
 {
  "name": "Hamilton",
  "street": "114 Quarry Street",
  "town": "Hamilton",
  "postcode": "ML3 7AX",
  "phone": "01698 282070",
  "hours": [
   [
    "Mon to Sat",
    "06:30 to 16:30"
   ],
   [
    "Sun",
    "08:00 to 15:00"
   ]
  ]
 },
 {
  "name": "Inverkeithing, High Street",
  "street": "81 High Street",
  "town": "Inverkeithing",
  "postcode": "KY11 1NW",
  "phone": "01383 412386",
  "hours": [
   [
    "Mon to Fri",
    "05:30 to 16:00"
   ],
   [
    "Sat",
    "06:00 to 16:00"
   ],
   [
    "Sun",
    "07:30 to 15:00"
   ]
  ]
 },
 {
  "name": "Kelty, Main Street",
  "street": "50 Main Street",
  "town": "Kelty",
  "postcode": "KY4 0AA",
  "phone": "01383 831473",
  "hours": [
   [
    "Mon to Fri",
    "05:30 to 16:30"
   ],
   [
    "Sat",
    "06:00 to 16:30"
   ],
   [
    "Sun",
    "07:30 to 15:00"
   ]
  ]
 },
 {
  "name": "Kincardine, High Street",
  "street": "29 High Street",
  "town": "Kincardine",
  "postcode": "FK10 4RJ",
  "phone": "01259 731933",
  "hours": [
   [
    "Mon to Sat",
    "05:30 to 16:00"
   ],
   [
    "Sun",
    "07:30 to 15:00"
   ]
  ]
 },
 {
  "name": "Kinross, High Street",
  "street": "101 High Street",
  "town": "Kinross",
  "postcode": "KY13 8AQ",
  "phone": "01577 862232",
  "hours": [
   [
    "Mon to Fri",
    "06:00 to 16:30"
   ],
   [
    "Sat",
    "06:30 to 16:00"
   ],
   [
    "Sun",
    "07:30 to 15:00"
   ]
  ]
 },
 {
  "name": "Kirkcaldy, Dunearn Drive",
  "street": "191 Dunearn Drive",
  "town": "Kirkcaldy",
  "postcode": "KY2 6LE",
  "phone": "01592 204443",
  "hours": [
   [
    "Mon to Sat",
    "06:00 to 16:30"
   ],
   [
    "Sun",
    "07:30 to 15:00"
   ]
  ]
 },
 {
  "name": "Kirkcaldy, High Street",
  "street": "115 High Street",
  "town": "Kirkcaldy",
  "postcode": "KY1 1LW",
  "phone": "01592 201655",
  "hours": [
   [
    "Mon to Fri",
    "07:00 to 17:00"
   ],
   [
    "Sat",
    "07:30 to 17:00"
   ],
   [
    "Sun",
    "08:30 to 15:00"
   ]
  ]
 },
 {
  "name": "Kirkintilloch, Cowgate",
  "street": "29 Cowgate",
  "town": "Kirkintilloch",
  "postcode": "G66 1HW",
  "phone": "0141 7764104",
  "hours": [
   [
    "Mon to Fri",
    "06:30 to 16:00"
   ],
   [
    "Sat",
    "07:00 to 16:00"
   ],
   [
    "Sun",
    "07:30 to 15:00"
   ]
  ]
 },
 {
  "name": "Leslie, High Street",
  "street": "195 - 197 High Street",
  "town": "Leslie",
  "postcode": "KY6 3AZ",
  "phone": "01592 407044",
  "hours": [
   [
    "Mon to Sat",
    "06:00 to 16:00"
   ],
   [
    "Sun",
    "07:30 to 15:00"
   ]
  ]
 },
 {
  "name": "Leven, High Street",
  "street": "51 High Street",
  "town": "Leven",
  "postcode": "KY8 4NF",
  "phone": "01333 429444",
  "hours": [
   [
    "Mon to Sun",
    "Closed"
   ]
  ],
  "note": "Temporarily closed for maintenance"
 },
 {
  "name": "Lochgelly, Bank Street",
  "street": "22 Bank Street",
  "town": "Lochgelly",
  "postcode": "KY5 9QQ",
  "phone": "01592 780298",
  "hours": [
   [
    "Mon to Sat",
    "06:00 to 16:00"
   ],
   [
    "Sun",
    "07:30 to 15:00"
   ]
  ]
 },
 {
  "name": "Lochgelly, Main Street",
  "street": "89 Main Street",
  "town": "Lochgelly",
  "postcode": "KY5 9AF",
  "phone": "01592 780349",
  "hours": [
   [
    "Mon to Fri",
    "05:30 to 16:00"
   ],
   [
    "Sat",
    "06:00 to 16:00"
   ],
   [
    "Sun",
    "Closed"
   ]
  ]
 },
 {
  "name": "Lochore, Lochleven Road",
  "street": "50 Lochleven Road",
  "town": "Lochore",
  "postcode": "KY5 8DA",
  "phone": "01592 860550",
  "hours": [
   [
    "Mon to Fri",
    "05:30 to 16:00"
   ],
   [
    "Sat",
    "06:00 to 16:00"
   ],
   [
    "Sun",
    "07:30 to 15:00"
   ]
  ]
 },
 {
  "name": "Methilhill",
  "street": "353 Methilhaven Rd",
  "town": "Methil, Leven",
  "postcode": "KY8 3HR",
  "phone": "01333 401 424",
  "hours": [
   [
    "Mon to Fri",
    "05:30 to 16:30"
   ],
   [
    "Sat",
    "06:30 to 16:30"
   ],
   [
    "Sun",
    "07:30 to 15:00"
   ]
  ]
 },
 {
  "name": "Monifieth High Street",
  "street": "29 High Street",
  "town": "Monifieth",
  "postcode": "DD5 4AA",
  "phone": "01382 534508",
  "hours": [
   [
    "Mon to Fri",
    "06:30 to 14:00"
   ],
   [
    "Sat",
    "07:00 to 14:00"
   ],
   [
    "Sun",
    "07:30 to 14:00"
   ]
  ]
 },
 {
  "name": "Musselburgh, North High Street",
  "street": "102 North High Street",
  "town": "Musselburgh",
  "postcode": "EH21 6AS",
  "phone": "0131 653 2529",
  "hours": [
   [
    "Mon to Sat",
    "06:00 to 16:30"
   ],
   [
    "Sun",
    "07:30 to 15:00"
   ]
  ]
 },
 {
  "name": "Musselburgh High Street",
  "street": "70 High Street (Townhall)",
  "town": "Musselburgh",
  "postcode": "EH21 7BX",
  "phone": "0131 655 0377",
  "hours": [
   [
    "Mon to Fri",
    "06:00 to 16:00"
   ],
   [
    "Sat",
    "07:00 to 16:00"
   ],
   [
    "Sun",
    "07:30 to 15:00"
   ]
  ]
 },
 {
  "name": "Oakley, Wardlaw Way",
  "street": "16 Wardlaw Way",
  "town": "Oakley",
  "postcode": "KY12 9QH",
  "phone": "01383 851138",
  "hours": [
   [
    "Mon to Sat",
    "05:30 to 16:00"
   ],
   [
    "Sun",
    "07:30 to 15:00"
   ]
  ]
 },
 {
  "name": "Perth, Dunkeld Road",
  "street": "107 Dunkeld Road",
  "town": "Perth",
  "postcode": "PH1 5BS",
  "phone": "01738 625799",
  "hours": [
   [
    "Mon to Fri",
    "06:00 to 16:30"
   ],
   [
    "Sat",
    "07:00 to 16:30"
   ],
   [
    "Sun",
    "07:30 to 15:00"
   ]
  ]
 },
 {
  "name": "Perth, Inveralmond",
  "street": "Unit 1 Inveralmond Business Park, Ruthvenfield Road",
  "town": "Perth",
  "postcode": "PH1 3XF",
  "phone": "01738 230294",
  "hours": [
   [
    "Mon to Sat",
    "05:30 to 18:00"
   ],
   [
    "Sun",
    "07:00 to 17:00"
   ]
  ]
 },
 {
  "name": "Perth, Letham",
  "street": "199 Rannoch Road",
  "town": "Letham",
  "postcode": "PH1 2DP",
  "phone": "01738 443994",
  "hours": [
   [
    "Mon to Sat",
    "06:00 to 16:30"
   ],
   [
    "Sun",
    "07:30 to 15:00"
   ]
  ]
 },
 {
  "name": "Perth, South Street",
  "street": "95 South Street",
  "town": "Perth",
  "postcode": "PH2 8PA",
  "phone": "01738 632779",
  "hours": [
   [
    "Mon to Fri",
    "06:00 to 17:00"
   ],
   [
    "Sat",
    "07:00 to 17:00"
   ],
   [
    "Sun",
    "07:30 to 15:30"
   ]
  ]
 },
 {
  "name": "Portobello, High Street",
  "street": "160 High Street",
  "town": "Portobello",
  "postcode": "EH15 1AH",
  "phone": "0131 657 3532",
  "hours": [
   [
    "Mon to Sat",
    "06:00 to 16:00"
   ],
   [
    "Sun",
    "07:30 to 15:00"
   ]
  ]
 },
 {
  "name": "Prestonpans, High Street",
  "street": "152 High Street",
  "town": "Prestonpans",
  "postcode": "EH32 9AX",
  "phone": "01875 440304",
  "hours": [
   [
    "Mon to Fri",
    "06:00 to 16:00"
   ],
   [
    "Sat",
    "07:00 to 16:00"
   ],
   [
    "Sun",
    "07:00 to 15:00"
   ]
  ]
 },
 {
  "name": "Rosyth, Parkgate",
  "street": "3 Parkgate",
  "town": "Rosyth",
  "postcode": "KY11 2JW",
  "phone": "01383 412616",
  "hours": [
   [
    "Mon to Fri",
    "05:30 to 16:30"
   ],
   [
    "Sat",
    "06:00 to 16:30"
   ],
   [
    "Sun",
    "07:30 to 15:00"
   ]
  ]
 },
 {
  "name": "Rutherglen, Glasgow",
  "street": "Main Street",
  "town": "Rutherglen",
  "postcode": "G73 2HW",
  "phone": "0141 406 4724",
  "hours": [
   [
    "Mon to Fri",
    "06:00 to 17:00"
   ],
   [
    "Sat",
    "06:30 to 17:00"
   ],
   [
    "Sun",
    "07:30 to 15:00"
   ]
  ]
 },
 {
  "name": "Stirling, Barnton Street",
  "street": "4 - 8 Barnton Street",
  "town": "Stirling",
  "postcode": "FK8 1HF",
  "phone": "01786 472826",
  "hours": [
   [
    "Mon to Sat",
    "07:00 to 16:00"
   ],
   [
    "Sun",
    "Closed"
   ]
  ]
 },
 {
  "name": "Stirling, Kerse",
  "street": "Unit 4, Players Road",
  "town": "Stirling",
  "postcode": "FK7 7WR",
  "phone": "01786 465665",
  "hours": [
   [
    "Mon to Sat",
    "06:00 to 17:00"
   ],
   [
    "Sun",
    "07:30 to 15:30"
   ]
  ]
 },
 {
  "name": "Stirling, Laurencecroft Road",
  "street": "14 Laurencecroft Road",
  "town": "Stirling",
  "postcode": "FK8 1AQ",
  "phone": "01786 471711",
  "hours": [
   [
    "Mon to Sat",
    "05:30 to 17:00"
   ],
   [
    "Sun",
    "07:30 to 15:00"
   ]
  ]
 },
 {
  "name": "Straiton",
  "street": "Unit 7, Straiton Retail Park",
  "town": "Straiton",
  "postcode": "EH20 9PW",
  "phone": "0131 202 8202",
  "hours": [
   [
    "Mon to Sat",
    "05:30 to 17:00"
   ],
   [
    "Sun",
    "07:30 to 16:00"
   ]
  ]
 },
 {
  "name": "Tillicoultry, High Street",
  "street": "102 High Street",
  "town": "Tillicoultry",
  "postcode": "FK13 6DY",
  "phone": "01259 750286",
  "hours": [
   [
    "Mon to Sat",
    "05:30 to 16:00"
   ],
   [
    "Sun",
    "07:30 to 15:00"
   ]
  ]
 },
 {
  "name": "Wishaw, Main Street",
  "street": "65 Main Street",
  "town": "Wishaw",
  "postcode": "ML2 7AB",
  "phone": "01698 359889",
  "hours": [
   [
    "Mon to Sat",
    "06:00 to 17:00"
   ],
   [
    "Sun",
    "07:30 to 15:00"
   ]
  ]
 }
];
