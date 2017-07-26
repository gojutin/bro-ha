var words = require("an-array-of-english-words")

const brocabulary = [
  `BROtato Chip`,
  "BROkémon",
  "Hulk BROgan",
  "Tony BROmo",
  "Edgar Allen BRO",
  "BROan of Arc",
  "Dunkin’ BROnaughts",
  "BROklahoma",
  "BRO hard or BRO home",
  "BROhemian Rhapsody",
  "Seth BROgen",
  "Frosty the BROman",
  "That 70’s BRO",
  "Last of the BROhicans",
  "BROklahoma",
  "ChicagBRO",
  "BROtatoes",
  "BROfessional",
  "sloppy BROS",
  "SupercalifragilisticecspiealaBROcious",
  "BROvember",
  "Bronunciation",
  "U.F.BRO",
  "BRObot",
  "macaBROni",
  "MexiBRO",
  "BROtel California",
  "G.I. BRO",
  "BROmance",
  "BROducer",
  "BROordination",
  "BROgrammer",
  "BROtastic!",
];

var broWords = words.filter(word => !!word.match(/ro/));

const newArray = [];

broWords.map(word => {
  if (word.match(/bro/) || word.length < 5) {
    return false;
  } else if (word.match(/(.*)ro/)) {
    return newArray.push(word.replace(/(.*)ro/, "BRO"));
  } else {
    return newArray.push(word.replace(/ro/, "BRO"))
  }
})

export default [...brocabulary, ...newArray];