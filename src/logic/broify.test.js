import { broify } from './broify';

const strings = [
  "pronoun", "prolific", "hotel", "potatoes", "november", 
  "macaroni", "potato chips", "GI Joe", "Edgar Allen Poe", "mold", 
  "robot", "Dunkin' Donuts", "Bohemian Rhapsody", "cocaine", "Mexico",
  "bone", "disobeyed", "rotate", "guacamole", "onion",
  "guacamole is made from avocados, tomatoes and onions"
];

const expectedResults = [
  "BROnoun", "BROlific", "BROtel", "BROtatoes", "BROvember", 
  "macaBROni", "BROtato chips", "gi BRO","edgar allen BRO", "BROld", 
  "BRObot", "dunkin' BROnuts", "BROhemian rhapsody", "BROcaine", "mexiBRO",
  "BROne", "disBRObeyed", "BROtate", "guacaBROle", "BROnion",
  "guacaBROle is made from aBROcados, BROmatoes and BROnions"
];

const nonbroifiableStrings = [
  "test", "car", "airplane", "sandwich", "toothpaste", 
  "bound", "brown", "bear", "bold", "short", "show",
  "bro", "bros", "bond", "perfection", "thought", 
  "count", "glow", "ravens", "sorting", "broth", "board",
  "would", "whom", "from", "become", "snore"
];

describe("brocab function", () => {

  test("returns an array", () => {
    expect(Array.isArray(broify(strings))).toBe(true)
  })

  test('returns broified string as expected', () => {
    const results = broify(strings);
    results.forEach((str, i)=> {
      expect(str).toEqual(expectedResults[i])
    })  
  })

  test('nonbroifiable strings do not get broified', () => {
    expect(broify(nonbroifiableStrings)).toEqual([])
  })  
})


