const formatProductName = (productName) => {
  let replaceSpaces = productName.replace(/\s/g, '-');
  let normalizeLetterA = replaceSpaces.replace(/[àáâãä]/g, 'a');
  let normalizeLetterE = normalizeLetterA.replace(/[èéêẽë]/g, 'e');
  let normalizeCedilla = normalizeLetterE.replace(/[Çç]/g, 'c');
  let lowerCaseName = normalizeCedilla.toLowerCase();
  return lowerCaseName;
}

const formatProductPrice = (productPrice) => {
  return productPrice.split(' ')[1].replace(',', '.');
}

const convertToBRL = (number) => {
  return Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(number);
}

export {
  formatProductName,
  formatProductPrice,
  convertToBRL,
}
