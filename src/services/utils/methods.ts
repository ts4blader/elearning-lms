type GetArrayItemProps = {
  id: string;
  arr: any[];
};

export const randomize = (min: number, max: number) => {
  return Math.floor(min + Math.random() * (max - min));
};

export const randomArrayItem = <T>(arr: T[]) => {
  return arr[randomize(0, arr.length)];
};

export const generateId = (prefix: string = "") => {
  let randomStr = randomize(0, 1000000);
  return `${prefix}-${randomStr}`;
};

export const getArrayItem = (id: string = "", arr: any[]) => {
  return arr.filter((item) => item.id === id)[0];
};
