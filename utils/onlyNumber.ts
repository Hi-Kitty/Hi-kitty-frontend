export const onlyNumber = (value: string) => {
  return value.replace(/[^0-9]/g, '');
};