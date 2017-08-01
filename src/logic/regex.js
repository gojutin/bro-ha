
const theNonbroifiables = str => (
  /^bro|bou|boo|bol/.test(str) 
  || /^[a-z]ou/.test(str)
  || /s[a-z]o/.test(str)
  || /hor|sho|tho|ott|ort|wo|who|fro|come/.test(str)
  || (/^(?!o)/.test(str) && /[aeiou]{1}o/.test(str))
  || /ond/.test(str)
  || /ow/.test(str)
  || /ero/.test(str) 
  || /hro/.test(str) 
  || str.length < 4
  || /oo|oi|oa/.test(str)
)

const prefixPatterns = [
  { try: /^o/ },
  { try: /^[a-z]oe/ },
  { try: /^[a-z]o/ },
  { try: /^[a-z]ro/ },
]
// optional "replace" property if the str should be replaced based on a 
// different regex expression
const otherPatterns = [
  { try: /pro/g },
  { try: /joe/g },
  { try: /poe/g },
  { try: /jo|po/g },
  { try: /so/g, replace: /o/g },
  { try: /ro/g },
  { try: /[b-z]lo/g },
  { try: /[c-z]ro/g },
  { try: /[a-z]o/g },
];

export default (str) => {
  let finalStr;
  if (theNonbroifiables(str)) {
    return false;
  }

  const patterns = [...prefixPatterns, ...otherPatterns]
  const len = patterns.length;
  for (let i = 0; i<len; i++) {
    let p = patterns[i];
    if (!!p["try"].test(str)) {
      finalStr = str.replace(p["replace"] ? p["replace"] : p["try"], "BRO");
      break;
    }
  }
  return finalStr;
}
