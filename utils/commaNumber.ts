export default function commaNumber(num: number) {
  if (!!num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
