const formatProductName = (productName) => {
  let replaceSpaces = productName.replace(/\s/g, '-');
  let normalizeLetterA = replaceSpaces.replace(/[àáâãä]/g, 'a');
  let normalizeLetterE = normalizeLetterA.replace(/[èéêẽë]/g, 'e');
  let normalizeCedilla = normalizeLetterE.replace(/[Çç]/g, 'c');
  let lowerCaseName = normalizeCedilla.toLowerCase();
  return lowerCaseName;
}

export {
  formatProductName
}
