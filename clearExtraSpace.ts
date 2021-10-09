const testStr = "  I   LOVE    STACKOVERFLOW   LOL       ";// "I LOVE STACKOVERFLOW LOL"

export const clearExtraSpace = (value: string): string => {
    return value.replace(/[\s/]+/g," ").trim()
}

console.log(clearExtraSpace(testStr));



const removeSpaces = (str: string ) => {
  const chars = str.split('');
  const nextChars = chars.reduce(
    (acc:any, c: any) => {
      if (c === ' ') {
        const lastChar = acc[acc.length - 1];
        if (lastChar === ' ') {
          return acc;
        }
      }
      return [...acc, c];
    },
    [],
  );
  const nextStr = nextChars.join('');
  return nextStr
};

console.log(removeSpaces(testStr).trim()); 
