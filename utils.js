// Util methods
export const formatCardNumber = (value) => {
  return value
    .replace(/\s?/g, '')
    .replace(/(\d{4})/g, '$1 ')
    .trim()
}

export const formatExpiryDate = (currValue, prevValue) => {
  if (currValue.length === 2 && prevValue.length === 1) {
    return (currValue += ' / ')
  }
  return currValue
}

export const formatAmount = (amount) => {
  const val = [null, undefined].includes(amount) ? 0 : amount
  return parseFloat(val)
    .toFixed(2)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export const formatAmountNoComma = (amount) => {
  const val = amount ?? 0;
  return parseFloat(val)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, ''); // Avoiding commas
};

export const formatCurrencyAmountLabel = (props,amount) => {
  return `PAY ${formatAmount(amount)} ${props.currency}`
}
