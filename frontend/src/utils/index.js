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

const formatProductInstallments = (productInstallments, quantity) => {
  let productParcel = productInstallments.split(' ')[0];
  let newInstallment = productInstallments.split(' ')[2].replace(',', '.');

  newInstallment = convertToBRL(newInstallment * quantity)

  return `${productParcel} ${newInstallment}`;
}

export {
  formatProductName,
  formatProductPrice,
  formatProductInstallments,
  convertToBRL,
}
