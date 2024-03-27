import {
  daysOfMonth,
  daysOfWeek,
  getMonthName,
  getMonthYear,
} from "../../helpers/helpers";
import styles from "./MiniCalendar.module.scss";
import { useState } from "react";

const MiniCalendar = () => {
  const [currMonth, setCurrMonth] = useState(getMonthYear().month);
  const [currYear, setCurrYear] = useState(getMonthYear().year);
  const monthName = getMonthName(currMonth);
  const incrementMonth = () => {
    setCurrMonth(() => {
      if (currMonth === 12) {
        setCurrYear(currYear + 1);
        return 1;
      } else {
        return currMonth + 1;
      }
    });
  };

  const decrementMonth = () => {
    setCurrMonth(() => {
      if (currMonth === 1) {
        setCurrYear(currYear - 1);
        return 12;
      } else {
        return currMonth - 1;
      }
    });
  };

  const blanksReq = daysOfWeek.slice(
    0,
    daysOfWeek.indexOf(daysOfMonth(currYear, currMonth)[0].dayOfWeek)
  );
  return (
    <div className={styles.outerWrapper}>
      <div className={styles.monthYearContainer}>
        {` ${monthName} ${currYear} `}
        <span className={styles.changeArrows}>
          <span onClick={decrementMonth}>↑</span>
          <span onClick={incrementMonth}>↓</span>
        </span>
      </div>
      <div className={styles.daysContainer}>
        {daysOfWeek.map((day) => (
          <span className={styles.days}>{day.slice(0, 1)}</span>
        ))}
      </div>
      <section className={styles.calCont}>
        {blanksReq.map(() => (
          <span className={styles.daySelect}></span>
        ))}
        {daysOfMonth(currYear, currMonth).map((day) => (
          <span
            className={styles.daySelect}
            onClick={() => {
              return `${day.date}/${currMonth}/${currYear}`;
            }}
          >
            {day.date}
          </span>
        ))}
      </section>
    </div>
  );
};

export default MiniCalendar;
