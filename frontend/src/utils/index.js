const formatProductName = (productName) => {
  return productName.replace(/\s/g, '-')
    .replace(/[àáâãä]/g, 'a')
    .replace(/[èéêẽë]/g, 'e')
    .replace(/[Çç]/g, 'c')
    .toLowerCase();
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
