export const generateId = (prefix?: string) => {};

export const randomize = (min: number, max: number) => {
  return Math.floor(min + Math.random() * (max - min));
};
