export const autoCommaNumber = (number2format: number): string => {
  return number2format
    .toString()
    .split(/(?=(?:\d{3})+(?:\.|$))/g)
    .join(',');
};
