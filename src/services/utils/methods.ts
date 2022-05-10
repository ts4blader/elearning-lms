export const randomize = (min: number, max: number) => {
  return Math.floor(min + Math.random() * (max - min));
};

export const generateId = (prefix: string = "") => {
  let randomStr = randomize(0, 1000000000).toString();

  let splicePoint = randomize(0, randomStr.length - 4);

  randomStr.slice(splicePoint, 4);
  return `${prefix}-${randomStr}`;
};
