import { daysOfMonth, daysOfWeek } from "../../helpers/helpers";
import DayCard from "../../components/DayCard/DayCard";
import styles from "./Month.module.scss";
import { useState } from "react";
import EventForm from "../../components/EventForm/EventForm";

export interface MonthProps {
  year: number;
  month: number;
}

const Month = ({ year, month }: MonthProps) => {
  const [showModal, setShowModal] = useState(false);
  const currentMonthArray = daysOfMonth(year, month);
  const firstDayOfMonth = currentMonthArray[0].dayOfWeek;

  const previousMonthArray = daysOfMonth(year, month - 1);

  const leadingDaysArray = previousMonthArray.slice(
    previousMonthArray.length - daysOfWeek.indexOf(firstDayOfMonth),
    previousMonthArray.length
  );

  const trailingDaysNeeded =
    42 - leadingDaysArray.length - currentMonthArray.length;

  const trailingDaysArray = daysOfMonth(year, month + 1).slice(
    0,
    trailingDaysNeeded >= 0 ? trailingDaysNeeded : 0
  );

  const today = new Date().toLocaleDateString("en-GB");
  console.log(new Date().getMonth());
  console.log(month);

  return (
    <div>
      <section className={styles.monthContainer}>
        {leadingDaysArray.map((date, index) => (
          <DayCard
            key={date.dateFull.toLocaleDateString("en-GB")}
            index={index}
            date={date.date}
            month={month - 1}
            isToday={date.dateFull.toLocaleDateString("en-GB") === today}
            isThisMonth={date.dateFull.getMonth() + 1 === month}
            fn={setShowModal}
          />
        ))}
        {currentMonthArray.map((date, index) => (
          <DayCard
            key={date.dateFull.toLocaleDateString("en-GB")}
            index={index}
            date={date.date}
            month={month}
            isToday={date.dateFull.toLocaleDateString("en-GB") === today}
            isThisMonth={date.dateFull.getMonth() + 1 === month}
            fn={setShowModal}
          />
        ))}
        {trailingDaysArray.map((date, index) => (
          <DayCard
            key={date.dateFull.toLocaleDateString("en-GB")}
            index={index}
            date={date.date}
            month={month + 1}
            isToday={date.dateFull.toLocaleDateString("en-GB") === today}
            isThisMonth={date.dateFull.getMonth() + 1 === month}
            fn={setShowModal}
          />
        ))}
      </section>
      <dialog open={showModal} className={styles.dialogBase}>
        <button
          onClick={() => {
            setShowModal(false);
          }}
          className={styles.closeBtn}
        >
          X
        </button>
        <h3>{}</h3>
        <EventForm />
      </dialog>
    </div>
  );
};

export default Month;
