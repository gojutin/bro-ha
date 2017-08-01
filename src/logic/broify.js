
import regex from './regex';

/*
this function is responsible for converting a string to a broified string.
it takes a string or an array as an argument. 
If a string is provided, it attempts to broify the string and returns the brofied string.
If an array of strings is provided, it attempts to convert each string in the array and 
returning a broified array. 
*/

export const broify = (data) => {
  if (!data ) {
    return;
  } else if (typeof(data) === "string") {
    return handleString(data);
  } else if (Array.isArray(data)) {
    return handleArray(data);
  } else return;
}

const handleString = str => {
  const lowerStr = str.toLowerCase();
  if (!lowerStr.includes(" ")) {
    return regex(lowerStr) || lowerStr;
  } else {
    const slicesArray = [];
    lowerStr.split(" ").map(slice => {
      const broifiedSlice = regex(slice);
      if (broifiedSlice){
        return slicesArray.push(broifiedSlice)
      } else return slicesArray.push(slice);
    })
  return slicesArray.join(" "); 
  } 
};

const handleArray = (arr) => {
  let brocabArray = [];
  arr.map(str => {
    const lowerStr = str.toLowerCase();
    const broifiedString = regex(lowerStr);
    if (broifiedString) {
      return brocabArray.push(broifiedString)
    }
    return true;
  })
  return brocabArray;
};
