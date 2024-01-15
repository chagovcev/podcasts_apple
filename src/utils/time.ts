export const millisToMinutes = (milliseconds: number): string =>
  (milliseconds / 1000 / 60).toFixed(2);

export const dateFormat = (date: string) => new Date(date).toLocaleDateString();
