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

interface DayData {
  date: number;
  dayOfWeek: string;
  dateFull: Date;
}

export function daysOfMonth(year: number, month: number): DayData[] {
  const daysInMonth = new Date(year, month, 0).getDate();
  const daysArray: DayData[] = [];
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
    daysArray.push({ date: day, dayOfWeek: dayOfWeek, dateFull: date });
  }
  return daysArray;
}

export function getMonthName(month: number): string {
  const date = new Date();
  date.setMonth(month - 1);
  return date.toLocaleString("default", { month: "long" });
}

interface TimeValuePair {
  value: string;
  label: string;
}

export const timeValuePairs: TimeValuePair[] = [
  { value: "00:00", label: "12:00 AM" },
  { value: "00:30", label: "12:30 AM" },
  { value: "01:00", label: "1:00 AM" },
  { value: "01:30", label: "1:30 AM" },
  { value: "02:00", label: "2:00 AM" },
  { value: "02:30", label: "2:30 AM" },
  { value: "03:00", label: "3:00 AM" },
  { value: "03:30", label: "3:30 AM" },
  { value: "04:00", label: "4:00 AM" },
  { value: "04:30", label: "4:30 AM" },
  { value: "05:00", label: "5:00 AM" },
  { value: "05:30", label: "5:30 AM" },
  { value: "06:00", label: "6:00 AM" },
  { value: "06:30", label: "6:30 AM" },
  { value: "07:00", label: "7:00 AM" },
  { value: "07:30", label: "7:30 AM" },
  { value: "08:00", label: "8:00 AM" },
  { value: "08:30", label: "8:30 AM" },
  { value: "09:00", label: "9:00 AM" },
  { value: "09:30", label: "9:30 AM" },
  { value: "10:00", label: "10:00 AM" },
  { value: "10:30", label: "10:30 AM" },
  { value: "11:00", label: "11:00 AM" },
  { value: "11:30", label: "11:30 AM" },
  { value: "12:00", label: "12:00 PM" },
  { value: "12:30", label: "12:30 PM" },
  { value: "13:00", label: "1:00 PM" },
  { value: "13:30", label: "1:30 PM" },
  { value: "14:00", label: "2:00 PM" },
  { value: "14:30", label: "2:30 PM" },
  { value: "15:00", label: "3:00 PM" },
  { value: "15:30", label: "3:30 PM" },
  { value: "16:00", label: "4:00 PM" },
  { value: "16:30", label: "4:30 PM" },
  { value: "17:00", label: "5:00 PM" },
  { value: "17:30", label: "5:30 PM" },
  { value: "18:00", label: "6:00 PM" },
  { value: "18:30", label: "6:30 PM" },
  { value: "19:00", label: "7:00 PM" },
  { value: "19:30", label: "7:30 PM" },
  { value: "20:00", label: "8:00 PM" },
  { value: "20:30", label: "8:30 PM" },
  { value: "21:00", label: "9:00 PM" },
  { value: "21:30", label: "9:30 PM" },
  { value: "22:00", label: "10:00 PM" },
  { value: "22:30", label: "10:30 PM" },
  { value: "23:00", label: "11:00 PM" },
  { value: "23:30", label: "11:30 PM" },
];
