import { daysOfMonth } from "../../helpers/helpers";
import DayCard from "../../components/DayCard/DayCard";
import styles from "./Month.module.scss";
import { daysOfWeek } from "../../helpers/helpers";

import { useState } from "react";

interface MonthProps {
  year: number;
  month: number;
}

const Month = ({ year, month }: MonthProps) => {
  const [showModal, setShowModal] = useState(false);
  const currentMonthArray = daysOfMonth(year, month);
  const firstDayOfMonth = currentMonthArray[0].dayOfWeek;
  const previousMonth = month - 1 < 0 ? 11 : month - 1;
  const nextMonth = month + 1 > 11 ? 1 : month + 1;
  const currentYear = year;
  const previousYear = year - 1;
  const nextYear = year + 1;

  const previousMonthArray = daysOfMonth(
    previousMonth == 12 ? previousYear : currentYear,
    previousMonth
  );

  const leadingDaysArray = previousMonthArray.slice(
    previousMonthArray.length - daysOfWeek.indexOf(firstDayOfMonth),
    previousMonthArray.length
  );

  const trailingDaysNeeded =
    35 - leadingDaysArray.length - currentMonthArray.length - 1;

  const trailingDaysArray = daysOfMonth(
    nextMonth === 1 ? nextYear : currentYear,
    nextMonth
  ).slice(0, trailingDaysNeeded >= 0 ? trailingDaysNeeded : 0);

  return (
    <div>
      <section className={styles.monthContainer}>
        {leadingDaysArray.map((date, index) => (
          <DayCard
            key={date.date & index}
            index={index}
            date={date.date}
            month={month - 1}
            fn={() => setShowModal(true)}
          />
        ))}
        {currentMonthArray.map((date, index) => (
          <DayCard
            key={date.date & index}
            index={index}
            date={date.date}
            month={month}
            fn={() => setShowModal(true)}
          />
        ))}
        {trailingDaysArray.map((date, index) => (
          <DayCard
            key={date.date & index}
            index={index}
            date={date.date}
            month={month + 1}
            fn={() => setShowModal(true)}
          />
        ))}
      </section>
      <dialog open={showModal}>Hello</dialog>
    </div>
  );
};

export default Month;
