export default function commaNumber(num: number) {
  // cannot read properties of undefined toString
  if (num === undefined) return 0;
  return num
    .toFixed(0)
    .replace(',', ',')
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}
