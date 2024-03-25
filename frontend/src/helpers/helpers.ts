export function getMonthYear(): { year: number; month: number } {
  const monthYear = new Date();
  return { year: monthYear.getFullYear(), month: monthYear.getMonth() + 1 };
}

export const daysOfWeek: string[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export function daysOfMonth(
  year: number,
  month: number
): { date: number; dayOfWeek: string }[] {
  const daysInMonth = new Date(year, month, 0).getDate();
  const daysArray: { date: number; dayOfWeek: string }[] = [];
  for (let day = 1; day <= daysInMonth; ++day) {
    const date = new Date(year, month - 1, day);
    const dayOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ][date.getDay()];
    daysArray.push({ date: day, dayOfWeek: dayOfWeek });
  }
  return daysArray;
}

export function getMonthName(month: number): string {
  const date = new Date();
  date.setMonth(month - 1);
  return date.toLocaleString("default", { month: "long" });
}
