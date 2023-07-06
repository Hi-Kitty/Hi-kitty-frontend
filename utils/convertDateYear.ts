export default function convertDateYear(date: string) {
  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const day = date.slice(8, 10);
  return `${year}년 ${month}월 ${day}일`;
}
