export const cryptoAmountToString = (amount: number) =>
  amount
    .toLocaleString('pl-PL', {
      maximumFractionDigits: 8,
    })
    .replace(',', '.');
