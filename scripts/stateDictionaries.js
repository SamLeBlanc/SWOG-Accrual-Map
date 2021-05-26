var usa_abbrs = [
  "AK","AL","AR","AZ","CA","CO","CT","DC","DE","FL","GA","HI",
  "IA","ID","IL","IN","KS","KY","LA","MA","MD","ME","MI","MN",
  "MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH",
  "OK","OR","PA","PR","RI","SC","SD","TN","TX","UT","VA","VT",
  "WA","WI","WV","WY"
]

var canada_abbrs = [
  "AB","BC","MB","NB","NL","NT","NS","NU","ON","PE","QC","SK","YT"
]

var intl_abbrs = [
  "CU","ES","FR","IE","KR","MX","PU","SA",
]

var state_abbrs = [
  "AK","AL","AR","AZ","CA","CO","CT","DC","DE","FL","GA","HI",
  "IA","ID","IL","IN","KS","KY","LA","MA","MD","ME","MI","MN",
  "MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH",
  "OK","OR","PA","PR","RI","SC","SD","TN","TX","UT","VA","VT",
  "WA","WI","WV","WY","AB","BC","MB","NB","NL","NT","NS","NU",
  "ON","PE","QC","SK","YT","CU","ES","FR","IE","KR","MX","PU","SA",
  ];
var state_to_code = {
  'AL':'01','AK':'02','AZ':'04','AR':'05','CA':'06','CO':'08','CT':'09','DE':'10','DC':'11','FL':'12',
  'GA':'13','HI':'15','ID':'16','IL':'17','IN':'18','IA':'19','KS':'20','KY':'21','LA':'22','ME':'23',
  'MD':'24','MA':'25','MI':'26','MN':'27','MS':'28','MO':'29','MT':'30','NE':'31','NV':'32','NH':'33',
  'NJ':'34','NM':'35','NY':'36','NC':'37','ND':'38','OH':'39','OK':'40','OR':'41','PA':'42','RI':'44',
  'SC':'45','SD':'46','TN':'47','TX':'48','UT':'49','VT':'50','VA':'51','WA':'53','WV':'54','WI':'55',
  'WY':'56','PR':'72',"AB":"80","BC":"81","MB":"82","NB":"83","NL":"84","NT":"85","NS":"86","NU":"87",
  "ON":"88","PE":"89","QC":"90","SK":"91","YT":"92","CU":"93","ES":"94","FR":"95","IE":"96","KR":"97",
  "MX":"98","PU":"99","SA":"100",
}
var state_to_name = {
 "CU":"Columbia", "ES":"Spain", "SA":"Saudi Arabia", "FR":"France", "IE":"Ireland", "KR":"Korea", "MX":"Mexico", "PU":"Peru",
 "AB":"Alberta", "BC":"British Columbia", "MB":"Manitoba", "NB":"New Brunswick", "NL":"Newfoundland and Labrador", "NT":"Northwest Territories",
 "NS":"Nova Scotia", "NU":"Nunavut", "ON":"Ontario", "PE":"Prince Edward Island", "QC":"Quebec", "SK":"Saskatchewan", "YT":"Yukon",
 "AL":"Alabama", "AK":"Alaska", "AZ":"Arizona", "AR":"Arkansas", "CA":"California", "CO":"Colorado", "CT":"Connecticut", "DE":"Delaware",
 "DC":"District of Columbia", "FL":"Florida", "GA":"Georgia", "HI":"Hawaii", "ID":"Idaho", "IL":"Illinois", "IN":"Indiana", "IA":"Iowa",
 "KS":"Kansas", "KY":"Kentucky", "LA":"Louisiana", "ME":"Maine", "MD":"Maryland", "MA":"Massachusetts", "MI":"Michigan", "MN":"Minnesota",
 "MS":"Mississippi", "MO":"Missouri", "MT":"Montana", "NE":"Nebraska", "NV":"Nevada", "NH":"New Hampshire", "NJ":"New Jersey", "NM":"New Mexico",
 "NY":"New York", "NC":"North Carolina", "ND":"North Dakota", "OH":"Ohio", "OK":"Oklahoma", "OR":"Oregon", "PW":"Palau", "PA":"Pennsylvania",
 "PR":"Puerto Rico", "RI":"Rhode Island", "SC":"South Carolina", "SD":"South Dakota", "TN":"Tennessee", "TX":"Texas", "UT":"Utah", "VT":"Vermont",
 "VI":"Virgin Islands", "VA":"Virginia", "WA":"Washington", "WV":"West Virginia", "WI":"Wisconsin", "WY":"Wyoming",
}
