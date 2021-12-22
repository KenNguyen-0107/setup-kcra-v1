export const truncateWalletAddress = (
  address: string,
  numberOfBeginningCharToShow?: number,
  numberOfEndingCharToShow?: number,
): string => {
  return `${address.substr(
    0,
    numberOfBeginningCharToShow || 6,
  )}***${address.substring(
    numberOfEndingCharToShow
      ? address.length - numberOfEndingCharToShow
      : address.length - 4,
  )}`;
};
